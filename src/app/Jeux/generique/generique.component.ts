import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TheGameComponent } from '../the-game/the-game.component';

@Component({
  selector: 'app-generique',
  templateUrl: './generique.component.html',
  styleUrls: ['./generique.component.css']
})
export class GeneriqueComponent implements OnInit {
  intro: boolean = true;
  generique: boolean = true;
  debut: boolean = false;


  constructor(
    public route: Router,
    public game: TheGameComponent,
    ) {
   }
   @ViewChild('audioIntro') audioPlayerRefIntro: ElementRef;
  ngOnInit() {
    setTimeout(() => {
      this.audioPlayerRefIntro.nativeElement.play(); 
    }, 1);
    setTimeout(() => {
      this.intro = false;
    },80000)
    setTimeout(() => {
      this.game.debut();
    },88000)
  }

}
