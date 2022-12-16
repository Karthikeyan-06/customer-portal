import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  login: any;
  url1 = "http://localhost:3030/inquiry";
  url2 = "http://localhost:3030/delivery";
  url3 = "http://localhost:3030/sale";

  inquirydata:any;
  deliverydata:any;
  saledata:any;


  constructor(public _data : DataService,private router: Router , private http: HttpClient,private _snackBar: MatSnackBar,) { 

    this.login = {
      Username: this._data.usernametest,
      Password:'0001',
    };
  }

  ngOnInit(): void {


    const headers1 = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
      this.http.post(this.url1, JSON.stringify(this.login), { headers: headers1 }).subscribe((data: any) => {
        console.log("inquiry data received");
        console.log(data.inquirystatus1);

        this.inquirydata=data.inquirystatus1
       
        
      });

      const headers2 = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
      this.http.post(this.url2, JSON.stringify(this.login), { headers: headers2 }).subscribe((data: any) => {

        console.log("delivery data received");
        console.log(data.deliverystatus1);
        this.deliverydata=data.deliverystatus1;
        
      });

      const headers3 = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
      this.http.post(this.url3, JSON.stringify(this.login), { headers: headers3 }).subscribe((data: any) => {
        console.log("sale order data received");
        console.log(data.salestatus1);

        this.saledata=data.salestatus1
        
      });




  }

}
