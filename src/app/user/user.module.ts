import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { UserRoutingModule } from './user-routing.module';
import { UserlogginComponent } from '../userloggin.component';
import { UsersignupComponent } from '../usersignup.component';

@NgModule({
  imports: [
    
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [UserlogginComponent, UsersignupComponent]
})
export class UserModule { }
