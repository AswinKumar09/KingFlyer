import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Flightmodel } from './model/flightmodel';
import { FlightService } from "./services/flightService";

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  models: Flightmodel[];

  constructor(private router:Router,private route: ActivatedRoute,private service:FlightService) {
   }


  ngOnInit()
 {
  let from=this.route.snapshot.paramMap.get("from");
  let to=this.route.snapshot.paramMap.get("to");
  let dt=this.route.snapshot.paramMap.get("date");

  this.service.search(from, to, dt).subscribe((response) => {
    this.models = response as any[];
    console.log("Request returns : ", this.models);
  })
  //let date=this.route.snapshot.paramMap.get("date");
  console.log(`From: ${from}`);
  console.log(`To: ${to}`);
 // console.log(`Date: ${date}`);
  
  //this.model=this.service.getDetails(parseInt(id));
  // this.service.getDetails(from).subscribe((response) =>{
  //   this.model=response;
  }

  book() {
   
    this.router.navigate(["/user/bookingticket"]);
  }


}
