import { Component } from '@angular/core';
import { Flightmodel } from './model/flightmodel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KingAirways';

model:Flightmodel;

flightlist: Flightmodel[];

  constructor()
  {
    this.model=new Flightmodel("chennai","tirchy");
    // this.flightlist=[
    //    new Flightmodel("chennai","banglore"),
    //    new Flightmodel("banglore","chennai"),
    //    new Flightmodel("mumbai","chennai"),
    //    new Flightmodel("kolkata","pune")
    // ];
  }
}