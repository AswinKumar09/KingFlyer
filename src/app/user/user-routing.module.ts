import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlogginComponent } from './userloggin.component';
import { UsersignupComponent } from './usersignup.component';

const routes: Routes = [
  {path:"signin", component:UserlogginComponent}, 
  {path:"signup", component:UsersignupComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
