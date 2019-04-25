import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class NaibafService {

  choix: boolean = false;
  choixb: boolean = false;
  dialId : number = 0;
  introDialId: boolean = false;
  constructor(public dS: HeaderService) { }

    // Nai Baf
    dial(){
      if (this.introDialId == false) {
        $('.transition5').addClass('active');
        this.dS.name = "Nai Baf : ";
        this.dS.test = "[Salut Militaire] C'est vous le commandant ?";
        this.choix = true;
      }
      if (this.introDialId == true) {
        this.dS.name = "Nai Baf : ";
        this.dS.test = "Oui Commandant ?";

      }
     
    }
     // choix neutre 20-100
     choixneutre(){
      this.dS.name = "Nai Baf :";
      this.dS.test = "Oh ! Oui excuser moi je ne me suis pas présenté. Nai baf pour vous servire. Je sais que vous êtes a la recherche d'un traitre. Je crois que j'ai des information pour vous. Je sais de source quasiment fiable que le lieutenant Enorc est dans le coup ! ";
      this.choix = false;
      this.choixb = true;
    }
      //choix lumineux Enorc Bes
  choixL(){
    this.dS.name = "Nai Baf : ";
    this.dS.test = "Je me présente Nai Baf pour vous servire. Je suis au courant de votre mission commandant et je sais de source quasiment fiable que le lieutenant Enorc est dans le coup ! ";
    this.choix = false;
    this.choixb = true;
 
}
choixLb(){
    this.dS.name = "Nai Baf : ";
    this.dS.test = "Je ne lui manque pas de respect ! ";
    $('.next4').addClass('active');
    this.dialId = 0;
    this.choixb = false;

}

   //choix obscure Enorc Bes
   choixO(){
    this.dS.name = "Nai Baf : ";
    this.dS.test = "Je suis désolé de vous avoir importuné commandant !";
    this.choix = false;
    this.introDialId = true;
}
choixOb(){
  this.dS.name = "Nai Baf : ";
  this.dS.test = "Je ... je Compris commandant je ne vous importunerais plus !";
    this.choixb = false;
    this.introDialId = true;
}

dialnext(){
  this.dialId++;
      //Dialogue Nai baf
      if (this.dialId === 1) {
        
        this.dS.name = "Commandant Kila : ";
        this.dS.test = "Difficile a croire vue vos propos";
      }
      if (this.dialId === 2) {
        this.dS.name = "Nai Baf : ";
        this.dS.test = "Mais faites commme vous le voulez commandant je vous previens juste";
      }
      if (this.dialId === 3) {
        this.dS.name = "Commandant Kila : ";
        this.dS.test = "Juste arréter de le calomnier";
      }
      if (this.dialId === 4) {
        this.dS.name = "Nai Baf : ";
        this.dS.test = " Oui commandant, désolé";
        $('.next4').removeClass('active');
        this.dialId = 0;
        this.introDialId = true;
      }
}

  
}
