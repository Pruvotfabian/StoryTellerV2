import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsequenceService {
  Tarnas: boolean = false; // Pour episode 2
  Pod: boolean = false; // Intéret pour le traitre
  EnorcBes: boolean = false;// Survis ou meurt
  Traitor: boolean = false; // Survis ou meurt
  vingtCent: boolean = false; // Survis ou meurt
  vadordefeat: boolean = false; // Pour episode 2 et fin et si tout le monde a survécue
  NaiBaf: boolean = false; // Survis ou meurt
  JoaKim: boolean = false;  // Survis ou meurt
  Prisonier: boolean = false; // Pour episode 2 et Intéret pour le traitre

  constructor() { }
}
