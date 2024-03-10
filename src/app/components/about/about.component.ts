import { Component, Input,OnInit,Output } from '@angular/core';
import { Actors } from '../../models/actors';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/Card';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})


export class AboutComponent implements OnInit {
  actors:Actors[]=[]

  @Output() actor!:Actors;

  constructor(
  private  cardservice: CardService
  ){}

  ngOnInit(): void {
    this.cardservice.getAllActor().subscribe((actors: Actors[]) => {
      this.actors = actors;
    });
  }
  

  

}
