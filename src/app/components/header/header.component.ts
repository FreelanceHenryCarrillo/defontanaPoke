import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  favoritesPokemon,
  selectedPokemonLoading,
} from '../../store/selectors/pokemon-favorite-selectors';
import { Observable } from 'rxjs';
import { IPokemonAndImage } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { selectedPokemonError } from '../../store/selectors/pokemon-detail-selector';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matDeleteOutline } from '@ng-icons/material-icons/outline';
import { deletePokemonFavorites } from '../../store/actions/pokemon-favorite-actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ matDeleteOutline })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  Logo: string = 'DefontanaPoke';
  pokemonsFavorite$: Observable<IPokemonAndImage[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store, private PokemonService: PokemonService) {
    this.pokemonsFavorite$ = this.store.select(favoritesPokemon);
    this.loading$ = this.store.select(selectedPokemonLoading);
    this.error$ = this.store.select(selectedPokemonError);
  }

  ngOnInit(): void {}

  onDeletePoke(name: string) {
    this.store.dispatch(deletePokemonFavorites({ name }));
  }
}
