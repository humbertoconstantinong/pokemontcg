import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private http: HttpClient) { }


  // GET
  getAll(): Observable<any>{
    return this.http.get<any>('https://api.pokemontcg.io/v2/cards');
  }
  getCardByName(): Observable<any>{
    return this.http.get<any>('https://api.pokemontcg.io/v2/cards?q=name:charizard');
  }
  getCardByPage(page: any): Observable<any>{
    return this.http.get<any>(`https://api.pokemontcg.io/v2/cards?page=${page}`);
  }

  getDecks(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/decks');
  }

  // POST
  createDeck(deck: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/decks', deck);
  }

  // DELETE
  deleteDeck(id: any): Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/decks/${id}`);
  }

}
