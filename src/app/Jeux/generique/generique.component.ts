import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generique',
  templateUrl: './generique.component.html',
  styleUrls: ['./generique.component.css']
})
export class GeneriqueComponent implements OnInit {
  intro: boolean = true;
  debut: boolean = false;

  constructor(public route: Router) {
   }

  ngOnInit() {
    setTimeout(() => {
      this.intro = false;
    },80000)
    setTimeout(() => {
      this.route.navigate(['/prologue'])
    },88000)
  }

}
