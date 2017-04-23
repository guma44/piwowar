import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrewlogRoutingModule } from './brewlog-routing.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchEditComponent } from './batch-edit/batch-edit.component';
import { BrewlogComponent } from './brewlog.component';

@NgModule({
  imports: [
    CommonModule,
    BrewlogRoutingModule
  ],
  declarations: [BatchListComponent, BatchDetailsComponent, BatchEditComponent, BrewlogComponent]
})
export class BrewlogModule { }
