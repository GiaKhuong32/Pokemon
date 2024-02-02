import { Pokemon } from "./pokemon.model";

export interface Pokemonstate { 
    pokemon_species: Pokemon[],
    loading: boolean,
    error: string
}

