import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlogginComponent } from '../userloggin.component';
import { UsersignupComponent } from '../usersignup.component';
import { UserdashboardComponent } from "./userdashboard.component";
import { BookingTicketComponent } from "./booking-ticket.component";
import { ManageAccountComponent } from "./manage-account.component";
import { AuthenticationGuard } from "../services/authentication.guard";
import { AllFlightsComponent } from "./all-flights.component";
<<<<<<< HEAD

=======
import { BookingHistoryComponent } from "./booking-history.component";
import { TicketDetailsComponent } from "./ticket-details.component";
>>>>>>> 33c683c5333703ca3bcd0cecdade7f0583896b4b
const routes: Routes = [{
  path: "user",
    canActivate:[AuthenticationGuard],
    children: [
  {path:"signin", component:UserlogginComponent}, 
  {path:"signup", component:UsersignupComponent},
  {path:"bookinghistory/:id", component:BookingHistoryComponent},
  {path:"bookingticket/:userid/:flightNo/:date", component:BookingTicketComponent},
  {path:"ticketdetails/:id", component:TicketDetailsComponent},
  {path:"dash/:id", component:UserdashboardComponent},
  {path:"allFlights/:id", component:AllFlightsComponent},
  {path:"manageaccount/:id", component:ManageAccountComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
