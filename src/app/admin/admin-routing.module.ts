import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin.component';
<<<<<<< HEAD
import { AdminDashboardComponent } from './admin-dashboard.component';
import { EditFlightsComponent } from './edit-flights.component';
import { CreateflightComponent } from './createflight.component';

const routes: Routes = [
  {path:"adminsignup",component:AdminloginComponent},
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"editflight/:id",component:EditFlightsComponent},
  {path:"create/new",component:CreateflightComponent}

=======
import { AuthenticationGuard } from "../services/authentication.guard";
import { AdminDashboardComponent } from "./admin-dashboard.component";

const routes: Routes = [
  {
  path: "admin",
    canActivate:[AuthenticationGuard],
    children: [
      { path: "", component: AdminDashboardComponent},
  {path:"adminsignup",component:AdminloginComponent}
    ]
  }
>>>>>>> bc8355a135161ea7747d4ec81c1a9228192aa068
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
