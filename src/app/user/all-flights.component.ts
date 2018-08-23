import { Component, OnInit } from '@angular/core';
import { FlightService } from "../services/flightService";
import { Flightmodel } from "../model/flightmodel";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {

  flights:Flightmodel[];
  constructor(private service:FlightService, private router:Router, private route:ActivatedRoute) { }
  id:any;
  ngOnInit() {
    this.loadAll();
    this.id = this.route.snapshot.paramMap.get("id");
  }
  loadAll(){
    this.service.getAll().subscribe((Response)=>{
    this.flights=Response as any[];
    console.log("request return",this.flights);
    })
  }
  book(item:Flightmodel) {
    this.router.navigate(["/user/bookingticket/"+this.id+"/"+item.flightNo]);
  }

}
