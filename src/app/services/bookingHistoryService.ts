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
  flightUrl: string = "http://localhost:2020/FlightBackendService";
  create(item: Bookinghistorymodel) {
    //this.productList.push(item);
    let url = this.flightUrl + "/addBooking" ;
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post(url, body, httpOptions); 
  }
}