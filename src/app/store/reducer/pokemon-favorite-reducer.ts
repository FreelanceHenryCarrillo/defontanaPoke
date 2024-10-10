import { Action, createReducer, on } from '@ngrx/store';
import {
  deletePokemonFavorites,
  setLoadingFavorite,
  setPokemonFavorites,
  setPokemonFavoritesFailure,
} from '../actions/pokemon-favorite-actions';
import {
  initialPokemonFavoriteState,
  PokemonFavoriteState,
} from '../states/pokemon-favorite-states';

const _pokemonFavoriteReducer = createReducer(
  initialPokemonFavoriteState,
  on(setPokemonFavorites, (state, { favorite }) => {
    const exists = state.pokemonsFavorites.some(
      (p) => p.name === favorite.name
    );

    const updatedFavorites = exists
      ? state.pokemonsFavorites
      : [...state.pokemonsFavorites, favorite];

    return {
      ...state,
      loading: false,
      pokemonsFavorites: updatedFavorites,
    };
  }),
  on(setPokemonFavoritesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(setLoadingFavorite, (state, { isLoading }) => ({
    ...state,
    loading: isLoading,
  })),
  on(deletePokemonFavorites, (state, { name }) => {
    const updatedFavorites = state.pokemonsFavorites.filter(
      (poke) => poke.name !== name
    );

    return {
      ...state,
      loading: false,
      pokemonsFavorites: updatedFavorites,
    };
  })
);

export function pokemonFavoriteReducer(
  state: PokemonFavoriteState | undefined,
  action: Action
) {
  return _pokemonFavoriteReducer(state, action);
}
