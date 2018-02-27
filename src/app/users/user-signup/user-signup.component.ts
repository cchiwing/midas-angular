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

  hidepw = true;
  email = '';
  password = '';
  confirm = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: ''};

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() { 

  }

  onSignUp() {
    if (this.validateForm(this.email, this.password, this.confirm)) {
      console.log('submited', this.email +', '+ this.password +', '+ this.confirm);
      this.authService.signUpWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/home']);
          console.log('onSignUp - success', this.authService.currentUserId);
        }).catch(_error => {
          this.error = _error;
          console.log('onSignUp - error', _error);
        });
    }
  }

  validateForm(email:string , password: string, confirm: string): boolean {
    if(!!email && !!password){
      return true;
    }

    return false;
  }

}
