import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'warehouse', loadChildren: './warehouse/warehouse.module#WarehouseModule'},
  {path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
  {path: 'brewlog', loadChildren: './brewlog/brewlog.module#BrewlogModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
