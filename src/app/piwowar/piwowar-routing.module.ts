import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PiwowarComponent } from './piwowar.component';

const routes: Routes = [
  {path: '', component: PiwowarComponent, data: {breadcrumb: "Piwowar"},
   children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, data: {breadcrumb: "Dashboard"}},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', data: {breadcrumb: "Recipes"}},
    {path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule', data: {breadcrumb: "Inventory"}},
    {path: 'settings', loadChildren: './settings/settings.module#SettingsModule', data: {breadcrumb: "Settings"}},
    {path: 'brewlog', loadChildren: './brewlog/brewlog.module#BrewlogModule', data: {breadcrumb: "Brewlog"}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PiwowarRoutingModule { }
