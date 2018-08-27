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
    if(this.usermodel.email=="") {
      document.getElementById("email").setAttribute("style","border:3px solid red");
  }
  else if(this.usermodel.password=="") {
    document.getElementById("password").setAttribute("style","border:3px solid red");
  }
  else {
    this.service.create(this.usermodel).subscribe({
      complete:() => {
        console.log("completed");
        this.router.navigate(["/signin"]);
      }
    });
  }
  }

}
