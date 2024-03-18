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
  filteredCards!: Card[];
  bannerCard!: Card[];
  actionCard!:Card[];
  dramaCard!:Card[];
  comedyCard!:Card[];
  movieDetailsCard!: Card;

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http:HttpClient
  ) { }

  getCards():void{
     this.http.get<Card[]>(this.apiUrl+'/content/getAll')
     .subscribe((res: Card[]) => {
      this.cards=this.filteredCards=res;
       
     });
  }

  addCard(card: String): Observable<any> {
    return this.http.post(this.apiUrl + '/content/add', card);
  }

  updateCard(cardId: number, card: Card): Observable<any> {
    return this.http.put(this.apiUrl + '/content/put/' + cardId, card);
  }

  deleteCard(id:number): Observable<any> {
  return this.http.delete(this.apiUrl + '/content/'+ id )
}

getAllActor(): Observable<any>{
  return this.http.get<Actors[]>(this.apiUrl+'/cast/getAll')
  
}

deleteActor(id:number):Observable<any>{
 return this.http.delete(this.apiUrl + '/cast/' + id)

}

getBanner():void{
  this.http.get<Card[]>(this.apiUrl+'/content/getAll')
  .subscribe((res: Card[]) => {
    this.cards = res.filter(card => card.metadata?.Genre === 'Banner');
    this.bannerCard = this.cards;
    
  });
}

getAction():void{
  this.http.get<Card[]>(this.apiUrl+'/content/getAll')
  .subscribe((res:Card[]) =>{
    this.actionCard  =res.filter(card => card.metadata?.Genre === 'Action');
   
});

}

getDrama():void{
  this.http.get<Card[]>(this.apiUrl+'/content/getAll')
  .subscribe((res:Card[]) =>{
    this.dramaCard  = res.filter(card => card.metadata?.Genre === 'Drama');
    
  });
}

getComedy():void{
  this.http.get<Card[]>(this.apiUrl+'/content/getAll')
  .subscribe((res:Card[]) =>{
    this.comedyCard  = res.filter(card => card.metadata?.Genre === 'Comedy');
    
  });
}

getMovieDetails(id:number):void{
   this.http.get<Card>(this.apiUrl + '/content/' + id).
   subscribe((res:Card) =>{
   this.movieDetailsCard = res
   console.log(res);
  });

}

addActor(name: string, poster: string, content_id: number): Observable<any>{
  const data = {
    name: name,
    poster: poster,
    getContent_id: content_id
  };
  return this.http.post(this.apiUrl + '/cast/add', data );
}

}
