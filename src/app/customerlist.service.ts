import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerlistService {

  constructor() { }
  getMyItems():string{
    return "Welcome";
  }

  names= ["Bala","Nalini","Ashvitha","Janani"];

  getNames(){
    return this.names;
  }
}
