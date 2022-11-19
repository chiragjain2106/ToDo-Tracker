import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-imagetask',
  templateUrl: './imagetask.component.html',
  styleUrls: ['./imagetask.component.css']
})
export class ImagetaskComponent implements OnInit {

url:any="";
// task:Task=new Task(0,"","","","",new Date(),"");
message1:any;
msg:any;
email=sessionStorage.getItem("email");

  constructor(private service:NotesService,private router:Router) { }

  ngOnInit(): void {
  this.showTasks();
  }


  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  showTasks()
{
  let re=this.service.getAlltasks(this.email);
  re.subscribe((data)=> 
  {
    this.message1=data
    console.log(this.message1)
  });
}

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
      this.url = reader.result; 
    }
  }

  sumbitImage(){
    let re=this.service.setTaskImage(this.email,localStorage.getItem("setTaskId"),this.url);
    re.subscribe((data)=> this.message1=data);
    this.reloadCurrentRoute();
  }

}
