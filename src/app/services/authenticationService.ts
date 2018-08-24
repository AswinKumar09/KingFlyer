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
   /* this.service.getPass(this.model.email).subscribe((response) => {
        this.userModel = response as any;
        this.isLoggedIn = true;     
        console.log("Request returns : ", this.userModel.password);
        return of(true).pipe(
          tap(c=>this.isLoggedIn=true)
        ); 
    });
    return of(this.isLoggedIn);*/
    //return this.service.getPass(this.model.email);
    let isValid=false;
    
    return of(true).pipe(
      tap(c=>{this.service.getPass(this.model.email).subscribe((response)=>{
    
        if(response!=null){
          this.model = response; 
          isValid=true;
         
        } 
        else {
          isValid=false;
        }
      
      })}),
      tap(c=>this.isLoggedIn=isValid)
    );
  }
  logout(item: LoginModel): void {
    this.model = new LoginModel("", ""); 
    this.isLoggedIn = false; 
  }
}
