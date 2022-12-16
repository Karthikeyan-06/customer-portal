import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: any;
  url = "http://localhost:3030/";

  constructor(private router: Router , private http: HttpClient,private _snackBar: MatSnackBar,public _data : DataService) {

    this.login = {
      Username:'',
      Password:'',
    };
   }

  ngOnInit(): void {
  }

  Onsubmit(){
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
      this.http.post(this.url, JSON.stringify(this.login), { headers: headers }).subscribe((data: any) => {
        console.log("sended data");
        console.log(data.loginstatus1);
        
        if (data.loginstatus1 == "1"){
          this.router.navigate(['profile'])
          this._data.append(this.login.Username)
        }
        else{
          this._snackBar.open("Enter Correct Username And Password", "Close", { duration: 3000 });
        }
      });
  }  

  
  hide : boolean = true;
  hidepassword() {
    this.hide = !this.hide;
  }




  }