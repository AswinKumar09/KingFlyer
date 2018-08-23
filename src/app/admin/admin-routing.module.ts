import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from "../services/authentication.guard";
import { AdminDashboardComponent } from "./admin-dashboard.component";

const routes: Routes = [
  {
  path: "admin",
    canActivate:[AuthenticationGuard],
    children: [
      { path: "", component: AdminDashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
