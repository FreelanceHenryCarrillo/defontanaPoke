import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from '../states/pokemon-state';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemons = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.pokemons
);
export const selectPokemonsLoading = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.loading
);

export const selectPokemonError = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.error
);