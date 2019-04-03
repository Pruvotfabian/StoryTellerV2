import { Component, OnInit } from '@angular/core';
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
  chargement: boolean = true;
  walk: boolean = false;
  door: boolean = false;
  fin: boolean = false;
  dialId : number = 0;
  choix2: boolean = false;
  
  choix4: boolean = false;
  choix5: boolean = false;
  choix5b: boolean = false;
  continuer: boolean = false;
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


  ngOnInit() {
    //chargement  
    setTimeout(() => {
      this.chargement = false;
    },8000)
    //et transition Aurelia
    setTimeout(() => {
      $('.img1').addClass('active');
      this.walk = true;
    },9000)
    setTimeout(() => {
      $('.img2').addClass('active');
    },10000)
    setTimeout(() => {
      this.door = true;
      $('.img3').addClass('active');
    },11000)
    setTimeout(() => {
      $('.img4').addClass('active');
    },12000)
    setTimeout(() => {
      this.dS.name = "Tuto : ";
      this.dS.test = "Quand vous voyez un personnage clickez dessus pour parler avec lui.";
      $('.img5').addClass('active');
      $('.click').addClass('active');
      $('.click2').addClass('active');
    },13000)

  }
  
  continued(){
    console.log('test');
    $('.click').removeClass('active');
    $('.click2').removeClass('active');
    setTimeout(() => {
      $('.img1').removeClass('active');
      $('.img2').removeClass('active');
      $('.img3').removeClass('active');
      $('.img4').removeClass('active');
      $('.img5').removeClass('active');
    }, 1500);
    setTimeout(() => {
      this.dS.name = "";
      this.dS.test = "";
      $('.img6').addClass('active');
    }, 2000);
    setTimeout(() => {
      $('.img7').addClass('active');
    }, 4000);
    setTimeout(() => {
      $('.img8').addClass('active');
    }, 6000);
    setTimeout(() => {
      $('.img9').addClass('active');
    }, 7000);
    setTimeout(() => {
      $('.click3').addClass('active');
      $('.click4').addClass('active');
      $('.click5').addClass('active');
      $('.img10').addClass('active');
    }, 8000);
  }
  //ASTROMECH
  dial2(){
    $('.transition2').addClass('active');
    this.dS.name = "R4-F8 : ";
    this.dS.test = "Sudo make me a sandwich."
    this.choix2 = true;
    this.tS.linuxInside = true;
  }
  //CHOIX EUH
  choixeuh(){
    $('.transition2').removeClass('active');
    this.choix2 = false;
    $('.click2').removeClass('active');
  }
  
}
