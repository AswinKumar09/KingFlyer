import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from "@angular/router";
import { Usermodel } from "../model/userModel";
import { UserService } from "../services/UserService";
@Component({
  selector: 'app-userdash-header',
  templateUrl: './userdash-header.component.html',
  styleUrls: ['./userdash-header.component.css']
})
export class UserdashHeaderComponent implements OnInit {

  umodel : Usermodel;
  id:string;
  constructor(private route:ActivatedRoute, private router:Router,
  private service:UserService) { }

  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.getPass(this.id).subscribe((response) => {
      this.umodel = response as any;
    })
  }
  submit() {
    this.router.navigate(["/allFlights/"+this.id]);
  }

}
