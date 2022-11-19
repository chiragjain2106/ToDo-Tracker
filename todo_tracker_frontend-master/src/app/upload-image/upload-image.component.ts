import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  email:any=sessionStorage.getItem("email");
  // console.log(sessionStorage.getItem("email"));
  constructor(private service:NotesService, private router:Router) { }

  ngOnInit(): void {
  }

  msg:any;
    url:any;
    message1:any;

    reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });}

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
      console.log("image is : "+this.url1);
      console.log(this.email);
      let re=this.service.setUserImage(this.email,this.url1);
      re.subscribe((data)=> this.message1=data);
      this.reloadCurrentRoute();
    }


}
