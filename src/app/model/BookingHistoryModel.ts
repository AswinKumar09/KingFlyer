import { PassengerModel } from "./PassengerModel";

export class Bookinghistorymodel {

    bookingId:number;
    flightNo:number;
    userNo:number;
    departure:string;
    arrival: string;
    day:string;
    passengers:PassengerModel[];

   constructor(bookingId,flightNo, userNo, departure, arrival, day, passengers)
   {
       this.bookingId = bookingId;
       this.flightNo = flightNo;
       this.userNo = userNo;
       this.departure = departure;
       this.arrival = arrival;
       this.day = day;
       this.passengers = passengers;
   }
}
