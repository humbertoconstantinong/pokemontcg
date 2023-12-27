import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardListService } from 'src/app/services/card-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  constructor(private route: Router, @Inject(MAT_DIALOG_DATA) public data: {deck: any}, private dialogRef: MatDialogRef<DeckComponent>, private cardListService: CardListService) {}

  pokemons = 0;
  coach = 0;
  

  ngOnInit(): void {
    console.warn(this.data.deck)
    for(let item of this.data.deck.cards){
      if(item.supertype === "Pokémon"){
        this.pokemons++;
      }
      if(item.supertype === "Treinador"){
        this.coach++;
      }
    }
  } 

  deleteDeck(){
    this.cardListService.deleteDeck(this.data.deck.id).subscribe(
      (res=>{
        Swal.fire({
          icon: "success",
          title: "Deck apagado!",
          showConfirmButton: true,
          confirmButtonColor: '#004a94'
        }).then((result)=>{
          if(result.isConfirmed){
            this.dialogRef.close();
            this.route.navigate(['']);
          }
        });
      })
    );
  }

}
