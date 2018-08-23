import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/UserService";
import { Usermodel } from "./model/userModel";
import { ActivatedRoute, ParamMap, Router} from "@angular/router";
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  usermodel:Usermodel;

  constructor(private service:UserService,
    private router: Router) { }

  ngOnInit() {
    this.usermodel = new Usermodel(0,"","","","","");
  }
  
  submit() {
    this.service.create(this.usermodel).subscribe({
      complete:() => {
        console.log("completed");
        this.router.navigate(["/signin"]);
      }
    });
  }

}
