import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httplient: HttpClient) { }

  getAllPokemon(page: string){
    return this.httplient.get(`https://pokeapi.co/api/v2/generation/generation-${page}/`);
  }
}
