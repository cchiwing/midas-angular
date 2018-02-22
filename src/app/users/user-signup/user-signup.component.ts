import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service'

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: ''};

  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit() { 

  }

  onSignUp(data) {
    console.log('submited', data.value);
    if (this.validateForm(data.email, data.password)) {
      this.authService.signUpWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/home']);
          console.log('onSignUp - success', this.authService.currentUserId);
        }).catch(_error => {
          this.error = _error;
          this.router.navigate(['/']);
          console.log('onSignUp - error', _error);
        });
    }
  }

  validateForm(email:string , password: string): boolean {

    return true;
  }

}
