import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class EnorcbesService {
  choix: boolean = false;
  choixb: boolean = false;
  dialId : number = 0;
  introDialId: boolean = false;
  constructor(public dS: HeaderService) { }

    // Enorc Bes
    dial(){
      if (this.introDialId == false) {
        this.dS.name = "Enorc Bes : ";
        $('.imgcha2').addClass('active');
        this.dS.test = "[Salut Militaire] Commandant !";
        this.choix = true;
      }
      if (this.introDialId == true) {
        this.dS.name = "Enorc Bes : ";
        $('.imgcha2').addClass('active');
        this.dS.test = "Oui, commandant ?";
        this.choixb = true;
      }
     
    }
     // choix neutre 20-100
     choixneutre(){
      this.dS.name = "Enorc Bes : ";
      this.dS.test = "Je me présente, Lieutenant Enorc Bes du 6éme escadron de X-wing !";
      this.choix = false;
      this.choixb = true;
    }
    //choix info 20-100
  choixinfo1(){
    this.dS.name = "Enorc Bes : ";
    this.dS.test = "J'ai ... je ... ne suis pas fier de ce que j'ai fait ...";
    $('.next3').addClass('active');
    this.dialId = 0;

  }
  choixinfo2(){
    this.dS.name = "Enorc  Bes : ";
    this.dS.test = "Depuis trés peu de temps, moins d'un mois tout au plus.";

  }
  choixinfo3(){
    this.dS.name = "Enorc Bes : ";
    this.dS.test = "Je suis simplement un pilote.";
  }
    //revoir Enorc Bes
    choixrevoir(){
      this.dS.name = "Enorc Bes : ";
      this.dS.test = "Trés heureux de vous avoir rencontré commandant";
      this.choixb = false;
      $('.imgcha2').removeClass('active');
      this.introDialId = true;

    }
      //choix lumineux Enorc Bes
  choixL(){
    this.dS.name = "Enorc Bes : ";
    this.dS.test = "Je suis ravie de vous rencontrer Commandant. Je me présente, Lieutenant Enorc Bes du 6éme escadron de X-wing !";
    this.choix = false;
    this.choixb = true;
}
   //choix obscure Enorc Bes
   choixO(){
    this.dS.name = "Enorc Bes : ";
    this.dS.test = "Bien évidement, Commandant le capitaine n'attend pas";
    this.choix = false;
    this.introDialId = true;
    $('.imgcha2').removeClass('active');
}
dialnext(){
  this.dialId++;
      //Dialogue Enorc BEs
      if (this.dialId === 1) {
        this.dS.name = "Commandant Kila : ";
        this.dS.test = "Lieutenant ?";
      }
      if (this.dialId === 2) {
        this.dS.name = "Enorc Bes : ";
        this.dS.test = "Oui... je ...pour tout vous dire j'ai servie dans la marine impériale... Il y a de sa environ 3 ans";
      }
      if (this.dialId === 3) {
        this.dS.name = "Commandant Kila : ";
        this.dS.test = "Je vois...";
      }
      if (this.dialId === 4) {
        this.dS.name = "Enorc Bes : ";
        this.dS.test = "Non, vous pouvez pas voir... vous n'êtes pas a ma place commandant... Vous pouvez pas savoir a quel point c'est compliqué pour moi, le regard des autres...";
      }
      if (this.dialId === 5) {
        this.dS.name = "Enorc Bes : ";
        this.dS.test = "Autre chose ?";
        $('.next3').removeClass('active');
        this.dialId = 0;
      }
}

  


}
