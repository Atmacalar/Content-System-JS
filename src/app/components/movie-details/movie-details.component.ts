import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{

constructor(
 public  cardService: CardService,
  public router:ActivatedRoute,
  

){ }

 

ngOnInit(): void {
  let getParamId = this.router.snapshot.paramMap.get('id');
    this.cardService.getMovieDetails(Number(getParamId));
}



}
