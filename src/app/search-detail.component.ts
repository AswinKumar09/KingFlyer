import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Flightmodel } from './model/flightmodel';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  model: Flightmodel;

  constructor(private router:Router,private route: ActivatedRoute,) {
   }


  ngOnInit()
 {
  let from=this.route.snapshot.paramMap.get("from");
  let to=this.route.snapshot.paramMap.get("to");
  let dt=this.route.snapshot.paramMap.get("dt");
  //let date=this.route.snapshot.paramMap.get("date");
  console.log(`From: ${from}`);
  console.log(`To: ${to}`);
 // console.log(`Date: ${date}`);

  //this.model=this.service.getDetails(parseInt(id));
  // this.service.getDetails(from).subscribe((response) =>{
  //   this.model=response;
  }

  book() {
   
    this.router.navigate(["/bookingticket"]);
  }


}
