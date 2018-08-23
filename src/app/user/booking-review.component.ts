import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-booking-review',
  templateUrl: './booking-review.component.html',
  styleUrls: ['./booking-review.component.css']
})
export class BookingReviewComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  payment()
  {
    this.router.navigate(["/payment"]);
  }

}
