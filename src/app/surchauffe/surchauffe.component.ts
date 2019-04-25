import { Component, OnInit } from '@angular/core';
import { SurchauffeService } from '../service/surchauffe.service';
import { EnemisService } from '../service/enemis.service';
import { HealhbarService } from '../service/healhbar.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-surchauffe',
  templateUrl: './surchauffe.component.html',
  styleUrls: ['./surchauffe.component.css']
})
export class SurchauffeComponent implements OnInit {
  combat:boolean = false;
  constructor(public sd: SurchauffeService,public es: EnemisService, public hS: HealhbarService) {
 
   }

  ngOnInit() {
    setTimeout(() => {
      this.combat = true;
      
    }, 1000);
  }


  

}
