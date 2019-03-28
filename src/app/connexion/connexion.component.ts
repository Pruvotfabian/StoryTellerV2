import { Component, OnInit } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  generique: boolean = false;
  constructor(public AccueilC: AccueilComponent, public route: Router) { }

  returnA(){
    this.AccueilC.return();
  }
  ngOnInit() {
  }
  startNC(){
    this.route.navigate(['/generique'])
  }
}
