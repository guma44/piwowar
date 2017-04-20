import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent, data: {breadcrumb: "Dashboard"}},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', data: {breadcrumb: "Recipes"}},
  {path: 'warehouse', loadChildren: './warehouse/warehouse.module#WarehouseModule', data: {breadcrumb: "Warehouse"}},
  {path: 'settings', loadChildren: './settings/settings.module#SettingsModule', data: {breadcrumb: "Settings"}},
  {path: 'brewlog', loadChildren: './brewlog/brewlog.module#BrewlogModule', data: {breadcrumb: "Brewlog"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
