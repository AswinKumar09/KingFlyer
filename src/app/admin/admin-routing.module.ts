import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { EditFlightsComponent } from './edit-flights.component';
import { CreateflightComponent } from './createflight.component';
import { AuthenticationGuard } from "../services/authentication.guard";

const routes: Routes = [
  // path: "admin",
  // canActivate:[AuthenticationGuard],
  // children: [
  
  
  {path:"editflight/:id",component:EditFlightsComponent},
  {path:"create/new",component:CreateflightComponent}
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
