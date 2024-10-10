import { Observable } from "rxjs";
import { IPokemonAndImage, IPokemonDetail } from "../../interfaces";

export interface PokemonDetailState {
    pokemonsDetail: IPokemonDetail | null;
    loading: boolean;
    error: string | null;
    selectedPokemon: string
  }
  
  export const initialPokemonState: PokemonDetailState = {
    pokemonsDetail: null,
    loading: true,
    error: null,
    selectedPokemon:'pikachu' 
  };