import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './core/auth.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserProfileComponent,
    HomeComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
