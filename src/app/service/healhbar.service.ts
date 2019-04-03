import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HealhbarService {
  vie: boolean = true;
  affichage: boolean = false;
  constructor() { 

  }

  heal(){
      this.vie = true
      this.affichage = true;
      console.log(this.vie);
  }
  death(){
    this.vie = false
    this.affichage = false;
    console.log(this.vie);
  }
}
