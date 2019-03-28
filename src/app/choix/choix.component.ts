import { Component, OnInit } from '@angular/core';
import { SurchauffeService } from '../service/surchauffe.service';
import { EnemisService } from '../service/enemis.service';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {
  constructor(public sd: SurchauffeService, public eS: EnemisService) { 
    
  }

  ngOnInit() {
   
  }
  
  
}
