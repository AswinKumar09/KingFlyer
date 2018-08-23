import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
<<<<<<< HEAD

=======
import { AdminloginComponent } from './adminlogin.component';
import { AdminactivityComponent } from './adminactivity.component';
import { CreateflightComponent } from './createflight.component';
>>>>>>> 2e45948b66517fddfae1c7b469b07387ae7a29cc

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
<<<<<<< HEAD
  declarations: []
=======
  declarations: [AdminloginComponent, AdminactivityComponent, CreateflightComponent]
>>>>>>> 2e45948b66517fddfae1c7b469b07387ae7a29cc
})
export class AdminModule { }
