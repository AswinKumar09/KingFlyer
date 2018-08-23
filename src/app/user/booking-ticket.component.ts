import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.css']
})
export class BookingTicketComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  review(){
 this.router.navigate(["/bookingreview"]);
  }

}
