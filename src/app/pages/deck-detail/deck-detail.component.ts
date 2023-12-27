import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Deck } from 'src/app/models/deck';
import { CardListService } from 'src/app/services/card-list.service';
import { GlobalContextService } from 'src/app/services/global-context.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss']
})
export class DeckDetailComponent {
  constructor(public globalContext: GlobalContextService, private router: Router, private cardService: CardListService){}
  decks: any = [];
  exibeMsg = false;
  
  ngOnInit(){
    this.cardService.getDecks().subscribe((res)=>{
      for(let deck of res){
        this.decks.push(deck);
        if(res.length === 1){
          this.exibeMsg = true;
        }
      }
    })
  }

  goHome(){
    this.router.navigate(['']);
  }

  createNew(){
    this.router.navigate(['/create']);
  }

}
