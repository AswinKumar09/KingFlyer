import { Component, OnInit } from '@angular/core';
import { bookingHistoryService } from "../services/bookingHistoryService";
import { Bookinghistorymodel } from "../model/BookingHistoryModel";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'app-upcoming-trips',
  templateUrl: './upcoming-trips.component.html',
  styleUrls: ['./upcoming-trips.component.css']
})
export class UpcomingTripsComponent implements OnInit {

  bookingmodels : Bookinghistorymodel[] = [];

  constructor(private service:bookingHistoryService, private router:Router, private route:ActivatedRoute) { }

  id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.loadAll();
    
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

}
