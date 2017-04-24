import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: './home/home.module#HomeModule', data: {breadcrumb: "Home"}},
  {path: 'piwowar', loadChildren: './piwowar/piwowar.module#PiwowarModule', data: {breadcrumb: "Piwowar"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
