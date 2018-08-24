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
  bookUrl: string = "http://localhost:2020/BookingBackendService";
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
  getById(id: string) {
    let url = this.bookUrl + "/api/booking/id/" + id;
    return this.http.get(url);
  }
  remove(id: string) {
    let url = this.bookUrl + "/api/flight/" + id;
    return this.http.delete(url);
  }


}