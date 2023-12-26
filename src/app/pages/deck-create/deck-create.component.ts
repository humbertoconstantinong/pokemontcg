import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Deck } from 'src/app/models/deck';
import { CardListService } from 'src/app/services/card-list.service';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss']
})

export class DeckCreateComponent implements OnInit {

  constructor(private cardService: CardListService){}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  spinner = true;
  displayedColumns: string[] = ['position','symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  Decks: Array<Deck> = [];
  Cards: Array<any> = [];
  contadorCards = 0;
  ngOnInit(): void{
    this.cardService.getAll().subscribe((res)=>{
      console.log(res)
      this.spinner = false;
      this.dataSource = new MatTableDataSource(res.data);
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCard(card: any){
    this.Cards.push(card);
    this.contadorCards = this.contadorCards++;
  }
  
  createDeck(cards: any){
    this.Decks.push(cards);
  }
  onPageChange(event: any) {
    let page = event.pageIndex + 1
    this.cardService.getCardByPage(page).subscribe((res)=>{
      this.spinner = false;
      this.dataSource = new MatTableDataSource(res.data);
    })
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [
  {position: 1, symbol: ''},
  {position: 2,  symbol: ''},
  {position: 3,  symbol: ''},
  {position: 4,  symbol: ''},
  {position: 5,  symbol: ''},
  {position: 6,  symbol: ''},
  {position: 7,  symbol: ''},
  {position: 8, symbol: ''},
  {position: 9,  symbol: ''},
  {position: 10, symbol: ''},
];
