import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../models/Card';
import { error } from 'console';
import { SnackbarService } from '../../services/snackbar.service';
import { measureMemory } from 'vm';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss'
})
export class CardModalComponent implements OnInit {

  cardForm!: FormGroup;
  showSpinner: boolean =false;

  constructor(
    private dialogRef: MatDialogRef<CardModalComponent>,
    private fb:FormBuilder,
    private cardService: CardService ,
    private _snackBar: MatSnackBar,
    private snackbarService : SnackbarService,
    @Inject(MAT_DIALOG_DATA) public  data: Card
  ){};

  ngOnInit(): void {
    this.cardForm = this.fb.group({
     
      Title: [this.data?.title || '', [Validators.required, Validators.maxLength(255)]],
      

      metadata: this.fb.group({
          Title: [this.data?.metadata?.Title || '', Validators.maxLength(255)],
          Plot: [this.data?.metadata?.Plot || '', Validators.maxLength(255)],
          Poster: [this.data?.metadata?.Poster || '', Validators.maxLength(255)],
          Year: [this.data?.metadata?.Year || '', Validators.maxLength(4)],
          Language: [this.data?.metadata?.Language || '', Validators.maxLength(50)],
          Country: [this.data?.metadata?.Country || '', Validators.maxLength(50)],
          Genre: [this.data?.metadata?.Genre || '', Validators.maxLength(50)],
          Director: [this.data?.metadata?.Director || '', Validators.maxLength(50)],
      }),

    
  });
  }
  sendTitleValue(): void {
    const titleValue = this.cardForm.get('Title')?.value;
  
    this.cardService.addCard(titleValue)
      .subscribe((res: any) => {
        this.getSuccess(res || 'Kartvizit Başarıyla Eklendi');
      }, (err: any) => {
        this.getError(err.message || 'Bir Sorun var');
      });
  }
  
 updateCard():void{
  this.showSpinner=true;
this.cardService.updateCard( this.data.id,this.cardForm.value)
.subscribe((res:any) =>{
  console.log(res);
this.getSuccess(res || 'Kartvizit Başarıyla Güncellendi');
}, (err: any) => {

  this.getError(err.message || 'Bir Sorun var');
 });
 

}

deleteCard():void{
  this.showSpinner=true;
  this.cardService.deleteCard(this.data.id).
  subscribe((res:any) =>{
    this.getSuccess(res || 'Kartvizit Başarıyla Silindi');
   },(err: any) => {
    this.getError(err.message || 'Bir Sorun var');
   });
     
}

getSuccess(message: string){
 this.snackbarService.createSnackbar(message);
  this.cardService.getCards();
    this.showSpinner=false;
    this.dialogRef.close();
}

getError(message: string) {
 this.snackbarService.createSnackbar(message);
 this.showSpinner=false;
}

}
