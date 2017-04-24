import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PiwowarMaterialModule } from '../piwowar-material.module';
import { HomeComponent } from './home.component';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PiwowarMaterialModule
  ],
  declarations: [HomeComponent, StartComponent]
})
export class HomeModule { }
