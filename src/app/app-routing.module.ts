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
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { UpcomingTripsComponent } from "./user/upcoming-trips.component";
import { BookingHistoryComponent } from "./user/booking-history.component";
import { ResetPasswordComponent } from "./reset-password.component";
import { bookingHistoryService } from './services/bookingHistoryService';
import { ResetComponent } from "./reset.component";

const routes: Routes = [
  {path:"home", component:HomeComponent}, 
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"search/:from/:to/:date",component:SearchDetailComponent},
  {path:"signup",component:UsersignupComponent},
  {path:"reset-password",component:ResetPasswordComponent},
  {path:"signin",component:UserlogginComponent},
  {path:"signin/:fNo/:date",component:UserlogginComponent},
  {path:"bookingreview",component:BookingReviewComponent},
  {path:"user/upcomingtrips/:id",component:UpcomingTripsComponent},
  {path:"reset/:id",component:ResetComponent},
  {path:"user/bookinghistory/:id",component:bookingHistoryService},
  {path:"payment",component:PaymentComponent},
  {path:"signin",component:UserlogginComponent},
  {path:"signup",component:UsersignupComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"admindashboard",component:AdminDashboardComponent},
];

@NgModule({
  imports: [HttpClientModule,FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
