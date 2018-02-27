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
  error: { name: string, message: string } = { name: '', message: ''};

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onSigninEmail() {
    console.log('login submit', this.email +' | '+ this.password)
    if(this.validateForm(this.email, this.password)) {
      this.authService.signinWithEmail(this.email, this.password)
      .then(() => this.router.navigate(['/home']))
      .catch(_error => {
        this.error = _error;
        this.router.navigate(['/']);
      })
    }
  }

  validateForm(email:string , password: string): boolean {

    return true;
  }

}
