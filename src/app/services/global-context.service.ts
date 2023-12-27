import { Injectable } from '@angular/core';
import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class GlobalContextService {

  constructor() { }

  Decks: Array<Deck> = [];
  cards: Array<any> = [];
  // returnDecks(){
  //   let contador = 0;
  //   let decks = for(let deck of this.Decks){
  //   }
  // }
  returnDecks(): any {
    let deckComplete = {
      name: '',
      cards: [],
    }
    let contador = 0;
    let allDecks = [deckComplete]
    const deckDetails: string[] = [];
    for (let deck of this.Decks) {
      // const details = `${deck.name}, ${deck.cards}`;
      // deckDetails.push(details);
      deckComplete.name = deck.name;
      this.cards[contador].push()
      this.cards.push(deck.cards)
      contador++;
    }
    let deckInteiro = {
      name: deckComplete.name,
      cards: this.cards,
    }
    // allDecks.push()
    return deckInteiro;
  }
}
