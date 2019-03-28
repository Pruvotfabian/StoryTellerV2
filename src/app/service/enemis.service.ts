import { Injectable } from '@angular/core';
import { SurchauffeService } from './surchauffe.service';

@Injectable({
  providedIn: 'root'
})
export class EnemisService {
  stormtroopers: boolean = true;
  stormtroopers2: boolean = true;
  stormtroopers3: boolean = true;
  stormtroopers4: boolean = true;
  deathtrooper1: boolean = true;
  deathtrooper2: boolean = true;
  traitre: boolean = true;
  Cdeathtrooper2: boolean = true;
  id: number = 0;
  id2: number = 0;
  id3: number = 0;
  id4: number = 0;
  id5: number = 0;
  id6: number = 0;
  id7: number = 0;
  id8: number = 0;
  constructor(public sD: SurchauffeService) { }

  stormtrooper(){
  if (this.sD.verifyshoot == 1) {
    this.id++;
    console.log(this.id)
    if (this.id === 2) {
      console.log('AAAAAAHHHH !')
      this.stormtroopers = false;
      this.id = 0;
    }
  }
  }
  stormtrooper2(){
    this.id2++;
    console.log(this.id2)
    if (this.id2 === 2) {
      console.log('AAAAAAHHHH !')
      this.stormtroopers2 = false;
      this.id2 = 0;
    }
  }
  stormtrooper3(){
    this.id3++;
    console.log(this.id3)
    if (this.id3 === 2) {
      console.log('AAAAAAHHHH !')
      this.stormtroopers3 = false;
      this.id3 = 0;
    }
  }
  stormtrooper4(){
    this.id4++;
    console.log(this.id4)
    if (this.id4 === 2) {
      console.log('AAAAAAHHHH !')
      this.stormtroopers4 = false;
      this.id4 = 0;
    }
  }
  DeathTrooper(){
    this.id5++;
    console.log(this.id5)
      if (this.id5 === 5) {
        console.log('AAAAAAHHHH !')
        this.deathtrooper1 = false;
        this.id5 = 0;
      }
  }
  DeathTrooper2(){
    this.id6++;
    console.log(this.id6)
      if (this.id6 === 5) {
        console.log('AAAAAAHHHH !')
        this.deathtrooper2 = false;
        this.id6 = 0;
      }
  }
  CommandantDeathTrooper(){
    this.id7++;
    console.log(this.id7)
      if (this.id7 === 10) {
        console.log('AAAAAAHHHH !')
        this.Cdeathtrooper2 = false;
        this.id7 = 0;
      }
  }
  Traitre(){
    this.id8++;
    console.log(this.id8)
      if (this.id8 === 8) {
        console.log('AAAAAAHHHH !')
        this.traitre = false;
        this.id8 = 0;
      }
  }

}
