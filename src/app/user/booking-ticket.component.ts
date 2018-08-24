import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { PassengerModel } from "../model/PassengerModel";
import { UserService } from "../services/UserService";
import { Bookinghistorymodel } from "../model/BookingHistoryModel";
import { bookingHistoryService } from "../services/bookingHistoryService";
import { FlightService } from "../services/flightService";
import { Flightmodel } from '../model/flightmodel';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.css']
})
export class BookingTicketComponent implements OnInit {

  constructor(public uService:UserService,
    public fService:FlightService,
    public route:ActivatedRoute,public bService:bookingHistoryService,public router:Router) { }
  passengers:PassengerModel[] = [];
  
    flightModel : Flightmodel;
  selectedModel:PassengerModel;
  bookingModel : Bookinghistorymodel;
  userid:string;
  flightNo:string;
  ngOnInit() {
    this.refresh();
    this.userid=this.route.snapshot.paramMap.get("userid");
    this.flightNo=this.route.snapshot.paramMap.get("flightNo");
    this.bookingModel = new Bookinghistorymodel("","","","","","","");
    this.fService.getDetails(this.flightNo).subscribe((response) => {
      this.flightModel = response as any;
  });
  }
  refresh() {
    this.selectedModel = new PassengerModel("",0,"");
  }
  addNew() {
    this.refresh();
  }
  create(event) {
    console.log("Create called", event.value);
    this.passengers.push(event.value);
    //this.passengers.push(event);
    //this.passengers.push(event.value);
    this.refresh();
  }
  delete() {
    this.passengers.pop();
  }
  review(){
 this.router.navigate(["/bookingreview"]);
  }
  submit() {
    this.bookingModel.flightNo=this.flightModel.flightNo;
    this.bookingModel.userNo=this.userid;
    this.bookingModel.departure=this.flightModel.source;
    this.bookingModel.arrival=this.flightModel.destination;
    this.bookingModel.passengers=this.passengers;
    console.log(this.bookingModel.passengers);
    this.bService.create(this.bookingModel).subscribe({
      complete:() => {
        console.log("completed");
        this.router.navigate(["/user/dash/"+this.userid]);
      }
    });
  }

}
