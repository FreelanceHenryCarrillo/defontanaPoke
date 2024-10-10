import { Action, createReducer, on } from '@ngrx/store';
import {
  setLoadingDetails,
  setLoadPokemonName,
  setLoadPokemonSelected,
  setLoadPokemonSelectedFailure,
} from '../actions/pokemon-detail-actions';
import {
  initialPokemonState,
  PokemonDetailState,
} from '../states/pokemon-details-state';

const _pokemonDetailReducer = createReducer(
  initialPokemonState,
  on(setLoadPokemonSelected, (state, { detail }) => ({
    ...state,
    loading: false,
    pokemonsDetail: detail,
  })),
  on(setLoadPokemonSelectedFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(setLoadingDetails, (state, { isLoading }) => ({
    ...state,
    loading: isLoading,
  })),
  on(setLoadPokemonName, (state, { name }) => ({
    ...state,
    selectedPokemon: name,
  }))
);

export function pokemonDetailReducer(
  state: PokemonDetailState | undefined,
  action: Action
) {
  return _pokemonDetailReducer(state, action);
}
