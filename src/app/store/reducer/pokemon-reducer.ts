import { Action, createReducer, on } from '@ngrx/store';
import { initialPokemonState, PokemonState } from '../states/pokemon-state';
import { loadPokemons, loadPokemonsFailure, loadPokemonsSuccess, setLoading } from '../actions/pokemon-actions';

const _pokemonReducer = createReducer(
  initialPokemonState,
  on(loadPokemons, (state) => ({ ...state, loading: true })),
  on(loadPokemonsSuccess, (state, { pokemons }) => ({
    ...state,
    loading: false,
    pokemons: pokemons,
  })),
  on(loadPokemonsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(setLoading, (state, { isLoading }) => ({
    ...state,
    loading: isLoading
  })),

);


export function pokemonReducer(state: PokemonState | undefined, action: Action) {
  return _pokemonReducer(state, action);
}
