import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EnemisService } from '../../service/enemis.service'
import { HeaderService } from 'src/app/service/header.service';
import { TropheeService } from 'src/app/service/trophee.service';
import * as $ from 'jquery';
import { vingtcentService } from 'src/app/service/character/20100.service';
import { AureliaService } from 'src/app/service/character/aurelia.service';
import { EnorcbesService } from 'src/app/service/character/enorcbes.service';
import { NaibafService } from 'src/app/service/character/naibaf.service';


@Component({
  selector: 'app-jeux-prologue',
  templateUrl: './jeux-prologue.component.html',
  styleUrls: ['./jeux-prologue.component.css']
})
export class JeuxPrologueComponent implements OnInit {
  clickarea2: boolean = false;
  chargement: boolean = true;
  choix2: boolean = false;
  choix4: boolean = false;
  choix5: boolean = false;
  choix5b: boolean = false;


  constructor(
    
    public eS: EnemisService, 
    public dS: HeaderService, 
    public tS: TropheeService, 
    public d20100S: vingtcentService,
    public dAureliaS: AureliaService,
    public denocbesS: EnorcbesService,
    public dnaibafS: NaibafService,
    ) {

   }
 
   @ViewChild('audioIntro') audioPlayerRefIntro: ElementRef;
   @ViewChild('audioTarnas') audioPlayerRefTarnas: ElementRef;
   @ViewChild('audioTarnasInside') audioPlayerRefTarnasInside: ElementRef;
   @ViewChild('audioTarnasPose') audioPlayerRefTarnasPose: ElementRef;
   @ViewChild('audioHangar') audioPlayerRefHangar: ElementRef;
   @ViewChild('audioPontAmbiance') audioPlayerRefPont: ElementRef;
   @ViewChild('audioButton') audioPlayerRefButton: ElementRef;
   @ViewChild('audioDoorOpen') audioPlayerRefDoorOpen: ElementRef;
   @ViewChild('audioDoorOpenBis') audioPlayerRefDoorOpenBis: ElementRef;
   @ViewChild('audioWait') audioPlayerRefWait: ElementRef;
   @ViewChild('audioWalk') audioPlayerRefWalk: ElementRef;
   
  ngOnInit() {
         //chargement
         setTimeout(() => {
          //Sound intro
          this.audioPlayerRefIntro.nativeElement.play(); 
          // fin chargement
          this.chargement = false;
          this.chargementOk()
        },8000)
   
  }
  chargementOk(){
      // transition vaiseaux
      $('.transleft').addClass('active');
      $('.transtop').addClass('active');
    setTimeout(() => {
      //sound tarnas
      this.audioPlayerRefTarnas.nativeElement.play(); 
    }, 10000);
    setTimeout(() => {
      //fin son tarnas
      this.audioPlayerRefIntro.nativeElement.pause(); 
      this.audioPlayerRefTarnas.nativeElement.pause();
      // sound tarnas inside
      this.audioPlayerRefTarnasInside.nativeElement.play(); 
      //Dial Pilote
      this.dS.name = "Pilote : ";
      this.dS.test = "En approche du Simplonis Commandant ! [Ouvre le canal] Ici le Tarnas, demande autorisation d'atterrir... ";
      // image Tarnas
      $('.img2').addClass('active');
      // retire effet Trans 
      $('.transleft').removeClass('active');
      $('.transtop').removeClass('active');
    },15000)

     
    setTimeout(() => {
      // fin Sound tarnas inside
      this.audioPlayerRefTarnasInside.nativeElement.pause(); 
      // dial officier de pont
      this.dS.name = "Officier de pont : ";
      this.dS.test = "Autorisation d'atterrir accordé Tarnas, rendez-vous au hangar B !";
      //Image Simplonis pont
      $('.img1').addClass('active');
      // trans tarnas
      $('.transright').addClass('active');
    },25000)
    setTimeout(() => {
      // sound tarnas pose
      this.audioPlayerRefTarnasPose.nativeElement.play(); 
    }, 28000);
    setTimeout(() => {
      // space move
      $('.imgBackgroundSpace').addClass('active');
      // dial pilote
      this.dS.name = "Pilote : ";
      this.dS.test = "Nous sommes arrivés commandant. Le Caporale Aurelia vous attend.";
      // image pont
      $('.img3').addClass('active');
      // trans tarnas pose
      $('.transhangar').addClass('active');
      // fin trans tarnas pont
      $('.img1').removeClass('active');
      $('.transright').removeClass('active');
    },33000)
    setTimeout(() => {
      // space move stop
      $('.imgBackgroundSpace').removeClass('active');
      // fin trans tarnas pose
      $('.transhangar').removeClass('active');
      // reset dial
      this.dS.name = "  ";
      this.dS.test = "";
      // sound hangar
      this.audioPlayerRefHangar.nativeElement.play(); 
      // entrance Killa 1
      $('.imgKilla1').addClass('active');
    }, 38000);
    setTimeout(() => {
      // sound door
      this.audioPlayerRefDoorOpen.nativeElement.play(); 
      // entrance killa 2
      $('.imgKilla2').addClass('active');
    }, 39000);
    setTimeout(() => {
      // walk sound
      this.audioPlayerRefWalk.nativeElement.play(); 
      $('.imgKilla3').addClass('active');
    }, 41000);
    setTimeout(() => {
      // dial Aurelia
      this.dAureliaS.dial();
      // walk sound
      this.audioPlayerRefWalk.nativeElement.pause();
      //image hangar
      $('.img4').addClass('active');
    },43000)
  
  }
  
  continued(){
    // Sound Button
    this.audioPlayerRefButton.nativeElement.play(); 
    // Reset Dial
    this.dS.name = "";
    this.dS.test = "";
    // reset Click area
    this.dAureliaS.clickarea1 = false;
    // reset all image
    $('.img2').removeClass('active');
    $('.img3').removeClass('active');
    $('.img4').removeClass('active');
    // Door image
    $('.img5').addClass('active');

    setTimeout(() => {
      // door Sound
      this.audioPlayerRefDoorOpen.nativeElement.play(); 
      // image door open
      $('.img6').addClass('active');
    },3000)

    setTimeout(() => {
      //space move
      $('.imgBackgroundSpace').addClass('activez');
      // hangar sound reset
      this.audioPlayerRefHangar.nativeElement.pause(); 
      // pont Sound 
      this.audioPlayerRefPont.nativeElement.play();
      // add click area 2
      this.clickarea2 = true;
      // Add image pont 2
      $('.img7').addClass('active');
    },5000)
  }

  continued2(){
    // reset dial
    this.dS.name = "";
    this.dS.test = "";
    // reset click area 2
    this.clickarea2 = false;
    // reset all image
    $('.img5').removeClass('active');
    $('.img6').removeClass('active');
    $('.img7').removeClass('active');
    // ascenseur image
    $('.img8').addClass('active');
    setTimeout(() => {
      // reset image
      $('.img8').removeClass('active');
      // Door open
      this.audioPlayerRefDoorOpenBis.nativeElement.play();
      // kailly
      this.dS.name = "Lieutenant Kailly : ";
      this.dS.test = "Ah ! Commandant, vous montez ? Je vous fait une place [Se Décale]";
      // ascenseur image 2
      $('.img9').addClass('active');
    },3000)
    setTimeout(() => {
      // pont sound reset
      this.audioPlayerRefPont.nativeElement.pause();
      // reset dial
      this.dS.name = "";
      this.dS.test = "";
      // sound wait
      this.audioPlayerRefWait.nativeElement.play(); 
      // ascenseur inside
      $('.img10').addClass('active');
    },5000)
    setTimeout(() => {
      // sound door open
      this.audioPlayerRefDoorOpenBis.nativeElement.play();
      // dial Kailly
      this.dS.name = "Lieutenant Kailly : ";
      this.dS.test = "C'est la fin de la demo";
      // fin wait
      this.audioPlayerRefWait.nativeElement.pause(); 
      // image pont 3
      $('.img11').addClass('active');
    },23000)

  }
  
 
  
}