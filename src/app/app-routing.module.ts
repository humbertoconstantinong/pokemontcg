import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'create', component: DeckCreateComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
