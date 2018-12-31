import { Component, OnInit } from '@angular/core';
import { CustomerlistService } from '../customerlist.service';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  namelist: String;
  names=[];
  name: string;
  constructor(private customerListService: CustomerlistService) { }

  ngOnInit() {
    
    this.namelist = this.customerListService.getMyItems();
    this.names= this.customerListService.getNames();
    //this.name = 'default name value';
    this.testFunc();
  }
  testFunc(){
    console.log("Test Function");
  }
  addDetails(){

    alert(this.name);

  }
}
