import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlogginComponent } from './userloggin.component';
import { UsersignupComponent } from './usersignup.component';
import { UserdashboardComponent } from "./userdashboard.component";
import { ManageAccountComponent } from "./manage-account.component";

const routes: Routes = [
  {path:"signin", component:UserlogginComponent}, 
  {path:"signup", component:UsersignupComponent}, 
  {path:"userdashboard", component:UserdashboardComponent},
  {path:"manageaccount", component:ManageAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
