import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurchauffeService {
  shoot: number = 0;
  verifyshoot: number = 1;
  verylow: boolean = false;
  lowc: boolean = false;
  mediumc: boolean = false;
  mediumplus: boolean = false;
  warningc: boolean = false;
  refroidissement: number = 0;
  constructor() { 
    
  }
  shootf(){
    if (this.verifyshoot == 1) {
      console.log('tests')
      this.shoot++;
      this.refroidissement++;
    }
    this.shooting();
    this.refroidissementf();
  }
  refroidissementf(){
    setTimeout(() => {
      this.shoot--;
      this.refroidissement--;
      this.shooting();
    if (this.refroidissement < 0) {
      this.refroidissement = 0;
      this.shoot = 0;
    }
    }, 2000);
  }
  shooting(){ 
      if (this.shoot === 0) {
        this.verylow = false;
        this.lowc = false;
        this.mediumc = false;
        this.mediumplus = false; 
        this.warningc = false; 
      }
      if (this.shoot === 1) {
        this.verylow = true;
        this.lowc = false;
        this.mediumc = false;
        this.mediumplus = false; 
        this.warningc = false; 
      }
      if (this.shoot === 2) {
        this.lowc = true;
        this.mediumc = false;
        this.mediumplus = false; 
        this.warningc = false; 
      }
      if (this.shoot === 3) {
        this.mediumc = true;
        this.mediumplus = false; 
        this.warningc = false; 
      }
      if (this.shoot === 4) {
        this.mediumplus = true; 
        this.warningc = false; 
      }
      if (this.shoot === 5) {
        this.warningc = true; 
        
      }
      if (this.refroidissement > 5){
        console.log('testf')
        this.verifyshoot = 2;
        setTimeout(() =>{
          console.log('testf2')
          this.verylow = false;
          this.lowc = false;
          this.mediumc = false;
          this.mediumplus = false;
          this.warningc = false;
          this.verifyshoot = 1;
          this.shoot = 0;
          this.refroidissement = 0;
        },5000);
        
      }

  }
  
}
