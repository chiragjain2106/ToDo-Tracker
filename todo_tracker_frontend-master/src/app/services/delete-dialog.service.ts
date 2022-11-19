import { Inject, Injectable } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor( private dialog:MatDialog) { }

  openConfirmDialog(msg: string){
    return this.dialog.open(DeleteDialogComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "75px" },
       data :{
        message : msg
      }
     });
   }
}
