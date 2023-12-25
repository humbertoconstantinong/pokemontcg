import { Component, OnInit } from '@angular/core';
import { CardListService } from 'src/app/services/card-list.service';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss']
})
export class DeckCreateComponent implements OnInit {
  constructor(private cardService: CardListService){}

  ngOnInit(): void{
    this.cardService.getCardByName().subscribe((res)=>{
      console.log(res)
    })
  }
}
