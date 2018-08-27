import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login-model';
import { delay, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserService } from "../services/UserService";
import { Usermodel } from "../model/userModel";

@Injectable({
  providedIn: 'root'
 })
  export class AuthenticationService {
  isLoggedIn: boolean = false;
  redirectUrl: string = ""; 
  model: LoginModel; 
  url:string="http://54.255.163.0:9010/UserBackendService/api/user/email";
  userModel : Usermodel;
   constructor(private service:UserService,private http:HttpClient) { 
    this.model = new LoginModel("", "");
  }
  login(item: LoginModel): Observable<boolean> {
    this.model = item;
    this.service.getPass(this.model.email).subscribe((response) => {
        this.userModel = response as any;
        
    });
    if(this.userModel.password == this.model.password){
        this.isLoggedIn = true;
       return of(true);
    }
    return of(false);
  }

  validateLogin(item:LoginModel){
    let body= JSON.stringify(item);
    let httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }
    return this.http.post(this.url,body,httpOptions);
  }
  
  logout(item: LoginModel): void {
    this.model = new LoginModel("", ""); 
    this.isLoggedIn = false; 
  }
}
