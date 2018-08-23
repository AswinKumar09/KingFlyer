import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { EditFlightsComponent } from './edit-flights.component';
import { CreateflightComponent } from './createflight.component';

const routes: Routes = [
  {path:"adminsignup",component:AdminloginComponent},
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"editflight/:id",component:EditFlightsComponent},
  {path:"create/new",component:CreateflightComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
