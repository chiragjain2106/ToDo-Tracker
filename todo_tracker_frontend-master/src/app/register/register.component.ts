import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Task } from '../task';
import { RegisterService } from './register.service';
import { User } from './User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:RegisterService, private router:Router, private toast:NgToastService) { }

  ngOnInit(): void {
  }
message:any;
messages: any =  [{userImage:''}];
url: any='assets/images/avatar.png';
msg = "";
url_size:any;
availablity:any;

// task:Task=new Task(0,"","","","",new Date(),"");
 user1 : User = new User("","","","","");

username = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \s]{4,15}$')]);
email = new FormControl('', [Validators.required, Validators.email]);
password= new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9@*]{8,15}$")]);
mobileNo = new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10,12}$")]);

// public registerNow(){

//   console.log(this.user1);
//   console.log(this.task);
//   console.log("username : "+this.username.value);
//   console.log("email : "+this.email.value);
//   let re=this.service.addUser(this.user1);
//   re.subscribe((data)=>this.message=data);
// }
	
	selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			console.log(reader.result);
			this.url = reader.result; 
			this.user1.userImage=this.url;
      this.url_size=this.url.length;
		}
	}

	public showUser(){
		console.log("email is : "+this.email.value)
		let re=this.service.getUser(this.email.value);
		re.subscribe((data)=>this.message=data);
		console.log(this.message);
		this.messages.userImage=this.message.userImage;
		this.toast.success({detail:"Registration Success", summary:"",duration:3000})
		console.log("value of messages.userImage is : "+this.messages.userImage);
		this.router.navigate(['/login'])

	}

	public registerNow(){
		console.log(this.user1);
		console.log(this.email.valid );
		  console.log(this.email.value );
			  if(this.username.valid===false){
				alert('User Name sholuld be in coorect format');
				console.log('User Name sholuld be in coorect format');
			  }
			  else  if(this.password.valid===false){
				alert('Password sholuld be in coorect format');
				console.log('Password sholuld be in coorect format');
			  }
			  else  if(this.email.valid===false){
				alert('Email id sholuld be in coorect format');
				console.log('Email id sholuld be in correct format');
			  }
			  else {
				console.log('Email id is '+this.email.value);
		  this.message='USER ALREADY EXIST,TRY ANOTHER EMAIL ID';
		  this.toast.warning({detail:"ACCOUNT ALREADY EXIST WITH THIS EMAIL ID, TRY WITH ANOTHER ONE", summary:"",duration:3000})
		  let re=this.service.addUser(this.user1);
		  re.subscribe((data)=>{this.message=data;
			console.log('data is '+data);
		   
			if(data==null){
			  alert('empty Fields not allowed ');
			}
			else{
			this.message='CONGREGULATIONS!! YOUR ACCOUNT IS SUCCESSFULLY CREATED :';
			this.toast.success({detail:"CONGRATULATIONS!! YOUR ACCOUNT IS SUCCESSFULLY CREATED", summary:"",duration:3000})
			this.router.navigate(['login']);
		}
		  }
		  );
		}
	}  
}
