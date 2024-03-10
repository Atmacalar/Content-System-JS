 import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Card } from '../models/Card';
import { Observable } from 'rxjs';
import { Actors } from '../models/actors';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 
  cards! :Card[];
  actors!: Actors[];

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http:HttpClient
  ) { }

  getCards():void{

     this.http.get<Card[]>(this.apiUrl+'/content/getAll')
     .subscribe((res: Card[]) => {
      this.cards=res;
       
     });
  }

  addCard(card: String): Observable<any> {
    return this.http.post(this.apiUrl + '/content/add', card);
  }

  updateCard(card: Card, cardId: number): Observable<any> {
    return this.http.put(this.apiUrl + '/content/put/'+ cardId ,card);
  }

  deleteCard(id:number): Observable<any> {
  return this.http.delete(this.apiUrl + '/content/'+ id )
}

getAllActor(): Observable<any>{
  return this.http.get<Actors[]>(this.apiUrl+'/cast/getAll')
  
}


}
