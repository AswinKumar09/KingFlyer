import { Component, OnInit } from '@angular/core';
import { bookingHistoryService } from "../services/bookingHistoryService";
import { Bookinghistorymodel } from "../model/BookingHistoryModel";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Usermodel } from "../model/userModel";
import { UserService } from "../services/UserService";


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  bookingmodel : Bookinghistorymodel;
  umodel : Usermodel;
  constructor(private service:bookingHistoryService, private router:Router, private route:ActivatedRoute,
  private uservice:UserService) { }

  id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.bookingmodel = new Bookinghistorymodel("","","","","","","","","");
    this.loadAll();
  }
  loadAll(){
    this.service.getById(this.id).subscribe((Response)=>{
    this.bookingmodel=Response as any;
    });
  }
}
