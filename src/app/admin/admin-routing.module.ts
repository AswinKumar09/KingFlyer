import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

const routes: Routes = [
  {path:"adminsignup",component:AdminloginComponent},
  {path:"admindashboard",component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
