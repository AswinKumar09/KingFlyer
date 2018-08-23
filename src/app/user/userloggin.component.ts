import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
=======
import { Router } from '@angular/router';
>>>>>>> 6b90152510dee2e9cc7a68bcded726596a52f588

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
