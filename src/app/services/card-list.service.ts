import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private http: HttpClient) { }
  urlFake = "http://localhost:3000/decks";
  urlApiOfficial = "https://api.pokemontcg.io/v2/";

  // GET
  getAll(): Observable<any>{
    return this.http.get<any>(`${this.urlApiOfficial}cards`);
  }
  getCardByName(name: string): Observable<any>{
    return this.http.get<any>(`https://api.pokemontcg.io/v2/cards?q=name:${name}`);
  }
  getCardByPage(page: any): Observable<any>{
    return this.http.get<any>(`${this.urlApiOfficial}cards?page=${page}`);
  }

  getDecks(): Observable<any>{
    return this.http.get<any>(`${this.urlFake}`);
  }

  // POST
  createDeck(deck: any): Observable<any>{
    return this.http.post<any>(`${this.urlFake}`, deck);
  }

  // DELETE
  deleteDeck(id: any): Observable<any>{
    return this.http.delete<any>(`${this.urlFake}/${id}`);
  }

}
