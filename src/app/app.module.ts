import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { TimeExpensesComponent } from './_routePageComponent/time-expenses/time-expenses.component';
import { NotificationComponent } from './_routePageComponent/notification/notification.component';
import { MyProfileComponent } from './_routePageComponent/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,        
        HomeComponent,
        LoginComponent,
        TimeExpensesComponent,
        NotificationComponent,
        MyProfileComponent,
        
        
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        FormsModule, 
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
