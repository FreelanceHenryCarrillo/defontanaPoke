import { PokemonService } from './../../services/pokemon.service';
import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { Store } from '@ngrx/store';
import {
  selectedPokemonArr,
  selectedPokemonLoading,
  selectedPokemonName,
} from '../../store/selectors/pokemon-detail-selector';
import { Observable, of, switchMap } from 'rxjs';
import { IPokemonDetail } from '../../interfaces';
import { ListComponent } from "../footer/list/list.component";

@Component({
  selector: 'app-detail-cards',
  standalone: true,
  imports: [NgClass, NgIconComponent, CommonModule, ListComponent],
  templateUrl: './detail-cards.component.html',
  viewProviders: [provideIcons({ heroArrowLeft })],
  styleUrl: './detail-cards.component.css',
})
export class DetailCardsComponent implements OnInit {
  @Input() isActiveSidebar: boolean = false; 
  pokemonsDetail$: Observable<string>;
  pokemonsDetailArr$: Observable<IPokemonDetail | null>;
  loading: Observable<boolean>;

  constructor(private pokemonService: PokemonService, private store: Store) {
    this.pokemonsDetail$ = this.store.select(selectedPokemonName);
    this.pokemonsDetailArr$ = this.store.select(selectedPokemonArr);
    this.loading = this.store.select(selectedPokemonLoading);
  }

  ngOnInit(): void {
    this.pokemonsDetail$
      .pipe(
        switchMap((pokemonName) => {
          if (pokemonName) {
            this.pokemonService.getPokemonByName(pokemonName);
          }
          return of(null);
        })
      )
      .subscribe();
  }

}
