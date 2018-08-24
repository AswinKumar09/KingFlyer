import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlogginComponent } from '../userloggin.component';
import { UsersignupComponent } from '../usersignup.component';
import { UserdashboardComponent } from "./userdashboard.component";
import { BookingTicketComponent } from "./booking-ticket.component";
import { ManageAccountComponent } from "./manage-account.component";
import { AuthenticationGuard } from "../services/authentication.guard";
import { AllFlightsComponent } from "./all-flights.component";
import { BookingHistoryComponent } from "./booking-history.component";
import { TicketDetailsComponent } from "./ticket-details.component";
import { PaymentComponent } from "./payment.component";
import { PaymentStatusComponent } from "./payment-status.component";
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
  {path:"payment/:uid/:id/:email", component:PaymentComponent},
  {path:"allFlights/:id", component:AllFlightsComponent},
  {path:"manageaccount/:id", component:ManageAccountComponent},
  {path:"payment-status/:id", component:PaymentStatusComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
