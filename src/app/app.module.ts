import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PiwowarMaterialModule } from './piwowar-material.module';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { BrewlogModule } from './brewlog/brewlog.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PiwowarMaterialModule,
    RecipesModule,
    BrewlogModule,
    WarehouseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
