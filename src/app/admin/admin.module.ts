import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';

import { AdminactivityComponent } from './adminactivity.component';
import { CreateflightComponent } from './createflight.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [AdminactivityComponent, CreateflightComponent]
})
export class AdminModule { }
