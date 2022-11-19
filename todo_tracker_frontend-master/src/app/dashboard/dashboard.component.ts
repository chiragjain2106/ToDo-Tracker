import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { NotesService } from '../services/notes.service';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { User } from '../user';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private service:NotesService,private router:Router,public dialog: MatDialog,private authService:AuthserviceService,
    private toast:NgToastService) {
    
  }
message3:any='';
  user:User = new User("","","","","");
  allowAutoCompletion:any=1;
  // allow:any=sessionStorage.setItem('allowNotification','1');
 

  ngOnInit(): void {
    this.messages.userImage='assets/images/default.png';
    this.showUserImage();
    console.log("Enable check : "+sessionStorage.getItem('allowNotification'));
    if(sessionStorage.getItem('allowNotification')=='1'){
    this.checkCompletion();}
  }
  events: string[] = [];
  opened: boolean | undefined;

  email:any=sessionStorage.getItem("email");
  userData:any;
  messages: any =  [{userImage:''}];
  imageSize:any;
 
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

 
  enableAutoCompletion(){
    console.log(sessionStorage.getItem('allowNotification'));
    
    if(sessionStorage.getItem('allowNotification')=='0'){
  this.allowAutoCompletion=1;
  sessionStorage.removeItem('allowNotification');
  sessionStorage.setItem('allowNotification','1');
  this.checkCompletion();
  console.log(this.allowAutoCompletion);
this.toast.success({detail:"Completed Task Auto Archive Enabled ", summary:"" ,duration:3000});

}
  else if(sessionStorage.getItem('allowNotification')=='1'){
    this.allowAutoCompletion=0;
    sessionStorage.removeItem('allowNotification');
  sessionStorage.setItem('allowNotification','0');
    this.toast.success({detail:"Completed Task Auto Archive Disabled ", summary:"" ,duration:3000});
    console.log(this.allowAutoCompletion);
  }
  console.log(sessionStorage.getItem('allowNotification'));
  }

  checkCompletion(){
        let re=this.service.archiveCompletedTask(this.email);
    re.subscribe((data)=> {
   console.log("message is : "+data.toString());
   this.message3=data;
   for(var i=0;i<this.message3.length;i++){
     console.log("task "+this.message3[i].taskTitle+"is completed and moved to archive");
     console.log("task description is : "+this.message3[i].taskDescription);
 //     this.toast.success({detail:"Task Completed", summary:"task 1 : "+this.message3[0].taskTitle+"                task 2 : "+this.message3[1].taskTitle+"                task 3 : "+this.message3[2].taskTitle+"                 is completed and moved to archive",duration:5000});
   alert("task "+this.message3[i].taskTitle+" completed");
   }
 });

  }

  showUserImage(){
    this.messages.userImage='assets/images/default.png';
    let re=this.service.getUser(this.email);
    re.subscribe((data)=>{ 
      this.userData=data;
      this.messages.userImage=this.userData.userImage;
      this.imageSize=this.messages.userImage.length;
    });
    }
category1:any='';
    category(category:any){
      let re=this.service.categorization(this.email,category);
      re.subscribe((data)=>{ 
        console.log(data);
        this.userData=data;
    
      });
    }

    addProfileImage(){
      const hide:any =document.getElementById('addImagediv');
      hide.style.display='block';
      
    }

    msg:any;
    url:any;
    message1:any;

    selectFile1(event: any) { 
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
        this.url1 = reader.result; 
        
      }}
      url1:any
    sumbitImage1(){
      console.log("task Id is : "+this.url1);
      let re=this.service.setUserImage(this.email,this.url1);
      re.subscribe((data)=> this.message1=data);
      this.showUserImage();
      this.reloadCurrentRoute();
    }


    openDialog(){
      this.dialog.open(UploadImageComponent)
    }

    openDialogChangePassword(){
      this.dialog.open(ChangePasswordComponent)
    }

    logoutUser(){
      this.authService.logout()
      sessionStorage.removeItem('allowNotification');
      sessionStorage.setItem('allowNotification','1');
      window.location.href='login'
    }

    doRoute(){
      this.router.navigate(['notes']);
      this.reloadCurrentRoute();
    }
    
}
