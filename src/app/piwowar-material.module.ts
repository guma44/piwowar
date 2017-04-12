import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSidenavModule, MdToolbarModule, MdListModule, MdIconModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule
  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule
  ],
})
export class PiwowarMaterialModule { }
