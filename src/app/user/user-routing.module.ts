import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlogginComponent } from '../userloggin.component';
import { UsersignupComponent } from '../usersignup.component';
import { UserdashboardComponent } from "./userdashboard.component";
import { BookingTicketComponent } from "./booking-ticket.component";
import { ManageAccountComponent } from "./manage-account.component";
import { AuthenticationGuard } from "../services/authentication.guard";
import { UpcomingTripsComponent } from "./upcoming-trips.component";

const routes: Routes = [{
  path: "user",
    canActivate:[AuthenticationGuard],
    children: [
  {path:"signin", component:UserlogginComponent}, 
  {path:"signup", component:UsersignupComponent}, 
  {path:"bookingticket", component:BookingTicketComponent},
  {path:"dash/:id", component:UserdashboardComponent},
  {path:"manageaccount/:id", component:ManageAccountComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
