import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  login: any;
  url = "http://localhost:3030/profile";

  profiledata:any;
  kunnrdata:any;
  userid:any;

  customernumber:any;
  name1:any;
  name2:any;
  city:any;
  region:any;
  postalcode:any;
  phonenumber:any;  

  constructor(public _data : DataService,private router: Router , private http: HttpClient,private _snackBar: MatSnackBar,) {
    
   

    this.login = {
      Username: this._data.usernametest,
      Password:'',
    };
   
   }

  ngOnInit(): void {


    this.userid=this._data.userid

    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
      this.http.post(this.url, JSON.stringify(this.login), { headers: headers }).subscribe((data: any) => {
        console.log("profile data received");
        console.log(data.profilestatus1);

        this.profiledata=data.profilestatus1
        console.log(this.profiledata.KUNNR._text)
        this.kunnrdata=this.profiledata.KUNNR._text

        this.customernumber=this.profiledata.KUNNR._text
        this.name1=this.profiledata.NAME1._text
        this.name2=this.profiledata.NAME2._text
        this.city=this.profiledata.ORT01._text
        this.region=this.profiledata.REGIO._text
        this.phonenumber=this.profiledata.TELF1._text
        this.postalcode=this.profiledata.PSTLZ._text
      });
  }

}

