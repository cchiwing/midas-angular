import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';

const routes : Routes =  [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'signup', component: UserSignupComponent},
  {path:'login', component: UserLoginComponent},
  {path:'user', component: UserProfileComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


