import { Component, OnInit } from '@angular/core';
import { bookingHistoryService } from "../services/bookingHistoryService";
import { Bookinghistorymodel } from "../model/BookingHistoryModel";
import { Router } from "@angular/router";
import { UserService } from "../services/UserService";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Usermodel } from "../model/userModel";


@Component({
  selector: 'app-upcoming-trips',
  templateUrl: './upcoming-trips.component.html',
  styleUrls: ['./upcoming-trips.component.css']
})
export class UpcomingTripsComponent implements OnInit {

  bookingmodels : Bookinghistorymodel[] = [];
  umodel : Usermodel;

  constructor(private service:bookingHistoryService, private router:Router, private route:ActivatedRoute,private uService:UserService) { }

  id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.loadAll();
    this.uService.getDetails(this.id).subscribe((Response) => {
      this.umodel = Response as any;
    })
  }
  loadAll(){
    this.service.getUpcoming(this.id).subscribe((Response)=>{
    this.bookingmodels=Response as any[];
    });
    

  }
  getDetails(item:Bookinghistorymodel) {
    this.router.navigate(["/user/ticketdetails/"+item.bookingId]);
  }

  delete(item:Bookinghistorymodel) {
    this.service.remove(item.bookingId).subscribe({
      complete:() => {
        this.loadAll();
      }
    });
  }
  back() {
    this.router.navigate(["/user/dash/"+this.umodel.email]);
  }

}
