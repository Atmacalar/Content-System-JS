import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-actoradd',
  templateUrl: './actoradd.component.html',
  styleUrl: './actoradd.component.scss'
})
export class ActoraddComponent implements OnInit {
  name!: string;
  poster!: string;
  getContentId!: number;


  constructor(private dialogRef: MatDialogRef<ActoraddComponent>,private service:CardService){}

  ngOnInit(): void {
    
  }

  addActtor():void{
   
    this.service.addActor(this.name, this.poster, this.getContentId).subscribe(
      response => {
        console.log('Actor added successfully:', response);
        // Başarıyla eklendiği durumda dialog kapatılır
        this.dialogRef.close();
      },
      error => {
        console.error('Error adding actor:', error);
      }
    );
    }
  
}
