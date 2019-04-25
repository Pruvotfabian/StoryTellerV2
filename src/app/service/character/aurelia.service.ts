import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AureliaService {
  introDialId: boolean = false;
  choix: boolean = false;
  choixb: boolean = false;
  dialId : number = 0;
  clickarea1: boolean = false;
  
  constructor(public dS: HeaderService) { }

     //debut Dial Aurelia
     dial(){
      if (this.introDialId == false) {
        $('.imgcha').addClass('active');
        this.dS.name = "Aurelia : ";
        this.dS.test = "Bonjour, Commandant !";
        this.choix = true;
      }
      if (this.introDialId == true) {
        this.dS.name = "Aurelia : ";
        this.dS.test = "Oui, Commandant ?";
        this.choixb = true;
      }
    }
    // choix neutre Aurelia
  choix1et2(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Aurelia, Lieutenant Aurelia. Le capitaine a beaucoup parlé de vous.";
    this.choix = false;
    this.choixb = true;
    this.introDialId = true
  }
  //choix info Aurelia
  choixinfo1(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Très bonne question, il y a 20 ans de cela sur ma planète natale Felucia, l'empire a réalisé un raid qui a coûté la vie à bon nombre de mes amis. Et ... aussi de mon frère Lairo... C'est là que j'ai rejoint la rébellion pour faire payer à l'empire ces crimes.";
    $('.next').addClass('active');
    this.dialId = 0;

  }
  choixinfo2(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Je l'ai connu lors de l'assaut de Dantoine, il m'a sauvé la vie. Du coup j'ai rejoint son équipage à bord du suprematis avant d'être réaffecté sur le Simplonis.";
    $('.next').addClass('active');
    this.dialId = 3;
  }
  choixinfo3(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Je suis la mécanicienne en chef et je m'occupe aussi de l'approvisionnement";
  }
  //Revoir AUrelia
  choixrevoir(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Au revoir commandant. Le capitaine vous attend dans le poste de commandemant.";
    this.choixb = false;
    this.clickarea1 = true;
    $('.imgcha').removeClass('active');
    this.introDialId = true;
  }


  //choix lumineux Aurelia
  choixL(){
    this.introDialId = true;
    this.dS.name = "Aurelia : ";
    this.dS.test = "Mais moi de même je suis très heureuse de vous rencontrer, on parle de vous comme d'un héros, j'ai hâte que vous nous racontiez vos aventures commandant. Mais je suis impolie, mon nom est Aurelia. Caporale Aurelia";
    this.choix = false;
    this.choixb = true;
  }

  // choix Obscure Aurelia
  choixO(){

    this.dS.name = "Aurelia : ";
    this.dS.test = "Oh ! Oui ... Je suis désolé de vous avoir dérangé commandant. Le capitaine vous attend au poste de commandemant.";
    this.choix = false;
    this.clickarea1 = true;
    $('.imgcha').removeClass('active');
  }

  dialnext(){
    this.dialId++;
    //Dialogue AURELIA 1
    if (this.dialId === 1) {
      this.dS.name = "Commandant Kila :";
      this.dS.test = "Vos amis était des rebelles ?";
    }
    if (this.dialId === 2) {
      this.dS.name = "Aurelia : ";
      this.dS.test = "Absolument pas. Certes le principal objectif de ce raid était de détruire une cellule rebelle présente dans ce secteur. Mais les impériaux non fait aucune distinction entre rebelle et civil...";
      $('.next').removeClass('active');
      this.dialId = 0;
    }
    //Dialogue AURELIA 2
    if (this.dialId === 4) {
      this.dS.name = "Commandant Kila : ";
      this.dS.test = "Il vous a sauvé ?";
    }
    if (this.dialId === 5) {
      this.dS.name = "Aurelia : ";
      this.dS.test = "Oui, a l'époque j'avais déjà rejoint la rébellion. Mon équipe et moi étions en mission de reconnaissance mais ...";
    }
    if (this.dialId === 6) {
      this.dS.name = "Aurelia : ";
      this.dS.test = "On est tombé dans une embuscade pirate on a tenu le plus longtemps possible, mais de toute mon équipe je suis la seule à avoir survécue... Le capitaine est arrivé juste à tant pour me sauver.";
      $('.next').removeClass('active');
      this.dialId = 0;
    }

  }
}
