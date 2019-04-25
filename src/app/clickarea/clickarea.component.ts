import { Component, OnInit } from '@angular/core';
import { AureliaService } from '../service/character/aurelia.service';
import { vingtcentService } from '../service/character/20100.service';
import { EnorcbesService } from '../service/character/enorcbes.service';
import { NaibafService } from '../service/character/naibaf.service';
import { HeaderService } from '../service/header.service';
import { JeuxPrologueComponent } from '../Jeux/jeux-prologue/jeux-prologue.component';
import { JoakimService } from '../service/character/joakim.service';

@Component({
  selector: 'app-clickarea',
  templateUrl: './clickarea.component.html',
  styleUrls: ['./clickarea.component.css']
})
export class ClickareaComponent implements OnInit {
  

  constructor(
    public Cc: JeuxPrologueComponent,
    public dS: HeaderService,
    public d20100S: vingtcentService,
    public dAureliaS: AureliaService,
    public denocbesS: EnorcbesService,
    public dnaibafS: NaibafService,
    public djoakimS: JoakimService,
    ) { }

  ngOnInit() {
  }
   //Soldat Rebel
   servicesoldat(){
    this.dS.name = "Soldat rebelle : ";
    this.dS.test = "Je suis en service commandant, je ne peut pas vous parlez."
  }
  //pilotSit
  pilotsit(){
    this.dS.name = "Raan Inna : ";
    this.dS.test = "Commandant [Salut Militaire] ! ... Vous n'avez pas vu un droide astromecano trainé dans le coin ? Je le cherche depuis ce matin !"
  }
  soldat(){
    this.dS.name = "Soldat rebelle : ";
    this.dS.test = "Commandant [Salut Militaire] !"
  }
  servicesoldat2(){
    this.dS.name = "Soldat rebelle : ";
    this.dS.test = " [Salut Militaire] Bien le bonjour commandant !"
  }
}
