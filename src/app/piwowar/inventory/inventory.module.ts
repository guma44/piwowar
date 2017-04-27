import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { PiwowarMaterialModule } from '../../piwowar-material.module';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    PiwowarMaterialModule
  ],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
