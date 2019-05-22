import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import * as $ from 'jquery';
import { KarmaService } from '../karma.service';

@Injectable({
  providedIn: 'root'
})
export class vingtcentService {
  choix: boolean = false;
  choixb: boolean = false;
  dialId : number = 0;
  introDialId: boolean = false;
  constructor(
    public dS: HeaderService,
    public kS: KarmaService,
    ) { }

    // 100-20
    dial(){
      if (this.introDialId == false) {
        this.dS.name = "20-100 : ";
        this.dS.test = "Bonjour, Commandant ... l'unité 20-100 et prête. L'on est trés heureux de vous rencontrer... L'on espére pouvoir coopérer du mieux que nous pouvons.";
        this.choix = true;
      }
      if (this.introDialId == true) {
        this.dS.name = "20-100 : ";
        this.dS.test = "L'on peut faire autre chose?";
        this.choixb = true;
      }
     
    }
     // choix neutre 20-100
     choixneutre(){
      this.dS.name = "20-100 : ";
      this.dS.test = "Unité 20-100 prête!";
      this.choix = false;
      this.choixb = true;
    }
    //choix info 20-100
  choixinfo1(){
    this.dS.name = "20-100 : ";
    this.dS.test = "L'on est l'unité numero 20, fabriqué dans l'unité d'assemblage 100 de la planéte Géonosis... Vous autre nous on apellé ainsi 20-100...";
    $('.next2').addClass('active');
    this.dialId = 0;
  }
  choixinfo2(){
    this.dS.name = "20-100 : ";
    this.dS.test = "Notre langague ? ... [Réfléchis] --Erreur donnée introuvable-- ";

  }
  choixinfo3(){
    this.dS.name = "20-100 : ";
    this.dS.test = "L'on est la pour aider le capitaine, dans tout les apescts tactique et militaire.";
  }
    //revoir 20-100
    choixrevoir(){
      $('.transition3').removeClass('active');
      this.dS.name = "20-100 : ";
      this.dS.test = "L'on est trés heureux de vous avoir rencontré... Commandant.";
      this.choixb = false;
      this.introDialId = true;

    }
      //choix lumineux 100-20
  choixL(){
    this.dS.name = "20-100 : ";
    this.dS.test = "Nous de même Commandant ! Mais appelé nous 20-100";
    this.choix = false;
    this.choixb = true;
    this.kS.lumineux++;
}
   //choix obscure 100-20
   choixO(){
    this.dS.name = "20-100 : ";
    this.dS.test = "Le capitaine vous attend... Il est juste la ... Aller lui parler";
    this.introDialId = true;
    $('.click3').removeClass('active');
    $('.transition3').removeClass('active');
    this.kS.obscur++;
}
dialnext(){
  this.dialId++;
      //Dialogue 20-100
      if (this.dialId === 1) {
        this.dS.name = "Commandant Kila : ";
        this.dS.test = "Vous avez fait la guerre des clones?";
        $('.click3').removeClass('active');
      }
      if (this.dialId === 2) {
        this.dS.name = "20-100 : ";
        this.dS.test = "Oui... L'on a servie au ordre des séparatistes... Puis à la fin de la guerre l'on à était désactivé comme tout les droides de combats... ";
      
      }
      if (this.dialId === 3) {
        this.dS.name = "Commandant Kila : ";
        this.dS.test = "Comment êtes vous arrivez ici?";
      }
      if (this.dialId === 4) {
        this.dS.name = "20-100 : ";
        this.dS.test = "L'on a rejoint la rébellion de notre plein gré."
      }
      if (this.dialId === 5) {
        this.dS.name = "Commandant Kila : ";
        this.dS.test = "Non, je voulais dire qui vous a réactivé?";
      }
      if (this.dialId === 6) {
        this.dS.name = "20-100 : ";
        this.dS.test = "[Réfléchis] --Erreur donnée introuvable--"
        $('.next2').removeClass('active');
        $('.click3').addClass('active');
        this.dialId = 0;
      }
}

}
