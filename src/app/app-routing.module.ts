import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { AuthGuard } from './core/auth.guard';

const routes : Routes =  [
  {path:'', redirectTo:'home', pathMatch:'full'}, 
  {path:'login', component: UserLoginComponent},
  {path:'signup', component: UserSignupComponent, canActivate: [AuthGuard] },
  {path:'user', component: UserProfileComponent, canActivate: [AuthGuard] },
  {path:'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path:'orderlist', component: OrderListComponent, canActivate: [AuthGuard] },
  
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


