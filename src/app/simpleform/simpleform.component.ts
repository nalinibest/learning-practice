import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  name:string;
  email:string;
  phonenumber:string;

  constructor() { }

  ngOnInit() {
  }

  addDetails(){
    alert(this.name+' -- ' +this.email+' -- '+this.phonenumber);
  }

}
