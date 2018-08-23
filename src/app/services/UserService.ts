import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Usermodel } from "../model/userModel"    
import { Password } from "../model/password";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Usermodel[];
  constructor(private http: HttpClient) { 
    //this.productList = products;
  }
  userUrl: string = "http://localhost:2020/FlightBackendService"
  getAll() {
    let url = this.userUrl + "/getAllUsers";
    return this.http.get(url);
    //return this.productList;
  }
  getDetails(id: string) {
    let url = this.userUrl + "/getUserById/" + id;
    return this.http.get<Usermodel>(url);
    // let item = this.productList.find((c)=>c.productId==id);
    // return item;
  }
  create(item: Usermodel) {
    //this.productList.push(item);
    let url = this.userUrl+"/addUser";
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post(url, body, httpOptions); 
  }
  update(item: Usermodel) {
    //this.productList.push(item);
    let url = this.userUrl+"/addUser";
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post(url, body, httpOptions); 
  }
  getPass(email:string) {
    let url = this.userUrl + "/getPassword/" + email;
    return this.http.get<Password>(url);
  }
  remove(id: number) {
    let url = this.userUrl + "/deleteUserById/" + id;
    return this.http.delete(url);
  }
}