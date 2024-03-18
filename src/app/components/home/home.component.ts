import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../../models/Card';
import { CardModalComponent } from '../../cards/card-modal/card-modal.component';
import { CardService } from '../../services/card.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  @Input() card!: Card;

  constructor( 
    private dialog: MatDialog, 
    public cardService: CardService 
   ){};

  ngOnInit(): void {
  
    this.cardService.getBanner();
    this.cardService.getAction();
    this.cardService.getDrama();
    this.cardService.getComedy();
    }

  openUpdateCardModal(card: Card): void{
    this.dialog.open(CardModalComponent,{
      width:'400px',
      data:card
    });
  }


}
