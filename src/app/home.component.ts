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
  flightList2 : any;
  d:string;
  constructor(private service:FlightService, private router:Router,public datepipe: DatePipe) {
    this.model = new Flightmodel('','','','','','','','');
    this.flightList = null;
    this.flightList2 = null;
  }

  dest() {
    this.service.getDest(this.model.source).subscribe((response) => {
      this.flightList2 = response as any[];
      console.log("Request returns : ", this.flightList2);
    });
    console.log("clicked");
  }

  loadAll() {
    this.service.getAll().subscribe((response) => {
       this.flightList = response as any[];
       console.log("Request returns : ", this.flightList);
     });
  }

  search() {
    if(this.model.source==""){
      console.log("source is null")
      document.getElementById("source").setAttribute("style","border:3px solid red");
    }
    else if(this.model.destination==""){
      document.getElementById("destination").setAttribute("style","border:3px solid red");
    }
    else if(this.model.date==""){
      document.getElementById("date").setAttribute("style","border:3px solid red");
    }
    else{
    console.log("search");
    this.router.navigate(["/search/"+this.model.source+"/"+this.model.destination+"/"+this.model.date]);
  }
  }
}


