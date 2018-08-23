import { Component, OnInit } from '@angular/core';
import { Flightmodel } from './model/flightmodel';
import { FlightService } from "./services/flightService";
import { ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  ngOnInit() {
      this.loadAll();
  }
  model : Flightmodel;
  flightList : any;
  
  constructor(private service:FlightService, private router:Router) {
    this.model = new Flightmodel('','','','','','','','');
  }

  loadAll() {
    this.service.getAll().subscribe((response) => {
       this.flightList = response as any[];
       console.log("Request returns : ", this.flightList);
     });
  }
}


