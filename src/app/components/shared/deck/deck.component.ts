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
  types: Array<any> = [];
  quantityTypes = 0;
  openedFire = true;
  openedBug = true;
  openedRock = true;
  openedDark = true;
  openedDragon = true;
  openedElectric = true;
  openedFairy = true;
  openedFighting = true;
  openedFlying = true;
  openedGhost = true;
  openedGrass = true;
  openedGround = true;
  openedIce = true;
  openedNormal = true;
  openedPoison = true;
  openedPsychic = true;
  openedSteel = true;
  openedWater = true;
  openedMetal = true;
  openedLightning = true;

  ngOnInit(): void {
    for(let item of this.data.deck.cards){
      this.types.push(item.types);
      if(item.supertype === "Pokémon"){
        this.pokemons++;
      }
      if(item.supertype === "Trainer"){
        this.coach++;
      }
    }
  } 

  returnTypes() {
    let contador = 0;
    for(let item of this.types){
      if(item?.includes("Fire") && this.openedFire){
        this.openedFire = false;
        this.quantityTypes++;
      }
      if(item?.includes("Bug") && this.openedBug){
        this.openedBug = false;
        this.quantityTypes++;
      }
      if(item?.includes("Dark") && this.openedDark){
        this.openedDark = false;
        this.quantityTypes++;
      }
      if(item?.includes("Dragon") && this.openedDragon){
        this.openedDragon = false
        this.quantityTypes++;
      }
      if(item?.includes("Electric") && this.openedElectric){
        this.openedElectric = false;
        this.quantityTypes++;
      }
      if(item?.includes("Fairy") && this.openedFairy){
        this.openedFairy = false;
        this.quantityTypes++;
      }
      if(item?.includes("Fighting") && this.openedFighting){
        this.openedFighting = false;
        this.quantityTypes++;
      }
      if(item?.includes("Flying") && this.openedFlying){
        this.openedFlying = false;
        this.quantityTypes++;
      }
      if(item?.includes("Ghost") && this.openedGhost){
        this.openedGhost = false;
        this.quantityTypes++;
      }
      if(item?.includes("Rock") && this.openedRock){
        this.openedRock = false;
        this.quantityTypes++;
      }
      if(item?.includes("Grass") && this.openedGrass){
        this.openedGrass = false;
        this.quantityTypes++;
      }
      if(item?.includes("Ground") && this.openedGround){
        this.openedGround = false;
        this.quantityTypes++;
      }
      if(item?.includes("Ice") && this.openedIce){
        this.openedIce = false;
        this.quantityTypes++;
      }
      if(item?.includes("Normal") && this.openedNormal){
        this.openedNormal = false;
        this.quantityTypes++;
      }
      if(item?.includes("Poison") && this.openedPoison){
        this.openedPoison = false;
        this.quantityTypes++;
      }
      if(item?.includes("Psychic") && this.openedPsychic){
        this.openedPsychic = false;
        this.quantityTypes++;
      }
      if(item?.includes("Steel") && this.openedSteel){
        this.openedSteel = false;
        this.quantityTypes++;
      }
      if(item?.includes("Water") && this.openedWater){
        this.openedWater = false;
        this.quantityTypes++;
      }
      if(item?.includes("Metal") && this.openedMetal){
        this.openedMetal = false;
        this.quantityTypes++;
      }
      if(item?.includes("Lightning") && this.openedLightning){
        this.openedLightning = false;
        this.quantityTypes++;
      }
      contador++;
    }
    return '';
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
