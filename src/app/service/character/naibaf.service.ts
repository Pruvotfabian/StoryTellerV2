import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class NaibafService {

  constructor(public dS: HeaderService) { }
}
