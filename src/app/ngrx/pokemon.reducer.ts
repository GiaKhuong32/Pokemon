import { createReducer, on } from "@ngrx/store";
import { Pokemonstate } from "./pokemon.state";
import * as PokemonActions from './pokemon.action';

export const initialState: Pokemonstate = {
    pokemon_species: [],
    loading: false,
    error: ''
}

export const pokemonReducer = createReducer(
    initialState,
    on(PokemonActions.getAllPokemon, (state, {page}) => {
        return{
            ...state,
            loading: true
        }
        }
    ),
    on(PokemonActions.getAllPokemonSuccess, (state, {pokemon_species}) => {
        return{
            ...state,
            pokemon_species: pokemon_species,
            loading: false
        }
        }
    ),
    on(PokemonActions.getAllPokemonFailure, (state, {error}) => {
        return{
            ...state,
            error: error,
            loading: false
        }
        }
    )
);