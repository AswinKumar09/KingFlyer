import { PassengerModel } from "./PassengerModel";

export class Bookinghistorymodel {

    bookingId:string;
    flightNo:number;
    flightName:string;
    userNo:number;
    departure:string;
    arrival: string;
    day:string;
    time:string;
    passengers:PassengerModel[];
    amount:number;

   constructor(bookingId,flightNo, flightName, userNo, departure, arrival, day, passengers,amount)
   {
       this.bookingId = bookingId;
       this.flightNo = flightNo;
       this.userNo = userNo;
       this.departure = departure;
       this.arrival = arrival;
       this.day = day;
       this.passengers = passengers;
       this.flightName = flightName;
       this.amount = amount;
   }
}
