import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';

@Injectable({
  providedIn: 'root'
})
export class JoakimService {

  constructor(public dS: HeaderService) { }
  introDialId: boolean = false;
  choix: boolean = false;
  choixb: boolean = false;
  dialId : number = 0;
  dial(){
    if (this.introDialId == false) {
      this.dS.name = "Joa Kim : ";
      this.dS.test = "Commandant ! Le capitaine vous attend sur le pont prennez l'ascenseur sur votre gauche";
      
    }
    // if (this.introDialId == true) {
    //   this.dS.name = "Joa Kim : ";
    //   this.dS.test = "Oui, Commandant ?";
    //   this.choixb = true;
    // }
  }
  dialattack(){
    if (this.introDialId == false) {
      this.dS.name = "Joa Kim : ";
      this.dS.test = "Commandant ! Le caporale Aurelia vous attend... Aller la voir, elle est dans le hangar. Elle vous fourniras un chasseur.";
      // this.introDialId = true;
    }
    if (this.introDialId == true) {
      this.dS.name = "Joa Kim : ";
      this.dS.test = "Aller voir le caporale Aurelia, vite commandant !";
    }
  }
}
