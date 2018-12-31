import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampledirectives',
  templateUrl: './sampledirectives.component.html',
  styleUrls: ['./sampledirectives.component.css']
})
export class SampledirectivesComponent implements OnInit {
  msg:boolean;

  constructor() { }

  ngOnInit() {
  }
  changeStatus(){
   /* if(this.msg==true)
      alert("Are you sure you want to see the message");*/
  }
}
