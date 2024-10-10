import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonFavoriteState } from '../states/pokemon-favorite-states';

export const selectPokemonFavoriteState = createFeatureSelector<PokemonFavoriteState>('pokemonFavorite');

export const favoritesPokemon = createSelector(
    selectPokemonFavoriteState,
  (state: PokemonFavoriteState) => state.pokemonsFavorites
);

export const selectedPokemonLoading = createSelector(
    selectPokemonFavoriteState,
  (state: PokemonFavoriteState) => state.loading
);

export const selectedPokemonError = createSelector(
  selectPokemonFavoriteState,
  (state: PokemonFavoriteState) => state.error
);