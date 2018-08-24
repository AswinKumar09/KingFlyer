import { PassengerModel } from "./PassengerModel";

export class Bookinghistorymodel {

    bookingId:string;
    flightNo:number;
    flightName:string;
    userNo:string;
    departure:string;
    arrival: string;
    day:string;
    passengers:PassengerModel[];

   constructor(bookingId,flightNo, flightName, userNo, departure, arrival, day, passengers)
   {
       this.bookingId = bookingId;
       this.flightNo = flightNo;
       this.userNo = userNo;
       this.departure = departure;
       this.arrival = arrival;
       this.day = day;
       this.passengers = passengers;
       this.flightName = flightName;
   }
}
