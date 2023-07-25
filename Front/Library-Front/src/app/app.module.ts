//Author: Martín Fernando Villa Naranjo

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/registerForm/registerForm.component';
import { BookingComponent } from './components/bookingForm/bookingForm.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginService } from './services/login.service';
import { BooksService } from './services/books.service';
import { UsersService } from './services/users.service';
import { BookingService } from './services/booking.service';
import { CountriesService } from './services/countries.service';
import { Login } from './models/Login';
import { Users } from './models/Users';
import { Booking } from './models/Booking';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BookingComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService,
    BooksService,
    UsersService,
    BookingService,
    CountriesService,
    Login,
    Users,
    Booking
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
