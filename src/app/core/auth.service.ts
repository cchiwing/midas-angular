import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  private authState: any = null;

  constructor(private af: AngularFireAuth, private router: Router) { 
    this.af.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }
  
  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // get isUserAnonymousLoggedIn(): boolean {
  //   return this.authenticated ? this.authState.isAnonymous : false;
  // }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authenticated ? this.authState.email : '';
  }

  // Returns current user
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // get isUserEmailLoggedIn(): boolean {
  //   return (this.authenticated) && (!this.isUserAnonymousLoggedIn) ? true : false;
  // }

  signinWithEmail(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
      .then(user => { this.authState = user; })
      .catch( error => { console.log(error); throw error;});
  }

  signUpWithEmail(email: string, password:string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log('auth.services : signup sucess', user);
    })
    .catch(error => {
      console.log(error); throw error;
    });
  }

  signOut(): void {
    this.af.auth.signOut().then(() => {
      console.log('auth.services : sign-out sucess');
    });
  }

}
