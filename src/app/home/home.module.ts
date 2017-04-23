import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PiwowarMaterialModule } from '../piwowar-material.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PiwowarMaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
