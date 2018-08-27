import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from "@angular/router";
import { UserService } from "../services/UserService";
import { Usermodel } from "../model/userModel";
import { Router } from '@angular/router';
import { LoginModel } from "../model/login-model";
import { AuthenticationService } from "../services/authenticationService";


@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  umodel : Usermodel;
  constructor(public router:Router,private route: ActivatedRoute,private service:UserService, private authService:AuthenticationService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getDetails(id).subscribe((response) => {
      this.umodel = response as any;
  });
  }
  submit() {
    this.service.create(this.umodel).subscribe({
      complete: () => {
        console.log("completed");
        this.router.navigate(["/user/dash/"+this.umodel.email]);
      }
    });
  }

}
