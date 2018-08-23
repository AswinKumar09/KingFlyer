import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PassengerModel } from "../model/PassengerModel";

@Component({
  selector: 'app-booking-ticket-child',
  templateUrl: './booking-ticket-child.component.html',
  styleUrls: ['./booking-ticket-child.component.css']
})
export class BookingTicketChildComponent implements OnInit {

  @Input() model : PassengerModel;
  @Output() createEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  saveData() { 
      this.createEvent.emit({value : this.model});
     
  }


}
