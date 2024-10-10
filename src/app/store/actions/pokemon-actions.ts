import { createAction, props } from '@ngrx/store';
import { IPokemonAndImage } from '../../interfaces';

export const loadPokemons = createAction('[Pokemon] Load Pokemons');
export const loadPokemonsSuccess = createAction(
  '[Pokemon] Load Pokemons Success',
  props<{ pokemons: IPokemonAndImage[] }>()
);
export const loadPokemonsFailure = createAction(
  '[Pokemon] Load Pokemons Failed',
  props<{ error: string }>()
);

export const setLoading = createAction(
  '[Pokemon] Set Loading',
  props<{ isLoading: boolean }>()
);


