import { Component, OnInit } from '@angular/core';
import { Usermodel } from "./model/userModel";
import { UserService } from "./services/UserService";
import {Router} from '@angular/router';
import { ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  uModel:Usermodel;
  id:string;  
  constructor(private uService:UserService,
    private route:ActivatedRoute, private router:Router) { 
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.uService.getDetails(this.id).subscribe((response) => {
      this.uModel = response as any;
  });
  }

  reset() {
    this.uService.create(this.uModel).subscribe({
      complete: () => {
        console.log("completed");
        this.router.navigate(["/signin"]);
      }
    });
    
  }

}
