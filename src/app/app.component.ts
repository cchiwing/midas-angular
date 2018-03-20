import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from './core/auth.service';

import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = '';
  showNavbar = true;

  constructor(
    public authService: AuthService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.title = event['title'];
        this.showNavbar = event['showNavbar'];
      });
  }
  
  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['']);
    });
  }  
}
