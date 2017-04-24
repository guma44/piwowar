import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  signUpUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        (error) => console.log(error)
      );
  }

  signInUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(["/piwowar", "dashboard"]);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  signOutUser() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(["/"]);
  }

  getToken() {
    return firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
  }

  getUserName() {
  }

  isAuthenticated() {
    return this.token != null;
  }

}
