import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  standalone: false,  
})
export class PokemonDetailsComponent {

  @Input() pokemon: any;

  constructor(private modalController : ModalController) { }

  closeModal() 
  {
    this.modalController.dismiss();
  }
  
  

}
