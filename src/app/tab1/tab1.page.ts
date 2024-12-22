import { Component, OnInit } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';

import { PokemonDetailsComponent } from '../components/pokemon-details/pokemon-details.component';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page 
{

  pokemonDataList: any[] = [];

  constructor(private pokeapiService : PokeapiService, private modalController : ModalController) {}

  ngOnInit() 
  {
    for(let i = 0; i < 15; i++)
    {
      const id = this.pokeapiService.getRandomId(1, 1010);
      this.pokeapiService.getPokemon(id).subscribe((data) => {
        this.pokemonDataList.push(data)});
    }
  }

  async openPokemonDetails(pokemon: any)
  {
    const modal = await this.modalController.create({
      component: PokemonDetailsComponent,
      componentProps: {pokemon},
    });
    await modal.present();
  }
    
}
