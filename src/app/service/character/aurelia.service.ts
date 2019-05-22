import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import * as $ from 'jquery';
import { KarmaService } from '../karma.service';

@Injectable({
  providedIn: 'root'
})
export class AureliaService {
  introDialId: boolean = false;
  choix: boolean = false;
  choixb: boolean = false;
  choixc: boolean = false;
  choixattack: boolean = false;
  dialId : number = 0;
  clickarea1: boolean = false;
  
  constructor(
    public dS: HeaderService,
    public kS: KarmaService,
    ) { }

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
    dialattack(){
      if (this.introDialId == false) {
        this.dS.name = "Aurelia : ";
        this.dS.test = "Ah ! Commandant ! Prenez ce casque il reste encore un chasseur... le tarnas va vous apporter un soutien !";
        this.introDialId = true;
      }
      if (this.introDialId == true) {
        this.dS.name = "Aurelia : ";
        this.dS.test = "Prenez le casque et monter à bord du chasseur, vite commandant !";
      }
    }
    casque(){
      this.dS.name = "Aurelia : ";
      this.dS.test = "C'est bon vous avez votre casque ? Bien ! Des questions ?";
      this.choixattack = true;
    }
    remove(){
      this.choixattack = false;
    }
    infoattack(){
      this.dS.name = "Aurelia : ";
      this.dS.test = "Biensûr commandant ! 20-100 à élaboré une stratégie, il faut retenir le plus longtemps possible les impériaux le tant que l'arme charge... le Tarnas vous fourniras un soutien contre le destroyer stellaire. Autre chose ?";
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
    this.kS.lumineux++;
  }
  choixLb(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Mer ... [Se reprend] Merci Commandant ! ";
    this.choixb = true;
    this.choixc = false;
    this.kS.lumineux += 5;
    console.log(this.kS.lumineux);
  }

  // choix Obscure Aurelia
  choixO(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Oh ! Oui bien sûr je suis désolé commmandant. Le capitaine vous attend au poste de commandemant.";
    this.choix = false;
    this.clickarea1 = true;
    $('.imgcha').removeClass('active');
    this.kS.obscur++;
  }
  choixOb(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Je ne ... [Se lamente] ... tant de mort par ma faute ... j'aurais mieux fait d'y rester moi aussi... Le commandant vous attend sur le pont. Au revoir commandant."
    this.choixc = false;
    this.clickarea1 = true;
    $('.imgcha').removeClass('active');
    this.kS.obscur += 5;
    console.log(this.kS.obscur);
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
      this.dS.test = "Absolument pas. Certes le principal objectif du raid était de détruire une cellule rebelle local. Mais les impériaux non fait aucune distinction entre rebelle et ... civil.";
      $('.next').removeClass('active');
      this.dialId = 0;
    }
    //Dialogue AURELIA 2
    if (this.dialId === 4) {
      this.dS.name = "Commandant Kila : ";
      this.dS.test = "Il vous a sauvé ?";
      this.choixb = false;
    }
    if (this.dialId === 5) {
      this.dS.name = "Aurelia : ";
      this.dS.test = "Oui, à l'époque j'avais déjà rejoint la rébellion. Mon équipe et moi étions partis en mission de reconnaissance mais ...";
    }
    if (this.dialId === 6) {
      this.dS.name = "Aurelia : ";
      this.dS.test = "On est tombé dans une embuscade pirate...[sanglote] on a tenu le plus longtemps possible, mais toute mon équipe a été décimée je ... je suis la seule à avoir survécue... Le capitaine est arrivé juste à temps pour me sauver.";
      $('.next').removeClass('active');
      this.choixc = true;
      this.dialId = 0;
    }

  }
}
