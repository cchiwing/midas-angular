import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  hidepw = true;
  email = '';
  password = '';
  errorMessage = '';

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onSigninEmail() {
    console.log('login submit', this.email +' | '+ this.password);
    this.authService.signinWithEmail(this.email, this.password)
      .then(() => this.router.navigate(['home']))
      .catch(_error => {
        this.errorMessage = 'Please check your input.';
        console.log('there is a error', _error);
      });
  }

}
