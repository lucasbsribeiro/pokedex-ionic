import { Component } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';
import { PropDecorator } from 'ionicons/dist/types/stencil-public-runtime';

import { PokemonDetailsComponent } from '../components/pokemon-details/pokemon-details.component';

import { ModalController } from '@ionic/angular';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private pokeapiService : PokeapiService, 
    private modalController : ModalController, private storageService : StorageService) {}

  async openPokemonDetail(pokemon: any)
  {
    const modal = await this.modalController.create({
      component: PokemonDetailsComponent,
      componentProps: {pokemon},
    });
    await modal.present();
  }

  async getPokemon()
  {
    const id = this.pokeapiService.getRandomId(1, 1001);
    this.pokeapiService.getPokemon(id).subscribe((pokemon: any) => {
      this.openPokemonDetail(pokemon);
    });
  }

  async addPokemon(pokemonData: any) {
    await this.storageService.addPokemon(pokemonData.id);
  }

  
}
