import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "./services/authenticationService";
import { LoginModel } from "./model/login-model";
import { Usermodel } from "./model/userModel";
import { ActivatedRoute, ParamMap} from "@angular/router";
import { UserService } from "./services/UserService";

@Component({
  selector: 'app-userloggin',
  templateUrl: './userloggin.component.html',
  styleUrls: ['./userloggin.component.css']
})
export class UserlogginComponent implements OnInit {

  model : LoginModel;
  message : string;
  umodel : Usermodel;
  id: number;
<<<<<<< HEAD
  constructor(public authService : AuthenticationService,public router:Router) { 
=======
  fNo: string;
  date:string;
  constructor(public uservice:UserService, private route:ActivatedRoute,public authService : AuthenticationService,public router:Router) { 
>>>>>>> 33c683c5333703ca3bcd0cecdade7f0583896b4b
    this.model = authService.model;
    this.setMessage();
  }

  ngOnInit() {
    this.umodel = new Usermodel("","","","","","");
    this.fNo = this.route.snapshot.paramMap.get("fNo");
    this.date = this.route.snapshot.paramMap.get("date");
  }
  setMessage() {
    this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }
  login() {
    this.message = "Trying to login......";

    this.authService.login(this.model).subscribe((response) => {
<<<<<<< HEAD
      this.authService.isLoggedIn = response; 
      console.log(response);
      //this.setMessage();
      if (this.authService.isLoggedIn) {
       // this.id = this.umodel.id;
        //onsole.log(this.id);
        let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : "/user/dash/"+this.id; 
=======
      this.authService.isLoggedIn = response;
      if (this.authService.isLoggedIn) {
        this.uservice.getPass(this.model.email).subscribe((response) => {
          this.umodel = response as any;
        });
        this.id = this.umodel.id;
        // console.log(this.id);
        let redirectUrl;
        if(this.fNo!=null) {
          redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : "/user/bookingticket/"+this.id+"/"+this.fNo+"/"+this.date;   
        }
        else{
        redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : "/user/dash/"+this.id; 
      }
>>>>>>> 33c683c5333703ca3bcd0cecdade7f0583896b4b
        this.router.navigate([redirectUrl]);
      }
      else {
        this.router.navigate(["/signup"]);
      }
    })
  }

}
