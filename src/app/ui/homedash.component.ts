import { Component, OnInit } from '@angular/core';
import { FlightService } from "../services/flightService";
import { Flightmodel } from "../model/flightmodel";

@Component({
  selector: 'app-homedash',
  templateUrl: './homedash.component.html',
  styleUrls: ['./homedash.component.css']
})
export class HomedashComponent implements OnInit {

  flightList : Flightmodel[];
  model : Flightmodel;
  ngOnInit() {
  }

  constructor() {
  }

  // loadAll() {
  //   this.service.getAll().subscribe((response) => {
  //     this.flightList = response as any[];
  //     console.log("Request returns : ", this.flightList);
  //   })
  // }

}
