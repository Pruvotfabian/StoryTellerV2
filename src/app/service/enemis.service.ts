import { Injectable } from '@angular/core';
import { SurchauffeService } from './surchauffe.service';
import { HealhbarService } from './healhbar.service';

@Injectable({
  providedIn: 'root'
})
export class EnemisService {
  tiefigthers: boolean = true;
  tiefigthers2: boolean = true;
  tiefigthers3: boolean = true;
  tiefigthers4: boolean = true;
  stormtroopers: boolean = true;
  stormtroopers2: boolean = true;
  stormtroopers3: boolean = true;
  stormtroopers4: boolean = true;
  deathtrooper1: boolean = true;
  deathtrooper2: boolean = true;
  traitre: boolean = true;
  Cdeathtrooper2: boolean = true;
  darkVador: boolean = true;
  enemis: string = "";
  combat: boolean = false;

  idtiefighter: number = 2;
  idtiefighter2: number = 2;
  idtiefighter3: number = 2;
  idtiefighter4: number = 2;
  id: number = 2;
  id2: number = 2;
  id3: number = 2;
  id4: number = 2;
  id5: number = 5;
  id6: number = 5;
  id7: number = 10;
  id8: number = 8;
  id9: number = 100;
  
  constructor(public sD: SurchauffeService,public hS: HealhbarService) { }
  TieFighter(){
    if (this.sD.verifyshoot == 1) {
      this.enemis = "Chasseur Tie";
      this.id--;
      this.combat = true;
      this.sD.shooting();
      this.sD.shootf();
      this.hS.heal();
      console.log(this.id)
      if (this.id === 0) {
        this.hS.death();
        this.enemis = "";
        this.combat = false;
        this.tiefigthers = false;
        this.id = 2;
      }
    }
    }
    TieFighter2(){
      if (this.sD.verifyshoot == 1) {
        this.enemis = "Chasseur Tie";
        this.id--;
        this.combat = true;
        this.sD.shooting();
        this.sD.shootf();
        this.hS.heal();
        console.log(this.id)
        if (this.id === 0) {
          this.hS.death();
          this.enemis = "";
          this.combat = false;
          this.tiefigthers2 = false;
          this.id = 2;
        }
      }
      }
      TieFighter3(){
        if (this.sD.verifyshoot == 1) {
          this.enemis = "Chasseur Tie";
          this.id--;
          this.combat = true;
          this.sD.shooting();
          this.sD.shootf();
          this.hS.heal();
          console.log(this.id)
          if (this.id === 0) {
            this.hS.death();
            this.enemis = "";
            this.combat = false;
            this.tiefigthers3 = false;
            this.id = 2;
          }
        }
        }
        TieFighter4(){
          if (this.sD.verifyshoot == 1) {
            this.enemis = "Chasseur Tie";
            this.id--;
            this.combat = true;
            this.sD.shooting();
            this.sD.shootf();
            this.hS.heal();
            console.log(this.id)
            if (this.id === 0) {
              this.hS.death();
              this.enemis = "";
              this.combat = false;
              this.tiefigthers4 = false;
              this.id = 2;
            }
          }
          }
  stormtrooper(){
  if (this.sD.verifyshoot == 1) {
    this.enemis = "StormTrooper";
    this.id--;
    this.combat = true;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    console.log(this.id)
    if (this.id === 0) {
      this.hS.death();
      this.enemis = "";
      this.combat = false;
      this.stormtroopers = false;
      this.id = 2;
    }
  }
  }
  stormtrooper2(){
    if (this.sD.verifyshoot == 1) {
    this.enemis = "StormTrooper";
    this.id2--;
    this.combat = true;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    console.log(this.id2)
    if (this.id2 === 0) {
      this.hS.death();
      this.combat = false;
      this.enemis = "";
      this.stormtroopers2 = false;
      this.id2 = 2;
    }
  }
  }
  
  stormtrooper3(){
    if (this.sD.verifyshoot == 1) {
      this.enemis = "StormTrooper";
    this.id3--;
    this.combat = true;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    console.log(this.id3)
    if (this.id3 === 0) {
      this.hS.death();
      this.combat = false;
      this.enemis = "";
      this.stormtroopers3 = false;
      this.id3 = 2;
    }
  }
  }
  stormtrooper4(){
    if (this.sD.verifyshoot == 1) {
    this.enemis = "StormTrooper";
    this.id4--;
    this.combat = true;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    console.log(this.id4)
    if (this.id4 === 0) {
      this.hS.death();
      this.combat = false;
      this.enemis = "";
      this.stormtroopers4 = false;
      this.id4 = 2;
    }
  }
  }
  DeathTrooper(){
    if (this.sD.verifyshoot == 1) {
      this.enemis = "deathTrooper";
    this.id5--;
    this.combat = true;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    console.log(this.id5)
      if (this.id5 === 0) {
        this.hS.death();
        this.combat = false;
        this.enemis = "";
        this.deathtrooper1 = false;
        this.id5 = 5;
      }
  }
  }
  DeathTrooper2(){
    if (this.sD.verifyshoot == 1) {
      this.enemis = "deathTrooper";
    this.id6--;
    this.combat = true;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    console.log(this.id6)
      if (this.id6 === 0) {
        this.hS.death();
        this.combat = false;
        this.enemis = "";
        this.deathtrooper2 = false;
        this.id6 = 5;
      }
    }
  }
  CommandantDeathTrooper(){
    if (this.sD.verifyshoot == 1) {
      this.enemis = "Commandant";
    this.id7--;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    this.combat = true;
    console.log(this.id7)
      if (this.id7 === 0) {
        this.hS.death();
        this.combat = false;
        this.enemis = "";
        this.Cdeathtrooper2 = false;
        this.id7 = 10;
      }
    }
  }
  Traitre(){
    if (this.sD.verifyshoot == 1) {
      this.enemis = "Aurelia";
    this.id8--;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    this.combat = true;
    console.log(this.id8)
      if (this.id8 === 0) {
        this.hS.death();
        this.combat = false;
        this.enemis = "";
        this.traitre = false;
        this.id8 = 8;
      }
    }
  }
  DarkVador(){
    if (this.sD.verifyshoot == 1) {
    this.enemis = "Dark Vador";
    this.id9--;
    this.combat = true;
    this.sD.shooting();
    this.sD.shootf();
    this.hS.heal();
    console.log(this.id9)
      if (this.id9 === 0) {
        this.hS.death();
        this.combat = false;
        this.enemis = "";
        this.darkVador = false;
        this.id9 = 100;
      }
    }
  }
}
