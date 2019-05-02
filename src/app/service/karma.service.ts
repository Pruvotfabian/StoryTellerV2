import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaService {
  lumineux: number = 0;
  obscur: number = 0;
  constructor() { }
}
