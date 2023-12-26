import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeckCreateComponent } from '../deck-create/deck-create.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog,private router: Router){

  }

  openMyDecks(){
    this.router.navigate(['/decks']);
  }

  openNew() {
    this.router.navigate(['/create']);
  }

}
