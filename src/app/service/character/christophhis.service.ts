import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import * as $ from 'jquery';
import { KarmaService } from '../karma.service';

@Injectable({
  providedIn: 'root'
})
export class ChristophhisService {
  
  choix: boolean = false;
  choixb: boolean = false;
  dialId : number = 0;
  introDialId: boolean = false;
  constructor(
    public dS: HeaderService,
    public kS: KarmaService,
    ) { }
    // choixb remove
    removeb(){
      this.choixb = false;
    }
    // christophhis
    dial(){
      this.dS.name = "Capitaine Chritophhis : ";
      this.dS.test = "[Observe la vue] Ah ! Commandant ravie de vous voir en se triste jour.";
      this.choix = true;
    }
    choix1et2(){
      this.dS.name = "Capitaine Chritophhis : ";
      this.dS.test = "Parfait, pour faire simple les informations transimisent à l'empire ne contiennent pas seulement sa localistion...";
      $('.next5').addClass('active');
      this.dialId = 0;
      this.choix = false;
      this.kS.lumineux++;
    }
    dialnext(){
      this.dialId++;
          //Dialogue christophhis
          if (this.dialId === 1) {
            this.dS.name = "Commandant Kila : ";
            this.dS.test = "Que voulez vous dire ?";
          }
          if (this.dialId === 2) {
            this.dS.name = "Captaine Christophhis : ";
            this.dS.test = "Je peut vous mettre au courant commandant... [Se retourne] Le Simplonis est une arme de nouvelle génération. Elle peut nous permettre mettre l'empire à genous. Les données envoyé contiennent en plus les plan détaillés du Simplonis et de son armement";
          }
          if (this.dialId === 3) {
            this.dS.name = "Commandant Kila : ";
            this.dS.test = "C'est une catastrophe !";
          }
          if (this.dialId === 4) {
            this.dS.name = "Captaine Christophhis : ";
            this.dS.test = "Effectivement commandant ! Nous avons bien falli perdre le simplonis une fois... Il faut mettre la main sur le traître et savoir pourquoi ? Il nous a trahis.";
          }
          if (this.dialId === 5) {
            this.dS.name = "Commandant Kila : ";
            this.dS.test = "C'était peu être une taupe ?";
          }
          if (this.dialId === 6) {
            this.dS.name = "Captaine Christophhis : ";
            this.dS.test = "Impossible Commandant j'ai une confiance absolut envers mes hommes, c'est impossible... Il à forcément était contraint.";
          }
          if (this.dialId === 7) {
            this.dS.name = "Officier de Pont : ";
            this.dS.test = "CAPITAINE ! On a détecté du mouvement dans le secteur...";
          }
          if (this.dialId === 8) {
            this.dS.name = "Captaine Christophhis : ";
            this.dS.test = "Scanner le secteur ! Tout de suite ! [Regarde les panneaux de contrôle] Commandant aller dans la bai d'amarrage !";
            $('.next5').removeClass('active');
            this.dialId = 0;
            this.choixb = true;
          }
        }
    
}
