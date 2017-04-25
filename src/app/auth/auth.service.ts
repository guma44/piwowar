import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

  constructor(private router: Router, public af: AngularFire) {}

  signUpUser(email: string, password: string){
    this.af.auth.createUser({email, password})
      .then(
        (user) => console.log(`Create User Success:`, user)
      )
      .catch(
        (error) => console.error(`Create User Failure:`, error)
      );
  }

  signInUser(email: string, password: string){
    this.af.auth.login({email, password})
      .then(
        (user) => {
          this.router.navigate(["/piwowar", "dashboard"]);
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  signOutUser() {
    this.af.auth.logout();
    this.router.navigate(["/"]);
  }
}
