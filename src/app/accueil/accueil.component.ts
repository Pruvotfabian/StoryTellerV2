import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  chargement: boolean = true;
  chargement2: boolean = true;
  chargement3: boolean = false;
  menu: boolean = true;
  menuCampagne: boolean = false;
  menuSucces: boolean = false;
  menuInfo: boolean = false;
  connect: boolean = false;
 

  
  constructor(
    public router: Router, 
  ) {     
    
  }


  campagne(){
    this.menu = false;
    this.menuCampagne = true;
  }
  info(){
    this.menu = false;
    this.menuInfo = true;
  }
  succes(){
    this.menu = false;
    this.menuSucces = true;
  }
  return(){
    this.menu = true;
    this.menuCampagne = false;
    this.menuSucces = false;
    this.menuInfo = false;
    this.connect = false;
  }
  start(){
    this.connect = true;
  }
  reload(){
    location.reload();
  }
  ngOnInit() {
      setTimeout(() => {
        this.chargement = false;
      },16000)
      setTimeout(() => {
        this.chargement2 = false;
      },19000)
      setTimeout(() => {
        this.chargement3 = true;
      },19000)
  }

}
