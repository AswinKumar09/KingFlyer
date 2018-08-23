import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserModule } from './user/user.module';
import { AdminModule} from './admin/admin.module';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer.component';
import { UserdashboardComponent } from './user/userdashboard.component';
import { SearchDetailComponent } from './search-detail.component';
import { HomedashComponent } from './ui/homedash.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { EditFlightsComponent } from './admin/edit-flights.component';
import { UserdashHeaderComponent } from './ui/userdash-header.component';
import { BookingHistoryComponent } from './user/booking-history.component';
import { UpcomingTripsComponent } from './user/upcoming-trips.component';
import { ManageAccountComponent } from './user/manage-account.component';
import { BookingTicketComponent } from './user/booking-ticket.component';
import { BookingReviewComponent } from './user/booking-review.component';
import { PaymentComponent } from './user/payment.component';

const routes: Routes = [
  {path:"home", component:HomeComponent}, 
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"search/:from/:to/:dt",component:SearchDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserdashboardComponent,
    SearchDetailComponent,
    HomedashComponent,
    AdminDashboardComponent,
    EditFlightsComponent,
    UserdashHeaderComponent,
    BookingHistoryComponent,
    UpcomingTripsComponent,
    ManageAccountComponent,
    BookingTicketComponent,
    BookingReviewComponent,
    PaymentComponent
  ],
  imports: [
    FormsModule,HttpClientModule,
    BrowserModule, UserModule,AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
