import { Component } from '@angular/core';
import { Deck } from 'src/app/models/deck';
import { GlobalContextService } from 'src/app/services/global-context.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss']
})
export class DeckDetailComponent {
  constructor(private globalContext: GlobalContextService){}
  decks: any = [];
  
  ngOnInit(){
    this.decks.push(this.globalContext.Decks);
    console.log(this.decks);
  }

}
