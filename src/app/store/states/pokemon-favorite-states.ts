import { IPokemonAndImage } from "../../interfaces";

export interface PokemonFavoriteState {
    pokemonsFavorites: IPokemonAndImage[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialPokemonFavoriteState: PokemonFavoriteState = {
    pokemonsFavorites: [],
    loading: false,
    error: null,
  };