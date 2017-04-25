import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods, FIREBASE_PROVIDERS } from 'angularfire2';

import { PiwowarMaterialModule } from './piwowar-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { PiwowarModule } from './piwowar/piwowar.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCNXNSgfNDS2DfT9I_vQ6CENiu0wWYhYkk",
  authDomain: "piwowar-fe7a3.firebaseapp.com",
  databaseURL: "https://piwowar-fe7a3.firebaseio.com",
  projectId: "piwowar-fe7a3",
  storageBucket: "piwowar-fe7a3.appspot.com",
  messagingSenderId: "89209231210"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    AppRoutingModule,
    PiwowarMaterialModule,
    HomeModule,
    PiwowarModule,
    AuthModule,
  ],
  providers: [AuthService, FIREBASE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
