import { Injectable } from "@angular/core";
import { PokemonService } from "../services/pokemon.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PokemonActions from './pokemon.action';
import { map, switchMap,catchError } from "rxjs";

@Injectable()
export class PokemonEffects{
    constructor(private actions: Actions,private pokemonService: PokemonService){}

    $getPokemon = createEffect(() => this.actions.pipe(
        ofType(PokemonActions.getAllPokemon),
        switchMap((action) => this.pokemonService.getAllPokemon(action.page).pipe(
          map((pokemon: any) => PokemonActions.getAllPokemonSuccess({pokemon_species: pokemon['pokemon_species']})),
          catchError((error) => [PokemonActions.getAllPokemonFailure({error})])
        ))
      ))
}