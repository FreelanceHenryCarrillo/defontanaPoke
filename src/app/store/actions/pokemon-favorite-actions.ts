import { IPokemonAndImage } from '../../interfaces/pokemon';
import { createAction, props } from '@ngrx/store';

export const setLoadingFavorite = createAction(
  '[Favorite] Set Loading',
  props<{ isLoading: boolean }>()
);

// Acción para agregar un Pokémon a favoritos
export const setPokemonFavorites = createAction(
  '[Favorite] Set Pokemon Favorites',
  props<{ favorite: IPokemonAndImage }>()
);

export const setPokemonFavoritesFailure = createAction(
  '[Favorite] set Load Pokemon Favorite Failed ',
  props<{ error: string }>()
);


export const deletePokemonFavorites= createAction(
  '[Favorite] delete pokemon on favorites',
  props<{ name: string }>()
);
