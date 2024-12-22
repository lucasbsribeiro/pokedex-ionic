import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface PokemonData {
  id: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})


export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage : Storage) {
    this.init();
   }

   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
   }

   async addPokemon(id: number) {
    const currentDate = new Date().toISOString().split('T')[0];
    const pokemonList: PokemonData[] = (await this._storage?.get('pokemonList')) || [];
    if(!pokemonList.find(p => p.id === id)) {
      pokemonList.push({id, date: currentDate});
      await this._storage?.set('pokemonList', pokemonList);
    }
   }

   async getAllPokemons() : Promise<PokemonData[]> {
    return (await this._storage?.get('pokemonList')) || [];
   }  
}
