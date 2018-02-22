import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from './core/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Midas Panel';

  constructor(public authService: AuthService) { }
  
  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  logout() {
    this.authService.signOut();
  }  
  
}
