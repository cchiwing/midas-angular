import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private _user: any = null;

  constructor(public af: AngularFireAuth) { 
    af.authState.subscribe(user => this._user = user);
  }
  
  // Returns true if user is logged in
  get authenticated(): boolean {
    return this._user !== null;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this._user.uid : '';
  }

  get currentUserEmail(): string {
    return this.authenticated ? this._user.email : '';
  }

  get currentUserEmailName(): string {
    return this.authenticated ? (this._user.email).split('@')[0] : '';
  }

  // Returns current user
  get currentUser(): any {
    return this.authenticated ? this._user : null;
  }

  signinWithEmail(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
      .then(user => { this._user = user; })
      .catch( error => { throw error;});
  }

  signUpWithEmail(email: string, password:string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log('auth.services : signup sucess', user);
    })
    .catch(error => {
      throw error;
    });
  }

  signOut() {
    return this.af.auth.signOut().then(() => {
      console.log('auth.services : sign-out sucess');
    });
  }

}
