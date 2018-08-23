export class Flightmodel {

    flightNo:number;
    flightName:string;
    source:string;
    destination: string;
    departure:string;
    arrival:string;
    flightCatg:string;
    availDays:string[];
    date:String;

   constructor(flightNo, flightName, source, destination, departure, arrival, flightCatg, availDays)
   {
       this.flightNo = flightNo;
       this.flightName = flightName;
       this.source = source;
       this.destination = destination;
       this.departure = departure;
       this.arrival = arrival;
       this.flightCatg = flightCatg;
       this.availDays = availDays;
   }
}
