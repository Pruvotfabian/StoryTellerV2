import { Component, OnInit } from '@angular/core';
import { EnemisService } from '../../service/enemis.service'
import { HeaderService } from 'src/app/service/header.service';
import { TropheeService } from 'src/app/service/trophee.service';

@Component({
  selector: 'app-jeux-prologue',
  templateUrl: './jeux-prologue.component.html',
  styleUrls: ['./jeux-prologue.component.css']
})
export class JeuxPrologueComponent implements OnInit {
  chargement: boolean = true;

  debut: boolean = false;
  milieu: boolean = false;
  fin: boolean = false;
  fin2: boolean = false;
  fin2a: boolean = false;
  fin3: boolean = false;

  dialId : number = 0;
  buttone : boolean = false;

  choix: boolean = false;
  choix2: boolean = false;
  constructor(public eS: EnemisService, public dS: HeaderService, public tS: TropheeService) {

   }


  ngOnInit() {
    setTimeout(() => {
      this.chargement = false;
    },8000)
    setTimeout(() => {
      this.debut = true;
    },9000)
    setTimeout(() => {
      this.milieu= true;
    },10000)
    setTimeout(() => {
      this.fin = true;
    },11000)
    setTimeout(() => {
      this.fin2 = true;
      this.fin2a = true;
    },12000)

  }
  // choix neutre
  choix1et2(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Aurelia, Lieutenant Aurelia. Le capitaine a beaucoup parlé de vous, il vous attend dans la salle de commandement.";
    this.choix = false;
    this.choix2 = true;
  }
  //choix info
  choixinfo1(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Très bonne question, il y a 20 ans de cela sur ma planète natale Felucia, l'empire a réalisé un raid qui a coûté la vie à bon nombre de mes amis. Et ... aussi de mon frère Lairo... C'est là que j'ai rejoint la rébellion pour faire payer à l'empire ces crimes.";
    this.buttone = true;

  }
  choixinfo2(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Je l'ai connu lors de l'assaut de Dantoine, il m'a sauvé la vie. Du coup j'ai rejoint son équipage à bord du suprematis avant d'être réaffecté sur le Simplonis.";
    this.buttone = true;
    this.dialId = 3;
  }
  choixinfo3(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Je suis le mécanicien en chef et je m'occupe aussi du hangar pour l'approvisionnement";
  }
  choixrevoir(){
    this.dS.name = "Aurelia : ";
    this.dS.test = "Au revoir commandant";
    this.choix2 = false;
  }
  //choix lumineux
  choixL(){
    this.tS.premierD = true;
    console.log(this.tS.premierD)
    this.dS.name = "Aurelia : ";
    this.dS.test = "Mais moi de même je suis très heureuse de vous rencontrer, on parle de vous comme d'un héros, j'ai hâte que vous nous racontiez vos aventures commandant. Mais je suis impolie, mon nom est Aurelia. Lieutenant Aurelia";
    this.choix = false;
    this.choix2 = true;
  }
  // choix Obscure
  choixO(){
    this.dS.name = "??? : ";
    this.dS.test = "Oh ! Oui ... Je suis désolé de vous avoir dérangé commandant";
    this.choix = false;
  }
  dial(){
    this.fin2a = false;
    this.fin3 = true;
    
    this.dS.name = "??? : ";
    this.dS.test = "Bonjour, Commandant !";
    this.choix = true;
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
      this.buttone = false;
      this.dialId = 0;
    }

    //Dialogue AURELIA 2
    if (this.dialId === 4) {
      this.dS.name = "Commandant : ";
      this.dS.test = "Il vous a sauvé ?";
    }
    if (this.dialId === 5) {
      this.dS.name = "Aurelia : ";
      this.dS.test = "Oui, a l'époque j'avais déjà rejoint la rébellion. Mon équipe et moi étions en mission de reconnaissance mais ...";
    }
    if (this.dialId === 6) {
      this.dS.name = "Commandant : ";
      this.dS.test = "Quelque chose à mal tournée ?";
    }
    if (this.dialId === 7) {
      this.dS.name = "Aurelia : ";
      this.dS.test = "Oui c'était une catastrophe, on est tombé dans une embuscade pirate on a tenu le plus longtemps possible, mais de toute mon équipe je suis la seule à avoir survécue... Le capitaine est arrivé juste à tant pour me sauver.";
      this.buttone = false;
      this.dialId = 0;
    }

  }
}
