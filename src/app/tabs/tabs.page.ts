import { Component } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  constructor(private pokeapiService: PokeapiService) {}

}
