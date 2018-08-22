import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserModule } from './user/user.module';
import {AdminModule} from './admin/admin.module';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer.component';
import { UserdashboardComponent } from './user/userdashboard.component';
import { SearchDetailComponent } from './search-detail.component';
import { HomedashComponent } from './ui/homedash.component';

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
    HomedashComponent
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
