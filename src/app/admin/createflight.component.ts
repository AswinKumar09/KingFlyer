import { Component, OnInit } from '@angular/core';
import {Flightmodel} from '../model/flightmodel';
import {Router} from "@angular/router";
import {FlightService} from '../services/flightService';

@Component({
  selector: 'app-createflight',
  templateUrl: './createflight.component.html',
  styleUrls: ['./createflight.component.css']
})
export class CreateflightComponent implements OnInit {

  model:Flightmodel;
  constructor(private service:FlightService,private router:Router) { }

  ngOnInit() {
  }

  submit()
  {
    this.service.create(this.model).subscribe({
      complete:()=>{
        console.log("completed");
        this.router.navigate(["/product"])
      }
    });
  }

}
