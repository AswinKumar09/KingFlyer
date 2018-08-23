import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserlogginComponent } from './userloggin.component';
import { SearchDetailComponent } from './search-detail.component';
import { HomedashComponent } from "./ui/homedash.component";
import { UsersignupComponent } from "./usersignup.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BookingTicketComponent } from './user/booking-ticket.component';
import { BookingReviewComponent } from './user/booking-review.component';
import { PaymentComponent } from './user/payment.component';
import { AdminloginComponent } from "./adminlogin.component";


const routes: Routes = [
  {path:"home", component:HomeComponent}, 
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"search",component:SearchDetailComponent},
  {path:"bookingticket",component:BookingTicketComponent},
  {path:"bookingreview",component:BookingReviewComponent},
  {path:"payment",component:PaymentComponent},
  {path:"signin",component:UserlogginComponent},
  {path:"signup",component:UsersignupComponent},
  {path:"adminlogin",component:AdminloginComponent}


];


@NgModule({
  imports: [HttpClientModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
