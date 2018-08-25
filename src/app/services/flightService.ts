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
    let url = this.flightUrl + "/api/flight";
    return this.http.get(url);
    //return this.productList;
  }
  getDetails(id: string) {
    let url = this.flightUrl + "/api/flight/" + id;
    return this.http.get<Flightmodel>(url);
    // let item = this.productList.find((c)=>c.productId==id);
    // return item;
  }
  create(item: Flightmodel) {
    //this.productList.push(item);
    let url = this.flightUrl + "/api/flight" ;
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
    let url = this.flightUrl + "/api/flight"; 
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post(url, body, httpOptions); 
  }
  search(from:string,to:string,date:string) {
    let url = this.flightUrl + "/api/flight/" + from + "/" + to + "/" + date;
    return this.http.get(url);
  }
  remove(id: number) {
    let url = this.flightUrl + "/api/flight/" + id;
    return this.http.delete(url);
  }
}