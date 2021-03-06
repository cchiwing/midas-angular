import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { DataProductComponent } from './setting/data-product/data-product.component';
import { AuthGuard } from './core/auth.guard';
import { OrderFormComponent } from './order/order-form/order-form.component';

const routes : Routes =  [
  {path:'', redirectTo:'home', pathMatch:'full'}, 
  {path:'login', component: UserLoginComponent},
  {path:'signup', component: UserSignupComponent, canActivate: [AuthGuard], data: {title:"Signup", showNavbar: true} },
  {path:'user', component: UserProfileComponent, canActivate: [AuthGuard], data: {title:"User", showNavbar: true} },
  {path:'home', component: HomeComponent, canActivate: [AuthGuard], data: {title:"Home", showNavbar: true} },
  {path:'orderlist', component: OrderListComponent, canActivate: [AuthGuard], data: {title:"List", showNavbar: true} },
  {path:'orderform', component: OrderFormComponent, canActivate: [AuthGuard], data: {title:"New Order", showNavbar: false} },
  {path:'data-product', component: DataProductComponent, canActivate: [AuthGuard], data: {title:"Products", showNavbar: true} },

  
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


