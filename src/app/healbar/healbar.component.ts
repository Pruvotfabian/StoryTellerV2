import { Component, OnInit } from '@angular/core';
import { HealhbarService } from '../service/healhbar.service';
import { SurchauffeService } from '../service/surchauffe.service';
import { EnemisService } from '../service/enemis.service';

@Component({
  selector: 'app-healbar',
  templateUrl: './healbar.component.html',
  styleUrls: ['./healbar.component.css']
})
export class HealbarComponent implements OnInit {

  constructor(public sd: SurchauffeService,public es: EnemisService, public hS: HealhbarService) { }

  ngOnInit() {
  }

}
