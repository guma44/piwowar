import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PiwowarComponent } from './piwowar/piwowar.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/start'},
  {path: 'piwowar', component: PiwowarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
