import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../../models/Card';
import { CardModalComponent } from '../../cards/card-modal/card-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  @Input() card!: Card;

  constructor( private dialog: MatDialog){};

  ngOnInit(): void {
    
  }

  openUpdateCardModal(card: Card): void{
    this.dialog.open(CardModalComponent,{
      width:'400px',
      data:card
    });
  }


}
