import { Component } from '@angular/core';

import { PokemonDetailsComponent } from '../components/pokemon-details/pokemon-details.component';

import { ModalController } from '@ionic/angular';
import { PokeapiService } from '../services/pokeapi.service';

import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page 
{
  pokemonList: any[] = [];

  constructor(private pokeapiService : PokeapiService, private modalController : ModalController, private storageService : StorageService) {}

  async loadPokemons() {
    const storagePokemonList = await this.storageService.getAllPokemons();
  
    if (storagePokemonList.length > 0) {
      const promises = storagePokemonList.map((storedPokemon: any) =>
        this.pokeapiService.getPokemon(storedPokemon.id).toPromise()) 

        const pokemonDataArray = await Promise.all(promises);
        this.pokemonList = pokemonDataArray;
    }
  }

  async ionViewWillEnter()
  {
    await this.loadPokemons();
  }

  async openPokemonDetail(pokemon: any)
  {
    const modal = await this.modalController.create({
      component: PokemonDetailsComponent,
      componentProps: { pokemon },
    });
    await modal.present();
  }
}

