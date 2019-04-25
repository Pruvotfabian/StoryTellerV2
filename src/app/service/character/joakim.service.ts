import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';

@Injectable({
  providedIn: 'root'
})
export class JoakimService {

  constructor(public dS: HeaderService) { }
  dialId : number = 0;
  introDialId: boolean = false;
}
