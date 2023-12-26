import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { CardComponent } from 'src/app/components/shared/card/card.component';
import { Deck } from 'src/app/models/deck';
import { CardListService } from 'src/app/services/card-list.service';
import { GlobalContextService } from 'src/app/services/global-context.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss']
})

export class DeckCreateComponent implements OnInit {

  constructor(private cardService: CardListService,private router: Router, private dialog: MatDialog, private globalContext: GlobalContextService){}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  spinner = true;
  displayedColumns: string[] = ['position',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  Decks: Array<Deck> = [];
  Cards: Array<any> = [];
  contadorCards = 0;
  contadorPage = 1;
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
    const dialogRef = this.dialog.open(CardComponent, {
      data: {img: card.images?.small}
    }) 
    dialogRef.afterClosed().subscribe(result => {
      if(result === "add"){
        console.warn(card)
        this.Cards.push(card);
        this.contadorCards = this.contadorCards + 1;
        console.log(this.contadorCards)
      }
    })
    
  }
  
  createDeck(){
    if(this.Cards.length >= 24 && this.Cards.length <= 60){
      let handlerDeck: Deck = {
        name: '',
        cards: this.Cards
      }
      this.globalContext.Decks.push(handlerDeck);
      Swal.fire({
        icon: "success",
        title: "Deck criado com sucesso!",
        showConfirmButton: true,
      }).then((result)=>{
        if(result.isConfirmed){
          this.router.navigate(['decks']);
        }
      });
    }
  }

  onNextPage() {
    this.spinner = true;
    this.contadorPage++
    this.cardService.getCardByPage(this.contadorPage).subscribe((res)=>{
      this.spinner = false;
      this.dataSource = new MatTableDataSource(res.data);
    })
  }
  onBeforePage() {
    this.spinner = true;
    this.contadorPage--
    this.cardService.getCardByPage(this.contadorPage).subscribe((res)=>{
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
