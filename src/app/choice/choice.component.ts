import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';
import { vingtcentService } from '../service/character/20100.service';
import { AureliaService } from '../service/character/aurelia.service';
import { NaibafService } from '../service/character/naibaf.service';
import { EnorcbesService } from '../service/character/enorcbes.service';
import { TropheeService } from '../service/trophee.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(    
    public dS: HeaderService, 
    public tS: TropheeService, 
    public d20100S: vingtcentService,
    public dAureliaS: AureliaService,
    public denocbesS: EnorcbesService,
    public dnaibafS: NaibafService,) { }

  ngOnInit() {
  }

}
