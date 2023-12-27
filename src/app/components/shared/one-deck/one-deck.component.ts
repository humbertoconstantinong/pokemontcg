import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeckComponent } from '../deck/deck.component';

@Component({
  selector: 'app-one-deck',
  templateUrl: './one-deck.component.html',
  styleUrls: ['./one-deck.component.scss']
})
export class OneDeckComponent {

  constructor( private dialog: MatDialog){}

  @Input() nameDeck: string = '';
  @Input() cards: Array<any> = [];
  @Input() deck: Array<any> = [];
  miniCards: Array<any> = [];
  returnCard(){
    for(let card of this.cards){
      this.miniCards.push(card.images.small)
    }
    return this.miniCards;
  }

  viewFullDeck(){
    const dialogRef = this.dialog.open(DeckComponent, {
      data: {deck: this.deck},
      width: '500'
    }) 
  }

}
