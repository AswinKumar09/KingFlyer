import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminService } from "./services/adminService";
import { LoginModel } from "./model/login-model";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  lModel:LoginModel;
  constructor(public router:Router, public service:AdminService) { }

  ngOnInit() {
    this.lModel = new LoginModel("","");
  }
  login(){
    console.log(this.lModel.email);
    console.log(this.lModel.password);
    this.service.validateLogin(this.lModel).subscribe((response) => {
      if(response) {
        this.router.navigate(["/admindashboard"]);
      }
      else{
        this.router.navigate(["/"]);
      }
    })
    
  }

}
