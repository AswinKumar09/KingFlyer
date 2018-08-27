import { Component, OnInit } from '@angular/core';
import { Flightmodel } from './model/flightmodel';
import { DatePipe } from '@angular/common';
import { FlightService } from "./services/flightService";
import { ActivatedRoute, ParamMap, Router} from "@angular/router";


@Component({
  
  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  today:number = Date.now();
  
 
  ngOnInit() {
      this.loadAll();
      let latest_date =this.datepipe.transform(this.today, 'yyyy-MM-dd');
      document.getElementById("date").setAttribute("min",latest_date);
      console.log(latest_date);
  }
  model : Flightmodel;
  flightList : any;
  d:string;
  constructor(private service:FlightService, private router:Router,public datepipe: DatePipe) {
    this.model = new Flightmodel('','','','','','','','');
    this.flightList = null;
  }

  loadAll() {
    this.service.getAll().subscribe((response) => {
       this.flightList = response as any[];
       console.log("Request returns : ", this.flightList);
     });
  }
}


