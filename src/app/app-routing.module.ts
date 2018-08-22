import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserlogginComponent } from './user/userloggin.component';
import { SearchDetailComponent } from './search-detail.component';

const routes: Routes = [

  {path:"home", component:HomeComponent}, 
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"search/:from/:to",component:SearchDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
