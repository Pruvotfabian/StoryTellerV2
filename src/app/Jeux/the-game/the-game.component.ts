import { Component, OnInit } from '@angular/core';
import { KarmaService } from 'src/app/service/karma.service';

@Component({
  selector: 'app-the-game',
  templateUrl: './the-game.component.html',
  styleUrls: ['./the-game.component.css']
})
export class TheGameComponent implements OnInit {
  generique: boolean = true;
  prologue: boolean = false;
  spacebattles: boolean = false;
  constructor(
    public kS: KarmaService,
  ) { }

  ngOnInit() {
  }
  debut(){
    this.generique = false;
    this.prologue = true;
  }
  spacebattle(){
    console.log(this.kS.lumineux)
    this.prologue = false;
    this.spacebattles = true;
  }
  assault(){

  }
  final(){

  }
  Epilogue(){
    
  }
}
