import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: "Home"}, children: [
  {path: 'signup', component: SignupComponent, data: {breadcrumb: "Sign In"}},
  {path: 'signin', component: SigninComponent, data: {breadcrumb: "Sign Up"}}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
