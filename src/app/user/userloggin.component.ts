import { Component, OnInit } from '@angular/core';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-userloggin',
  templateUrl: './userloggin.component.html',
  styleUrls: ['./userloggin.component.css']
})
export class UserlogginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  login() {
   
    this.router.navigate(["/userdashboard"]);
  }

}
