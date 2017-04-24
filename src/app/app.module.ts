import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PiwowarMaterialModule } from './piwowar-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { PiwowarModule } from './piwowar/piwowar.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PiwowarMaterialModule,
    HomeModule,
    PiwowarModule,
    AuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
