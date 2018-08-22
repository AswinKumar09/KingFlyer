import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserModule } from './user/user.module';
import {AdminModule} from './admin/admin.module';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer.component';
import { UserdashboardComponent } from './user/userdashboard.component';
import { SearchDetailComponent } from './search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserdashboardComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule, UserModule,AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
