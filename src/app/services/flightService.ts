import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Flightmodel } from "../model/flightmodel";


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightList: Flightmodel[];
  constructor(private http: HttpClient) { 
    //this.productList = products;
  }
  flightUrl: string = "http://localhost:2020/FlightBackendService";
  getAll() {
    let url = this.flightUrl + "/getAllFlights";
    return this.http.get(url);
    //return this.productList;
  }
  getDetails(id: number) {
    let url = this.flightUrl + "/getFlightById" + id;
    return this.http.get<Flightmodel>(url);
    // let item = this.productList.find((c)=>c.productId==id);
    // return item;
  }
  create(item: Flightmodel) {
    //this.productList.push(item);
    let url = this.flightUrl;
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post(url, body, httpOptions); 
  }
  update(item: Flightmodel) {
    //this.productList.push(item);
    let url = this.flightUrl;
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.put(url, body, httpOptions); 
  }
  remove(id: number) {
    let url = this.flightUrl + "/deleteFlightById" + id;
    return this.http.delete(url);
  }
}