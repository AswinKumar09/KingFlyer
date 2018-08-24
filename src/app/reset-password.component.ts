import { Component, OnInit } from '@angular/core';
import { Usermodel } from "./model/userModel";
import { UserService } from "./services/UserService";
import { bookingHistoryService } from "./services/bookingHistoryService";
import { LoginModel } from "./model/login-model";
import {Router} from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  uModel:Usermodel;
  lModel:LoginModel;
  constructor(private uService:UserService,private bService:bookingHistoryService, private router:Router) { 
    this.lModel = new LoginModel("","");
    this.uModel = new Usermodel("","","","","","");
  }

  ngOnInit() {
  }
  mail() {
    this.uService.getPass(this.lModel.email).subscribe((response) => {
      this.uModel = response as any;
    });
    this.bService.reset(this.lModel.email, this.uModel.id).subscribe({
      complete:() => {
        console.log("completed");
        this.router.navigate(["/"]);
      }
    })
  }

}
