import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSidenavModule, MdToolbarModule, MdListModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule
  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule
  ],
})
export class PiwowarMaterialModule { }
