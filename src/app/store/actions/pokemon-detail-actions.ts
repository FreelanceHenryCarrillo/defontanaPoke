import { IPokemonDetail } from './../../interfaces/pokemon';
import { createAction, props } from '@ngrx/store';

export const setLoadingDetails = createAction(
  '[PokemonDetail] Set Loading',
  props<{ isLoading: boolean }>()
);

export const setLoadPokemonSelected = createAction(
  '[PokemonDetail] set Load Pokemon Selected',
  props<{ detail: IPokemonDetail }>()
);

export const setLoadPokemonName = createAction(
    '[PokemonDetail] set Load Pokemon Name',
    props<{ name: string }>()
  );

export const setLoadPokemonSelectedFailure = createAction(
  '[PokemonDetail] set Load Pokemon Failed ',
  props<{ error: string }>()
);
