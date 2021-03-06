import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';

import { CreateflightComponent } from './createflight.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [CreateflightComponent]
})
export class AdminModule { }
