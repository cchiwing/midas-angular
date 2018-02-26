import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public authService: AuthService, private router: Router) { }
  
  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['']);
    });
  }  
  
  // open() {
  //   this.sidenav.open();
  // }

  // close(reason: string) {
  //   this.sidenav.close();
  // }
}
