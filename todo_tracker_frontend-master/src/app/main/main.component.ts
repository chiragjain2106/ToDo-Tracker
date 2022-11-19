import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
  }
// date=new Date();
//   myFunction(){
//     this.date=new Date();
//     let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
//     console.log(latest_date);
//    }

}
