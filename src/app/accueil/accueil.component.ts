import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  chargement: boolean;

  constructor() { 
    this.chargement = true;
  }

  ngOnInit() {
    setTimeout(() => {
       this.chargement = false;
    },4000)
  }
  windowClose () {

    window.close ();
    }

}
