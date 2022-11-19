import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegisterService } from '../register/register.service';
import { AuthserviceService } from '../services/authservice.service';
import { DeleteDialogService } from '../services/delete-dialog.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service:RegisterService,private router:Router,public dialog: MatDialog,private toast:NgToastService
    ,private dialogService:DeleteDialogService,private auth:AuthserviceService) { }
 
  ngOnInit(): void {
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });}

    centered = false;
  newPassword:any='';
  oldPassword:any='';
  message1:any;
  status:any;
  email:any=sessionStorage.getItem("email");
 
  password= new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9@*]{8,15}$")]);

 changePassword(){
  console.log("password is : "+this.newPassword,this.oldPassword);
  
   let re=this.service.updatePassword(this.newPassword,this.email,this.oldPassword);
   re.subscribe((data)=> {
     this.message1=data;
     console.log(data);
     if(data==false){
      this.status=' Password doesnot match';
      this.toast.error({detail:"Password doesnot match", summary:"Please check your old password",duration:3000})
     }else if(data==true){
      this.status=' password Changed Successfully';
      this.toast.success({detail:"password Changed Successfully", summary:"",duration:3000})
      this.auth.logout();
      this.router.navigate(['login']);
     }
   });
  }


}
