import { Component, OnInit } from '@angular/core';
import { SurchauffeService } from '../service/surchauffe.service';
import { EnemisService } from '../service/enemis.service';
import { HealhbarService } from '../service/healhbar.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  combat:boolean = false;
  constructor(
    public sd: SurchauffeService,
    public es: EnemisService, 
    public hS: HealhbarService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.combat = true;
      
    }, 1000);
  }

}
