import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userid : number = 12;
  usernametest :any;
  constructor() { }

  append(uname:any){
    this.usernametest = uname;
  }
}


