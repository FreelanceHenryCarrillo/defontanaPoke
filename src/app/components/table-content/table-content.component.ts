import { matFavoriteBorderOutline } from '@ng-icons/material-icons/outline';
import { PokemonService } from './../../services/pokemon.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { IPokemonAndImage } from '../../interfaces';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { PaginationComponent } from '../footer/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectPokemons,
  selectPokemonsLoading,
} from '../../store/selectors/pokemon-selector';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { setLoadPokemonName } from '../../store/actions/pokemon-detail-actions';
import { setLoading } from '../../store/actions/pokemon-actions';

@Component({
  selector: 'app-table-content',
  standalone: true,
  imports: [
    NgIconComponent,
    PaginationComponent,
    FormsModule,
    AsyncPipe,
    CommonModule,
    NgClass,
  ],
  viewProviders: [provideIcons({ matFavoriteBorderOutline })],
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css'],
})
export class TableContentComponent implements OnInit, OnChanges {
  pokemons$: Observable<IPokemonAndImage[]>;
  loading: Observable<boolean>;
  displayedPokemons: IPokemonAndImage[] = [];
  selectedPokemonName: string = '';
  selectedFavorite: IPokemonAndImage[] = [];
  @Input() filterTerm: string = '';

  errorMessage: string | undefined;
  page: number = 1;
  totalPokemons: number = 1302;
  pokemonsPerPage: number = 50;
  totalPages: number = 0;

  constructor(private pokemonService: PokemonService, private store: Store) {
    this.pokemons$ = this.store.select(selectPokemons);
    this.loading = this.store.select(selectPokemonsLoading);
  }

  ngOnInit(): void {
    this.loadPokemon();
  }

  ngOnChanges() {
    this.applyFilter();
  }

  private loadPokemon() {
    this.pokemonService.loadAllPokemon(1, this.totalPokemons);
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.applyFilter();
  }

  applyFilter() {
    this.pokemons$.subscribe((pokemons: IPokemonAndImage[]) => {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.filterTerm.toLowerCase())
      );

      this.totalPages = Math.ceil(
        filteredPokemons.length / this.pokemonsPerPage
      );

      if (this.page > this.totalPages || this.filterTerm) {
        this.page = this.totalPages > 0 ? this.totalPages : 1;
      }

      this.displayedPokemons = this.paginate(filteredPokemons);
    });
  }

  paginate(filteredPokemons: IPokemonAndImage[]): IPokemonAndImage[] {
    const startIndex = (this.page - 1) * this.pokemonsPerPage;
    return filteredPokemons.slice(
      startIndex,
      startIndex + this.pokemonsPerPage
    );
  }

  onChangeSelected(name: string) {
    this.selectedPokemonName = name;
    this.store.dispatch(setLoadPokemonName({ name: this.selectedPokemonName }));
  }

  get paginatedPokemons() {
    return this.displayedPokemons;
  }

  onClickFavorite(item: IPokemonAndImage ) {
    this.pokemonService.onfavorite(item);
  }


}
