import { createAction, props } from "@ngrx/store";
import { Pokemon } from "./pokemon.model";

export const getAllPokemon = createAction(
    '[Pokemon] Get All Pokemon',
    props<{page:string}>()
);

export const getAllPokemonSuccess = createAction(
    '[Pokemon] Get All Pokemon Success',
    props<{pokemon_species : Pokemon[]}>()
);

export const getAllPokemonFailure = createAction(
    '[Pokemon] Get All Pokemon Failure',
    props<{error:string}>()
);