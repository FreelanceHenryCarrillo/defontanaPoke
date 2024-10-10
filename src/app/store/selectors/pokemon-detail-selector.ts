import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  PokemonDetailState } from '../states/pokemon-details-state';

export const selectPokemonState = createFeatureSelector<PokemonDetailState>('pokemonDetail');

export const selectedPokemonName = createSelector(
    selectPokemonState,
  (state: PokemonDetailState) => state.selectedPokemon
);
export const selectedPokemonArr = createSelector(
    selectPokemonState,
  (state: PokemonDetailState) => state.pokemonsDetail
);
export const selectedPokemonLoading = createSelector(
    selectPokemonState,
  (state: PokemonDetailState) => state.loading
);

export const selectedPokemonError = createSelector(
  selectPokemonState,
  (state: PokemonDetailState) => state.error
);