import { Component, OnInit } from '@angular/core';
import { bookingHistoryService } from "../services/bookingHistoryService";
import { Bookinghistorymodel } from "../model/BookingHistoryModel";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Usermodel } from "../model/userModel";
import { UserService } from "../services/UserService";


@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookingmodels : Bookinghistorymodel[] = [];

  constructor(private service:bookingHistoryService, private router:Router, private route:ActivatedRoute,
  private uService:UserService) { }

  id:any;
  umodel:Usermodel;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.loadAll();
    this.uService.getDetails(this.id).subscribe((Response) => {
      this.umodel = Response as any;
    })
    
  }
  loadAll(){
    this.service.getDetails(this.id).subscribe((Response)=>{
    this.bookingmodels=Response as any[];
    });
    
  }
  getDetails(item:Bookinghistorymodel) {
    this.router.navigate(["/user/ticketdetails/"+item.bookingId]);
  }

  back() {
    this.router.navigate(["/user/dash/"+this.umodel.email]);
  }
}
