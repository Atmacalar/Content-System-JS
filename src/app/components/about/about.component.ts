import { Component, Input,OnInit,Output } from '@angular/core';
import { Actors } from '../../models/actors';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/Card';
import { subscribe } from 'diagnostics_channel';
import { ActoraddComponent } from './actoradd/actoradd.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})


export class AboutComponent implements OnInit {
  [x: string]: any;
  actors:Actors[]=[]
    
  @Output() actor!:Actors;

  constructor(
  private  cardservice: CardService,
  private dialog: MatDialog
  ){}

  ngOnInit(): void {
   this.getActor();
  }
  

getActor(){
  this.cardservice.getAllActor().subscribe((actors: Actors[]) => {
    this.actors = actors;
  });

}

deleteActor(id:number  | undefined){
  if (id !== undefined) {
    const isConfirmed = window.confirm("Silmek istediğinizden emin misiniz?");
    if (isConfirmed) {
       this.cardservice.deleteActor(id).subscribe((res: any) => {
    });
    } 
    

} 

}


openAddCardModal():void{
  const dialogRef = this.dialog.open(ActoraddComponent, { width: '400px' });
  dialogRef.afterClosed().subscribe(result => {
    
  });




  }
}
