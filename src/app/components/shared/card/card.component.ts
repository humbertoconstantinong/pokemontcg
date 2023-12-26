import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {img: string}, private dialogRef: MatDialogRef<CardComponent>) {
   
  }
  ngOninit(){
    console.warn(this.data.img)
  }

  addCard(){
    this.dialogRef.close("add");
  }
}
