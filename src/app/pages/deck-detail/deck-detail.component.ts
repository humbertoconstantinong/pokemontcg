import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Deck } from 'src/app/models/deck';
import { GlobalContextService } from 'src/app/services/global-context.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss']
})
export class DeckDetailComponent {
  constructor(public globalContext: GlobalContextService, private router: Router){}
  decks: any = [];
  contador = 0;
  
  ngOnInit(){
    
    console.warn(this.globalContext.returnDecks())
  }
  createNew(){
    this.router.navigate(['/create']);
  }

}
