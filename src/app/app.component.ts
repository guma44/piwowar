import { Component, Input, OnInit } from '@angular/core';

import * as firebase from 'firebase';


@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCNXNSgfNDS2DfT9I_vQ6CENiu0wWYhYkk",
      authDomain: "piwowar-fe7a3.firebaseapp.com",
    });
  }
}
