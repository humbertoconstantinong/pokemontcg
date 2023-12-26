import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>('https://api.pokemontcg.io/v2/cards');
  }
  getCardByName(): Observable<any>{
    return this.http.get<any>('https://api.pokemontcg.io/v2/cards?q=name:charizard');
  }
  getCardByPage(page: any): Observable<any>{
    return this.http.get<any>(`https://api.pokemontcg.io/v2/cards?page=${page}`);
  }

}
