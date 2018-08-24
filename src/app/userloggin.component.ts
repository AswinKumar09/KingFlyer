import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "./services/authenticationService";
import { LoginModel } from "./model/login-model";
import { Usermodel } from "./model/userModel";
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
  constructor(public authService : AuthenticationService,public router:Router) { 
    this.model = authService.model;
    this.setMessage();
  }

  ngOnInit() {
  }
  setMessage() {
    this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }
  login() {
    this.message = "Trying to login......";

    this.authService.login(this.model).subscribe((response) => {
      this.authService.isLoggedIn = response; 
      console.log(response);
      //this.setMessage();
      if (this.authService.isLoggedIn) {
       // this.id = this.umodel.id;
        //onsole.log(this.id);
        let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : "/user/dash/"+this.id; 
        this.router.navigate([redirectUrl]);
      }
      else {
        this.router.navigate(["/signup"]);
      }
    })
  }

}
