import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { pokemonReducer } from './store/reducer/pokemon-reducer';
import { pokemonDetailReducer } from './store/reducer/pokemon-detail-reducer';
import { pokemonFavoriteReducer } from './store/reducer/pokemon-favorite-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore({
      pokemon: pokemonReducer,
      pokemonDetail: pokemonDetailReducer,
      pokemonFavorite: pokemonFavoriteReducer
    }),
  ],
};
