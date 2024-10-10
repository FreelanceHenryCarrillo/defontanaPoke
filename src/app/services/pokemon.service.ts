import { IPokemonAndImage, IResultPokemon } from './../interfaces/pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  filter,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { IPokemon, IPokemonDetail } from '../interfaces';
import { Environment } from '../environment';
import {
  loadPokemonsFailure,
  loadPokemonsSuccess,
  setLoading,
} from '../store/actions/pokemon-actions';
import { Store } from '@ngrx/store';
import {
  setLoadingDetails,
  setLoadPokemonSelected,
  setLoadPokemonSelectedFailure,
} from '../store/actions/pokemon-detail-actions';
import {
  setLoadingFavorite,
  setPokemonFavorites,
} from '../store/actions/pokemon-favorite-actions';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = Environment.apiUrl;
  constructor(private http: HttpClient, private store: Store) {}

  loadAllPokemon(page: number, limit: number): void {
    this.store.dispatch(setLoading({ isLoading: true }));
    this.http
      .get<IResultPokemon>(
        `${this.baseUrl}/pokemon?offset=${(page - 1) * limit}&limit=${limit}`
      )
      .pipe(
        switchMap((response) => {
          const pokemonDetailsRequests = response.results.map((pokemon) =>
            this.http.get<IPokemon>(pokemon.url).pipe(
              map((pokemonDetail) => {
                if (pokemonDetail && pokemonDetail.sprites) {
                  return {
                    name: pokemon.name,
                    image: pokemonDetail.sprites.front_default || '',
                    count: response.count,
                  };
                } else {
                  return null;
                }
              }),
              filter((pokemonDetail) => pokemonDetail !== null)
            )
          );

          return forkJoin(pokemonDetailsRequests);
        })
      )
      .subscribe(
        (pokemons) => {
          this.store.dispatch(loadPokemonsSuccess({ pokemons }));
        },
        (error) => {
          this.store.dispatch(loadPokemonsFailure({ error: error.message }));
        }
      );
  }

  getPokemonByName(name: string): void {
    this.store.dispatch(setLoadingDetails({ isLoading: true }));
    this.http
      .get<IPokemonDetail>(`${this.baseUrl}/pokemon/${name}`)
      .pipe(
        map((pokemonDetail) => {
          const pokemonData = {
            name: pokemonDetail.name,
            sprites: pokemonDetail.sprites,
            abilities: pokemonDetail.abilities,
            height: pokemonDetail.height,
            weight: pokemonDetail.weight,
            stats: pokemonDetail.stats,
            base_experience: pokemonDetail.base_experience,
          };

          this.store.dispatch(setLoadPokemonSelected({ detail: pokemonData }));
          return pokemonData;
        }),
        catchError((error) => {
          console.error('Error fetching Pokémon:', error);
          this.store.dispatch(setLoadPokemonSelectedFailure({ error }));
          return of(null);
        })
      )
      .subscribe();
  }

  onfavorite(pokemon: IPokemonAndImage) {
    try {
      this.store.dispatch(setLoadingFavorite({ isLoading: true }));
      this.store.dispatch(setPokemonFavorites({ favorite: pokemon }));
      console.log(`${pokemon.name} ha sido añadido a favoritos.`);
    } catch (error) {
      console.error('Error al añadir a favoritos:', error);
      this.store.dispatch(setLoadingFavorite({ isLoading: false }));
    }
  }
}
