import { Component, OnInit } from '@angular/core';
import { EnemisService } from '../../service/enemis.service'
import { HeaderService } from 'src/app/service/header.service';
import { TropheeService } from 'src/app/service/trophee.service';
import * as $ from 'jquery';
import { vingtcentService } from 'src/app/service/character/20100.service';
import { AureliaService } from 'src/app/service/character/aurelia.service';
import { EnorcbesService } from 'src/app/service/character/enorcbes.service';
import { NaibafService } from 'src/app/service/character/naibaf.service';
import { ClickareaComponent } from 'src/app/clickarea/clickarea.component';

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


  ngOnInit() {
    //chargement  
    setTimeout(() => {
      this.chargement = false;
    },2000)
    setTimeout(() => {
      $('.transleft').addClass('active');
      $('.transtop').addClass('active');
    },2000)
    setTimeout(() => {
      this.dS.name = "Pilote : ";
      this.dS.test = "En approche du Simplonis Commandant ! [Ouvre le canal] Ici le Tarnas, demande autorisation d'atterrir... ";
      $('.img2').addClass('active');
      $('.transleft').removeClass('active');
      $('.transtop').removeClass('active');
    },17000)
    setTimeout(() => {
      this.dS.name = "Officier de pont : ";
      this.dS.test = "Autorisation d'atterrir accordé Tarnas, rendez-vous au hangar B !";
      $('.img1').addClass('active');
      $('.transright').addClass('active');
      // this.dAureliaS.dial();
    },25000)
    setTimeout(() => {
      this.dS.name = "Pilote : ";
      this.dS.test = "Nous sommes arrivés commandant. Le Caporale Aurelia vous attend.";
      $('.img3').addClass('active');
      $('.transhangar').addClass('active');
      $('.transright').removeClass('active');
    },33000)
    setTimeout(() => {
      this.dAureliaS.dial();
      $('.img4').addClass('active');
      $('.transhangar').removeClass('active');
    },37000)
  }
  
  continued(){
    this.dS.name = "";
    this.dS.test = "";
    this.dAureliaS.clickarea1 = false;
    $('.img2').removeClass('active');
    $('.img3').removeClass('active');
    $('.img4').removeClass('active');
    $('.img5').addClass('active');
    setTimeout(() => {
      $('.img6').addClass('active');
    },3000)
    setTimeout(() => {
      this.clickarea2 = true;
      $('.img7').addClass('active');
    },5000)
  }

  
 
  
}
// Dlanod Prump