import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Usermodel } from "../model/userModel"    


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Usermodel[];
  constructor(private http: HttpClient) { 
    //this.productList = products;
  }
  userUrl: string = "http://54.255.163.0:9010/UserBackendService"
  getAll() {
    let url = this.userUrl + "/api/user";
    return this.http.get(url);
    //return this.productList;
  }
  getDetails(id: string) {
    let url = this.userUrl + "/api/user/" + id;
    return this.http.get<Usermodel>(url);
    // let item = this.productList.find((c)=>c.productId==id);
    // return item;
  }
  create(item: Usermodel) {
    //this.productList.push(item);
    let url = this.userUrl+"/api/user";
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
    let url = this.userUrl+"/api/user";
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
    let url = this.userUrl + "/api/user/email/" + email;
    return this.http.get<Usermodel>(url);
  }
  remove(id: number) {
    let url = this.userUrl + "/api/user/" + id;
    return this.http.delete(url);
  }
  getThrough(email:string, password:string) {
    let url = this.userUrl + "/api/user/email/" + email+"/"+password;
    return this.http.get<Usermodel>(url);
  }
  
}