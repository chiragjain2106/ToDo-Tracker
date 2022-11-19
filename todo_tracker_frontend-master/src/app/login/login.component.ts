import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import {NgToastService} from "ng-angular-popup"
import { Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    email:'',
    password:''
  }
  loginForm!: FormGroup;
  
  constructor(private authService:AuthserviceService, private toast:NgToastService, private router:Router,formBuilder: FormBuilder) { 
    // this.loginForm = formBuilder.group({
    //   email: new FormControl(
    //     '',
    //     Validators.compose([Validators.email, Validators.required])
    //   ),
    //   password: new FormControl('', Validators.required),
    // });
  }

  ngOnInit(): void {
    this.initForm();
    sessionStorage.setItem('allowNotification','1');
  }
  initForm(){
  }

  logInUser(item:any) {
    this.authService.generateTokenUsingLogin(this.credentials).subscribe(
      (response: any) => {
        console.log(response);
        sessionStorage.setItem("email",this.credentials.email)
        console.log(sessionStorage.getItem("email"));
        this.toast.success({detail:"Login Success", summary:"",duration:3000})
        this.authService.loginUserToken(response.token);
        this.router.navigate(['dashboard'])
      },
      (error) => {
        if (error.status == 404 || error.status == 400) {
          console.log("Login Fails")
          this.toast.error({detail:"Login Fail", summary:"Please Check Your Credentials",duration:7000})
        }
      }
    );
  }
}
