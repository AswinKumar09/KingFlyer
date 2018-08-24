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
  fNo: string;
  date:string;
  constructor(public uservice:UserService, private route:ActivatedRoute,public authService : AuthenticationService,public router:Router) { 
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
        this.router.navigate([redirectUrl]);
      }
      else {
        this.router.navigate(["/signup"]);
      }
    })
  }

}
