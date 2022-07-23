import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null

  };
  public error = {
    email: null,
    name: null,
    password: null,
  };

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.signup(this.form)
      .subscribe(
        res => this.handleResponse(res),
        error => this.error = this.authService.handleRegisterError(error)
      );
  }
  handleResponse(data: any) {
    this.token.handle(data.authorisation.token);
    this.router.navigateByUrl('/profile')
  }

}
