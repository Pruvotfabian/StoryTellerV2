import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';
import { TropheeService } from 'src/app/service/trophee.service';
import * as $ from 'jquery';
import { vingtcentService } from 'src/app/service/character/20100.service';
import { AureliaService } from 'src/app/service/character/aurelia.service';
import { EnorcbesService } from 'src/app/service/character/enorcbes.service';
import { NaibafService } from 'src/app/service/character/naibaf.service';
import { ChristophhisService } from 'src/app/service/character/christophhis.service';



import { SurchauffeService } from 'src/app/service/surchauffe.service';
import { EnemisService } from 'src/app/service/enemis.service';
import { HealhbarService } from 'src/app/service/healhbar.service';
import { KarmaService } from 'src/app/service/karma.service';
import { TheGameComponent } from '../the-game/the-game.component';
import { ConsequenceService } from 'src/app/service/consequence.service';



@Component({
  selector: 'app-jeuxspacebattle',
  templateUrl: './jeuxspacebattle.component.html',
  styleUrls: ['./jeuxspacebattle.component.css']
})
export class JeuxspacebattleComponent implements OnInit {
  battle: boolean = false;
  chargement: boolean = true;
  clickarea: boolean = false;
  clickarea2: boolean = false;
  choixTarnas: boolean = false;
  choixPod: boolean = false;
  constructor(
    public dS: HeaderService, 
    public tS: TropheeService, 
    public d20100S: vingtcentService,
    public dAureliaS: AureliaService,
    public denocbesS: EnorcbesService,
    public dnaibafS: NaibafService,
    public dchristophhisS: ChristophhisService,
    public game: TheGameComponent,
    public sd: SurchauffeService,
    public es: EnemisService, 
    public hS: HealhbarService,
    public kS: KarmaService,
    public cS: ConsequenceService,
  ) { }
  @ViewChild('audioAlarm') audioPlayerRefAlarm: ElementRef;
  @ViewChild('audioHangar') audioPlayerRefHangar: ElementRef;
  @ViewChild('audioPontAmbiance') audioPlayerRefPont: ElementRef;
  @ViewChild('audioDoorOpenBis') audioPlayerRefDoorOpenBis: ElementRef;
  @ViewChild('audioWait') audioPlayerRefWait: ElementRef;
  @ViewChild('audioWalk') audioPlayerRefWalk: ElementRef;
  @ViewChild('audioJump') audioPlayerRefJump: ElementRef;
  @ViewChild('audioDecollage') audioPlayerRefStart: ElementRef;
  @ViewChild('audioTarnas') audioPlayerRefTarnas: ElementRef;
  @ViewChild('audioSquadron') audioPlayerRefSquadron: ElementRef;
  @ViewChild('audioArrival') audioPlayerRefArrival: ElementRef;
  @ViewChild('audioMotor') audioPlayerRefMotor: ElementRef;
  @ViewChild('audioShoot') audioPlayerRefShoot: ElementRef;
  ngOnInit() {
    var cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
           //chargement
           setTimeout(() => {
            // fin chargement
            this.chargement = false;
            this.chargementOk()
          },1000)
  }
  sound(){
    this.audioPlayerRefShoot.nativeElement.play(); 
  }
  chargementOk(){
      this.audioPlayerRefJump.nativeElement.play(); 
      this.audioPlayerRefArrival.nativeElement.play();
      this.dS.name = "Officier de Pont : ";
      this.dS.test = "C'est quelque chose de gros...";
      $('.transcenter').addClass('active');
    setTimeout(() => {
      this.dS.name = "Capitaine Christophhis : ";
      this.dS.test = "C'est l'empire préparez vous!"
    }, 4000);
    setTimeout(() => {
      // ambiance Pont
      this.audioPlayerRefPont.nativeElement.play();
      
      // Dial EMpire
      this.dS.name = "Capitaine Emix Am : ";
      this.dS.test = "Parfait! Nous les avons retrouvé, cette pourriture de rebelle paieront! "
      
      // animation
      $('.imgdest1').addClass('active');
      $('.transleft').addClass('active');
      // reset
      $('.transcenter').removeClass('active');
      this.audioPlayerRefJump.nativeElement.pause(); 
    }, 8000);
    setTimeout(() => {
      // reset
      $('.imgdest1').removeClass('active');
      $('.transleft').removeClass('active');
      // Animation
      $('.imgdest2bis').addClass('active');
      $('.imgBackgroundSpace').addClass('active');
      // dial
      this.dS.name = "Capitaine Emix Am : ";
      this.dS.test = "Il est temps de passer à la vitesse supérieur! "
      setTimeout(() => {
        // dial
        this.dS.name = "Lieutenant Niemad Enud : ";
        this.dS.test = "Mais Capitaine, nous ne devrions pas avertir le seigneur Vador?"
      }, 6000);
      setTimeout(() => {
        // reset
        $('.imgdest2bis').removeClass('active');
        // dial
        $('.imgdest2').addClass('active');
        this.dS.name = "Capitaine Emix Am : ";
        this.dS.test = "NON! Je vais m'occupper personnellement des rebelles! Lancé la chasse! "
      }, 9000);
      setTimeout(() => {
        // reset
        $('.imgdest2ter').addClass('active');
        
        $('.imgdest2').removeClass('active');
         // dial
        this.dS.name = "Lieutenant Niemad Enud : ";
        this.dS.test = "A vos ordres Capitaine!"
      }, 13000);
    }, 13000);
    setTimeout(() => {
      // reset
      this.audioPlayerRefArrival.nativeElement.pause()
      this.audioPlayerRefPont.nativeElement.pause(); 
      $('.imgdest2ter').removeClass('active');
      $('.imgBackgroundSpace').removeClass('active');
      // Sound
      this.audioPlayerRefAlarm.nativeElement.play(); 
      this.audioPlayerRefWait.nativeElement.play(); 
      // Dial
      this.dS.name = "Haut Parleur : ";
      this.dS.test = "Ceci n'est pas un exercice l'empire nous attaque!"
      //ascenseur
      $('.imgsimplonis1').addClass('active');
    }, 29000);
    setTimeout(() => {
      this.dS.name = "Haut Parleur : ";
      this.dS.test = "A tout les pilotes rendez-vous dans le hangar A, B et C!"
    }, 33000);
    setTimeout(() => {
      this.dS.name = "Haut Parleur : ";
      this.dS.test = "Que toutes les unités soit à leurs postes!"
    }, 36000);
    setTimeout(() => {
      // reset
      this.audioPlayerRefWait.nativeElement.pause(); 
      $('.imgsimplonis1').removeClass('active');
      // sound
      this.audioPlayerRefDoorOpenBis.nativeElement.play(); 
      this.audioPlayerRefPont.nativeElement.play();
      // dial
      this.dS.name = "Pilote Rebelle : ";
      this.dS.test = "Aller les gars go!"
      $('.imgsimplonis2').addClass('active');
    }, 39000);
    setTimeout(() => {
      // reset
      this.dS.name = "";
      this.dS.test = "";
      $('.imgsimplonis2').removeClass('active');
      // dial
      $('.imgsimplonispont1').addClass('active');
      this.clickarea = true;
    }, 42000);
  }
  continued(){
    // reset
    this.clickarea = false;
    $('.imgsimplonispont1').removeClass('active');
    // dial
    $('.imgBackgroundSpace').addClass('active');
    $('.imgsimplonispont2').addClass('active');
    this.clickarea2 = true;
    this.dAureliaS.dialattack();
  }
  attackgo(){ 
    this.dS.name = "";
    this.dS.test = "";
    $('.imgsimplonispont2').removeClass('active');
    $('.imgsimplonispont3').addClass('active');
    setTimeout(() => {
      // reset
      this.audioPlayerRefPont.nativeElement.pause();
      this.audioPlayerRefAlarm.nativeElement.pause();
      $('.imgsimplonispont3').removeClass('active');
      $('.imgsimplonispont4').addClass('active');
      this.dS.name = "Commandant Killa";
      this.dS.test = "Allumage des propulseurs... Vérification du systéme de refroidissement...";
    }, 3000);
    setTimeout(() => {
      this.audioPlayerRefStart.nativeElement.play();
      this.dS.name = "Commandant Killa";
      this.dS.test = "Tout est opérationnel... Aller! Décollage!";
    }, 8000);
    setTimeout(() => {
      // reset
      this.audioPlayerRefStart.nativeElement.pause();
      $('.imgBackgroundSpace').removeClass('active');
      $('.imgsimplonispont4').removeClass('active');
      this.dS.name = "";
      this.dS.test = "";
      // animation
      this.audioPlayerRefSquadron.nativeElement.play();
      $('.transrightsquadron').addClass('active');
      $('.transrighttarnas').addClass('active');
      $('.imgsimplonisspace1').addClass('active');
    }, 12000);
    setTimeout(() => {
      this.audioPlayerRefTarnas.nativeElement.play();
    }, 17000);
    setTimeout(() => {
      // reset
      $('.imgsimplonisspace1').removeClass('active');
      $('.transrightsquadron').removeClass('active')
      $('.transrighttarnas').removeClass('active');
      this.audioPlayerRefTarnas.nativeElement.pause();
      // sound
      this.audioPlayerRefMotor.nativeElement.play(); 
      // dial
      this.dS.name = "Commandant Kila : ";
      this.dS.test = "Leader Or, au rapport!";
      $('.imgsimplonisspace2').addClass('active');
      $('.imgcockpit').addClass('active');
    }, 25000);
    setTimeout(() => {
      this.dS.name = "Enorc Bes : ";
      this.dS.test = "Red leader , au rapport!";
    }, 29000);
    setTimeout(() => {
      this.dS.name = "Nai Baf : ";
      this.dS.test = "Red Two, tout est paré!";
    }, 32000);
    setTimeout(() => {
      this.dS.name = "Raan Inna : ";
      this.dS.test = "Red Three, tout est paré!";
    }, 35000);
    setTimeout(() => {
      this.dS.name = "Korros : ";
      this.dS.test = "Red four, tout est paré!";
    }, 38000);
    setTimeout(() => {
      this.dS.name = "Irana Klo : ";
      this.dS.test = "Green leader, au rapport!";
    }, 41000);
    setTimeout(() => {
      this.dS.name = "Pilote du tarnas : ";
      this.dS.test = "Ici le Tarnas, tout est paré!";
    }, 44000);
    setTimeout(() => {
      this.dS.name = "Commandant Kila : ";
      this.dS.test = "Aller les enfants, on s'occupe des impériaux et on rentre!";
    }, 47000);
    setTimeout(() => {
      this.dS.name = "20-100 : ";
      this.dS.test = "Commandant! Nos scannes on détecté du mouvement dans le secteur! ";
    }, 51000);
    setTimeout(() => {
      this.dS.name = "Commandant Kila : ";
      this.dS.test = "Préparez-vous!";
    }, 55000);
    setTimeout(() => {
      this.dS.name = "Enorc Bes : ";
      this.dS.test = "Je ne vois rien ! ...";
    }, 58000);
    setTimeout(() => {
      $('.imgtiesquadron').addClass('active');
      this.dS.name = "Commandant Kila : ";
      this.dS.test = "ATTENDEZ LA! Chasseur ennemis! Manoeuvre d'évitement!";
    },61000);
    setTimeout(() => {
      // reset
      $('.imgsimplonisspace2').removeClass('active');
      $('.imgtiesquadron').removeClass('active');
      this.audioPlayerRefMotor.nativeElement.pause()
      this.finishOne()
      // // dial
      // this.dS.name = "Commandant Kila : ";
      // this.dS.test = "C'est la fin de la demo !";
      // this.battle = true;
      // $('.cursor').addClass('active');
    }, 66000);
    // setTimeout(() => {
    //   $('.imgcockpit').removeClass('active');
    //   $('.imgcockpitleft').addClass('active');
    //   $('.imgxwingright').addClass('active');
    //   $('.imgdestroyer').addClass('active');
    //   $('.imgtarnas').addClass('active');
    //   $('.imgxwingleft').addClass('active');
    //   this.dS.name = "Tuto : ";
    //   this.dS.test = "Dans ce mode de jeux vous êtes en rail shooter tirer sur le plus de chasseur enemis possible !";
    // }, 69000);
  }
  finishOne(){
    // reset
    $('.imgcockpit').removeClass('active');
    $('.imgBackgroundSpace').addClass('active');
    $('.imgsimplonisPontPrepare').addClass('active');
    // dial
    this.dS.name = "Capitaine Christophhis : ";
    this.dS.test = "Dans combien de temps l'arme est chargé?";
    setTimeout(() => {
      this.dS.name = "20-100 : ";
      this.dS.test = "2 minutes ... 30 secondes!";
    }, 7000);
    setTimeout(() => {
      this.dS.name = "Capitaine Christophhis : ";
      this.dS.test = "Bon Sang! Pourvue que le commandant tiennent le coup!";
    }, 12000);
    setTimeout(() => {
      $('.imgsimplonisPontPrepare').removeClass('active');
      this.dS.name = "TARNAS : ";
      this.dS.test = "Capitaine! Ici le Tarnas nous sommes sous le feu du destroyer stellaire...";
      $('.imgTarnashelp').addClass('active');
    }, 17000);
    setTimeout(() => {
      $('.imgdestopenfire').addClass('active');
    }, 20000);
    setTimeout(() => {
      $('.imgdestopenfire2').addClass('active');
    }, 21500);
    setTimeout(() => {
      $('.imgdestopenfire3').addClass('active');
    }, 23000);
    setTimeout(() => {
      $('.imgdestopenfire').removeClass('active');
      $('.imgdestopenfire2').removeClass('active');
      $('.imgdestopenfire3').removeClass('active');
      $('.imgsimplonisPontPrepare').addClass('active');
      $('.imgTarnashelp').removeClass('active');
      this.dS.name = "TARNAS : ";
      this.dS.test = "... Nos boucliers sont tombé a 30% ... Nos...acteur...répon...plus ! Nous ... besoins ... secour!";
    }, 24000);
    setTimeout(() => {
      this.dS.name = "Capitaine Christophhis : ";
      this.dS.test = "Il brouille nos communications! [Ouvre le canal] ";
    }, 33000);
    setTimeout(() => {
      this.dS.name = "Capitaine Christophhis : ";
      this.dS.test = "Comman... Ici le capi... phhis ... le Tarnas à ... aide tout ... urgence!";
      $('.imgsimplonisPontPrepare').removeClass('active');
      $('.imgcockpitleft').addClass('active');
    }, 38000);
    setTimeout(() => {
      this.dS.name = "Commandant Kila : ";
      this.dS.test = "Capitaine? Capitaine me recevez vous? Bon sang!";
    }, 43000);
    setTimeout(() => {
      this.choixTarnas = true;
    }, 48000);
  }
  helpTarnas(){

  }
  abandonTarnas(){
    this.cS.Tarnas = false;
    // reset
    $('.imgBackgroundSpace').removeClass('active');
    $('.imgcockpitleft').removeClass('active');
    this.choixTarnas = false;
    $('.imgTarnasdest').addClass('active');
    this.dS.name = "TARNAS : ";
    this.dS.test = "Nos commandes ne répondent plus! Nous n'allons plus tenir!";
    setTimeout(() => {
      this.dS.name = "TARNAS : ";
      this.dS.test = "Nos boucliers sont .... ARRFFF"; 
    }, 5000);
    setTimeout(() => {
      $('.imgTarnasdest2').addClass('active');
    }, 6000);
    setTimeout(() => {
      $('.imgTarnasdest3').addClass('active');
    }, 6500);
    setTimeout(() => {
      this.ChargementOK();
    }, 7000);
  }

  ChargementOK(){
    // reset
    $('.imgTarnasdest').removeClass('active');
    $('.imgTarnasdest2').removeClass('active');
    $('.imgTarnasdest3').removeClass('active');

    $('.imgBackgroundSpace').addClass('active');
    this.dS.name = "20-100 : ";
    this.dS.test = "L'arme est opérationnel ... Capitaine !";
    $('.imgsimplonisPontParé').addClass('active');
    setTimeout(() => {
      this.dS.name = "Capitaine Christophhis : ";
      this.dS.test = "Parfait! Virer de bord, maintenant!";
    }, 5000);
    setTimeout(() => {
      // reset
      $('.imgsimplonisPontParé').removeClass('active');
      $('.imgsimplonisend').addClass('active');
      this.dS.name = "Lieutenant Niemad Enud : ";
      this.dS.test = "Capitaine! Le Simplonis vient de virer de bord! ";
    }, 13000);
    setTimeout(() => {
      this.dS.name = "Capitaine Emix Am : ";
      this.dS.test = "Ultime tentative desepérer! Pitoyable... Intensifier le feu sur le Simplonis!"
    }, 18000);
    setTimeout(() => {
      this.dS.name = "";
      this.dS.test = "";
      $('.imgsimplonisPontultimefire2').addClass('active');
    }, 23000);
    setTimeout(() => {
      // reset
      $('.imgsimplonisend').removeClass('active');
      $('.imgsimplonisPontultimefire2').removeClass('active');

      $('.imgsimplonisend2').addClass('active');
      this.dS.name = "Lieutenant Niemad Enud : ";
      this.dS.test = "CAPITAINE! Nous détectons une accumulation d'énergie massive!";
    }, 26000);
    setTimeout(() => {
      this.dS.name = "Capitaine Emix Am : ";
      this.dS.test = "Mais qu'est ce que ?! OH NON...  !"
    }, 31000);
    setTimeout(() => {
      $('.imgsimplonisend2').removeClass('active');
      this.dS.name = "20-100 : ";
      this.dS.test = "Arme opérationnel...";
      $('.imgsimplonisPontultimefire2').addClass('active');
    }, 35000);
    setTimeout(() => {
      $('.imgsimplonisPontultimefire2').removeClass('active');
      $('.imgsimplonisPontultimefire3').addClass('active');
      this.dS.name = "Capitaine Chritophhis : ";
      this.dS.test = "Alors, Feu !";
    }, 40000);
    setTimeout(() => {
      $('.imgsimplonisPontultimefire3').removeClass('active');
      $('.imgsimplonisend2').addClass('active');
      this.dS.name = "Capitaine Emix Am : ";
      this.dS.test = "ENVOYEZ UN MESSAGE DE DETRESSE MAINTENANT!";
    }, 45000);
    setTimeout(() => {
      this.dS.name = "Capitaine Emix Am : ";
      this.dS.test = "Il faut que ...";
    }, 50000);
    setTimeout(() => {
      $('.imgBackgroundSpace').removeClass('active');
      this.dS.name = "Capitaine Emix Am : ";
      this.dS.test = "ARFFG...";
      $('.imgsimplonisend4').addClass('active');
    }, 58000);
    setTimeout(() => {
      this.dS.name = "Haut Parleur : ";
      this.dS.test = "Veuillez evacuer, le plus vite possible...";
      $('.imgsimplonispod').addClass('active');
      this.SpaceBattleEnd();
    }, 60000);
  }
  SpaceBattleEnd(){
    if (this.cS.Tarnas == false) {
      $('.imgthechoiceTranasDest').addClass('active');
      setTimeout(() => {
        this.dS.name = "20-100 : ";
        this.dS.test = "Module d'évacuation détecté...";
      }, 2000);
      setTimeout(() => {
        this.dS.name = "Enorc Bes : ";
        this.dS.test = "Pas de quartier... Pour le Tarnas!";
      }, 7000);
      this.choixPod = true;
    }
    if (this.cS.Tarnas == true) {
      $('.imgthechoiceTranasOK').addClass('active');
      setTimeout(() => {
        this.dS.name = "20-100 : ";
        this.dS.test = "Module d'évacuation détecté...";
      }, 2000);
      setTimeout(() => {
        this.dS.name = "Raan : ";
        this.dS.test = "Pas de quartier... Pour le lieutenant!";
      }, 7000);
      this.choixPod = true;
    }
  }
  killThem(){
    $('.imgthechoiceRevenge').addClass('active');
    this.dS.name = "20-100 : ";
    this.dS.test = "Ouvrez le feu!";
    this.choixPod = false;
    setTimeout(() => {
      $('.imgthechoiceRevenge').removeClass('active');
      $('.imgthechoiceRevenge2').addClass('active');
    }, 1000);
    setTimeout(() => {
      $('.imgthechoiceRevenge2').removeClass('active')
      $('.imgthechoiceRevenge').addClass('active');
    }, 2000);
    setTimeout(() => {
      $('.imgthechoiceRevenge2').addClass('active')
    }, 3000);
    setTimeout(() => {
      $('.imgthechoiceRevenge3').addClass('active')
      this.dS.name = "StormTrooper : ";
      this.dS.test = "Ils nous tirent dessus !";
    }, 4000);
    setTimeout(() => {
      this.dS.name = "Officier : ";
      this.dS.test = "Non c'est impossible nous ne sommes pas armé ! Ils ne peuvent ...";
    }, 5000);
    setTimeout(() => {
      $('.imgthechoiceRevenge4').addClass('active')
      this.dS.name = "StormTrooper : ";
      this.dS.test = "Arrff...";
    }, 10000);
    setTimeout(() => {
      $('.imgthechoiceRevenge5').addClass('active')
    }, 10200);
    setTimeout(() => {
      $('.imgthechoiceRevenge6').addClass('active')
    }, 10400);
    setTimeout(() => {
      $('.imgthechoiceRevenge7').addClass('active')
    }, 10600);
  }
  escapeThem(){
    $('.imgsimplonispod').addClass('active');
    this.dS.name = "Ordinateur de bord : ";
    this.dS.test = "Entrer dans l'atmosphére imminent";
    this.choixPod = false;
  }
}
