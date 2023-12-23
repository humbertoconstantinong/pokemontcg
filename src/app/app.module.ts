import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './components/shared/deck/deck.component';
import { DeckDetailComponent } from './pages/deck-detail/deck-detail.component';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CardComponent } from './components/shared/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    DeckDetailComponent,
    DeckCreateComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
