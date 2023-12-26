import { Injectable } from '@angular/core';
import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class GlobalContextService {

  constructor() { }

  Decks: Array<Deck> = [];
}
