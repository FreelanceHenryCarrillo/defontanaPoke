import { IPokemonAndImage } from "../../interfaces";

export interface PokemonState {
    pokemons: IPokemonAndImage[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialPokemonState: PokemonState = {
    pokemons: [],
    loading: false,
    error: null,
  };