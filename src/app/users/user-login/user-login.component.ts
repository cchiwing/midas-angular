import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: ''};

  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit() { }

  checkAuth(): boolean {
    if(this.authService.currentUser) {
      this.router.navigate(['/home']);
    }
    return this.authService.currentUser;
  }

  onSigninEmail() {
    console.log('login submit', this.email +' | '+ this.password)
    if(this.validateForm(this.email, this.password)) {
      this.authService.signinWithEmail(this.email, this.password)
      .then(() => this.router.navigate(['/user']))
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
