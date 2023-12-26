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

  nameDeck = '';
  spinner = true;
  displayedColumns: string[] = ['position','position2','position3','position4'];
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

  validateDeckName(){
    return (this.nameDeck != "");
  }

  addCard(card: any){
    const dialogRef = this.dialog.open(CardComponent, {
      data: {img: card.images?.small},
    }) 
    dialogRef.afterClosed().subscribe(result => {
      if(result === "add"){
        const cardWithSameName = this.Cards.filter(
          (c) => c.name === card.name 
        ); 
        //Comparando com a lista de Cards, para validar e não permitir passar de 4 cards com o mesmo nome.
        if (cardWithSameName.length <= 3) {
          console.log(`length ${cardWithSameName.length}`)
          this.Cards.push(card);
          this.contadorCards = this.contadorCards + 1;
          console.log(this.contadorCards)
        } else{
          Swal.fire({
            icon: "error",
            title: "Você já atingiu o limite de 4 cartas com o mesmo nome neste deck!",
            timer: 1500,
            showConfirmButton: false,
          })
        }
      }
    })
    
  }
  
  createDeck(){
    if((this.Cards.length >= 24 && this.Cards.length <= 60) && this.validateDeckName()){
        let handlerDeck: Deck = {
          name: this.nameDeck,
          cards: this.Cards
        }
        // this.globalContext.Decks.push(handlerDeck); CRIANDO EM VARIÁVEL LOCAL
        this.cardService.createDeck(handlerDeck).subscribe(); // Criando na API FAKE
        console.log(`DECK CRIADO -> ${this.globalContext.Decks}`)
        Swal.fire({
          icon: "success",
          title: "Deck criado com sucesso!",
          showConfirmButton: true,
        }).then((result)=>{
          if(result.isConfirmed){
            this.router.navigate(['decks']);
          }
        });
    }else{
      Swal.fire({
        icon: "error",
        title: "O Deck deve ter um nome e ter entre 24 e 60 cartas!",
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
