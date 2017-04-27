import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSidenavModule, MdToolbarModule, MdListModule, MdIconModule,
         MdButtonModule, MdInputModule, MdCardModule, MdTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdTabsModule
  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdTabsModule
  ],
})
export class PiwowarMaterialModule { }
