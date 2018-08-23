import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin.component';
import { AdminactivityComponent } from './adminactivity.component';
import { CreateflightComponent } from './createflight.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminloginComponent, AdminactivityComponent, CreateflightComponent]
})
export class AdminModule { }
