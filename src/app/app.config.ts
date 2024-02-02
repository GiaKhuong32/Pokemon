import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { pokemonReducer } from './ngrx/pokemon.reducer';
import { PokemonEffects } from './ngrx/pokemon.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(
    {pokemon: pokemonReducer}
  ), provideEffects(
    [PokemonEffects]
  ),
  provideHttpClient()
]
};
