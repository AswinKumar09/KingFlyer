import { Component, OnInit } from '@angular/core';
import {Flightmodel} from '../model/flightmodel';
import {Router} from "@angular/router";
import {FlightService} from '../services/flightService';
import { ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-edit-flights',
  templateUrl: './edit-flights.component.html',
  styleUrls: ['./edit-flights.component.css']
})
export class EditFlightsComponent implements OnInit {


  model:Flightmodel;
  constructor(private service:FlightService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
     let id = this.route.snapshot.paramMap.get("id");
      this.service.getDetails(id).subscribe((response) => {
       this.model = response as any;
  });
}


  submit()
  {
    this.service.update(this.model).subscribe({
      complete:()=>{
        console.log("completed");
        this.router.navigate(["/admindashboard"]);
      }
    });
  }



}
