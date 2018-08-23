import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from "../model/login-model";
import { AuthenticationService } from "../services/authenticationService";
import { ActivatedRoute, ParamMap} from "@angular/router";
import { UserService } from "../services/UserService";
import { Usermodel } from "../model/userModel";


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  umodel : Usermodel;
  constructor(public router:Router,private route: ActivatedRoute,private service:UserService, private authService:AuthenticationService) { }

  model: LoginModel;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getDetails(id).subscribe((response) => {
      this.umodel = response as any;
  });
  }
  edit() {
    this.router.navigate(["/user/manageaccount/"+this.umodel.id]);
  }
  logout() {
    this.authService.logout(this.model); 
    this.router.navigate(["/signin"]);
  }
}
