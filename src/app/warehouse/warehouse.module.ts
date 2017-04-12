import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse.component';

@NgModule({
  imports: [
    CommonModule,
    WarehouseRoutingModule
  ],
  declarations: [WarehouseComponent]
})
export class WarehouseModule { }
