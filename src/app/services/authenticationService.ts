import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login-model';
import { delay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from "../services/UserService";
import { Password } from "../model/password";
import { Usermodel } from "../model/userModel";

@Injectable({
  providedIn: 'root'
 })
  export class AuthenticationService {
  isLoggedIn: boolean = false;
  redirectUrl: string = ""; 
  model: LoginModel; 
  userModel : Usermodel;
   constructor(private service:UserService) { 
    this.model = new LoginModel("", "");
  }
  login(item: LoginModel): Observable<boolean> {
    this.model = item;
    let pass : string; 
   this.service.getPass(this.model.email).subscribe((response) => {
        this.userModel = response as any;
        
    });
    if(this.userModel.password == this.model.password){
        this.isLoggedIn = true;
       return of(true);
    }
    return of(false);
  }
  logout(item: LoginModel): void {
    this.model = new LoginModel("", ""); 
    this.isLoggedIn = false; 
  }
}
