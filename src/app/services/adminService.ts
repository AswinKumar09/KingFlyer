import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { LoginModel } from "../model/login-model";
import { Usermodel } from "../model/userModel"    



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userList: Usermodel[];
  constructor(private http: HttpClient) { 
    //this.productList = products;
  }
  userUrl: string = "http://localhost:2023/AdminBackendService"
  validateLogin(item:LoginModel) {
      return this.http.get(this.userUrl + "/validateAdmin/" + item.email + "/" + item.password);
  }
}