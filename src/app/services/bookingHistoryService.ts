import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Bookinghistorymodel } from "../model/BookingHistoryModel";


@Injectable({
  providedIn: 'root'
})
export class bookingHistoryService {

  Bookingmodel: Bookinghistorymodel[];
  constructor(private http: HttpClient) { 
    //this.productList = products;
  }
  bookUrl: string = "http://localhost:2023/BookingBackendService";
  create(item: Bookinghistorymodel) {
    //this.productList.push(item);
    let url = this.bookUrl + "/api/booking" ;
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post(url, body, httpOptions); 
  }
  getDetails(id: string) {
    let url = this.bookUrl + "/api/booking/" + id;
    return this.http.get(url);
  }
  getUpcoming(id: string) {
    let url = this.bookUrl + "/api/booking/upcoming/" + id;
    return this.http.get(url);
  }
  getById(id: string) {
    let url = this.bookUrl + "/api/booking/id/" + id;
    return this.http.get(url);
  }
  remove(id: string) {
    let url = this.bookUrl + "/api/booking/" + id;
    return this.http.delete(url);
  }

  mail(id: string, email: string) {
    let url = this.bookUrl + "/api/booking/mailclient/" + id +"/" + email;
    return this.http.get(url);
  }

  reset(email:string, uid:number) {
    let url = this.bookUrl + "/api/booking/reset/" + email + "/" + uid;
    return this.http.get(url);
  }


}