import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Deck } from 'src/app/models/deck';
import { CardListService } from 'src/app/services/card-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss']
})

export class DeckCreateComponent implements OnInit {

  constructor(private cardService: CardListService,private router: Router){}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  spinner = true;
  displayedColumns: string[] = ['position'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  Decks: Array<any> = [];
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
    console.warn(card)
    this.Cards.push(card);
    this.contadorCards = this.contadorCards + 1;
    console.log(this.contadorCards)
  }
  
  createDeck(){
    if(this.Cards.length >= 24 && this.Cards.length <= 60){
      this.Decks.push(this.Cards);
      Swal.fire({
        icon: "success",
        title: "Deck criado com sucesso!",
        showConfirmButton: true,
      }).then((result)=>{
        if(result.isConfirmed){
          this.router.navigate(['']);
        }
      });
    }
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
