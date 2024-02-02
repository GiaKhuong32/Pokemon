import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemonstate } from './ngrx/pokemon.state';
import { Store } from '@ngrx/store';
import * as PokemonActions from './ngrx/pokemon.action';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokemon';
  constructor(private store: Store<{pokemon: Pokemonstate}>){
    this.store.dispatch(PokemonActions.getAllPokemon({page: 'i'}));
  }
  pokemon$ = this.store.select(state => state.pokemon.pokemon_species);
  loading$ = this.store.select(state => state.pokemon.loading);
  error$ = this.store.select(state => state.pokemon.error);
}
