import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlogginComponent } from './userloggin.component';
import { UsersignupComponent } from './usersignup.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserlogginComponent, UsersignupComponent]
})
export class UserModule { }
