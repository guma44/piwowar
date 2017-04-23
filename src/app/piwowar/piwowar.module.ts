import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiwowarRoutingModule } from './piwowar-routing.module';
import { PiwowarMaterialModule } from '../piwowar-material.module';
import { RecipesModule } from './recipes/recipes.module';
import { BrewlogModule } from './brewlog/brewlog.module';
import { InventoryModule } from './inventory/inventory.module';
import { SettingsModule } from './settings/settings.module';
import { PiwowarComponent } from './piwowar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    PiwowarRoutingModule,
    PiwowarMaterialModule,
    RecipesModule,
    BrewlogModule,
    InventoryModule,
    SettingsModule
  ],
  declarations: [PiwowarComponent, DashboardComponent]
})
export class PiwowarModule { }
