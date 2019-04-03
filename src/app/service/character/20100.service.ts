import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class vingtcentService {
  choix3: boolean = false;
  choix3b: boolean = false;
  dialId : number = 0;
  introDialId: boolean = false;
  constructor(public dS: HeaderService) { }

    // 100-20
    dial(){
      if (this.introDialId == false) {
        $('.transition3').addClass('active');
        this.dS.name = "??? : ";
        this.dS.test = "Bonjour, Commandant ... l'unité 20-100 et prête. L'on est trés heureux de vous rencontrer... L'on espére pouvoir coopérer du mieux que nous pouvons.";
        this.choix3 = true;
      }
      if (this.introDialId == true) {
        $('.transition3').addClass('active');
        this.dS.name = "20-100 : ";
        this.dS.test = "L'on peut faire autre chose ?";
        this.choix3b = true;
      }
     
    }
     // choix neutre 20-100
     choixneutre(){
      this.dS.name = "20-100 : ";
      this.dS.test = "Surpris... L'on ne voulez pas vous faire peur commandant... L'on est désolé...";
      this.choix3 = false;
      this.choix3b = true;
    }
    //choix info 20-100
  choixinfo1(){
    this.dS.name = "20-100 : ";
    this.dS.test = "L'on est l'unité numero 20, fabriqué dans l'unité d'assemblage 100... Vous autre nous on apellé ainsi 20-100... Étrange nom...";

  }
  choixinfo2(){
    this.dS.name = "20-100 : ";
    this.dS.test = "C'est ainsi que l'on a était programmés... Cela énerve beaucoup les organiques, déjâ à l'époque de la grande guerre l'on avais déjâ ce probléme...";
    $('.next2').addClass('active');
    this.dialId = 0;
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
      this.choix3b = false;
      this.introDialId = true;
    }
      //choix lumineux 100-20
  choixL(){
    this.dS.name = "20-100 : ";
    this.dS.test = "Nous de même Commandant !";
    this.choix3 = false;
    this.choix3b = true;
}
   //choix obscure 100-20
   choixO(){
    this.dS.name = "20-100 : ";
    this.dS.test = "Comme il vous plairas commandant... L'on ne vous dérangeras plus.";
    this.choix3 = false;
    this.introDialId = true;
    $('.click3').removeClass('active');
}
dialnext(){
  this.dialId++;
      //Dialogue 20-100
      if (this.dialId === 1) {
        this.dS.name = "Commandant Kila : ";
        this.dS.test = "Vous avez fait la guerre des clones ?";
      }
      if (this.dialId === 2) {
        this.dS.name = "20-100 : ";
        this.dS.test = "Oui... L'on a servie au ordre des séparatistes... Puis à la fin de la guerre l'on à était désactivé comme tout les droides de combat... La rébellion nous a trouvé, et reprogrammé, maintenant l'on cert à bord du Simplonis";
        $('.next2').removeClass('active');
        this.dialId = 0;
      }

}

  

}
