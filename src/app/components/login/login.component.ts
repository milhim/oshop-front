import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error = null;
  constructor(
    private authService: AuthService,
    private token: TokenService,
    private router: Router,
    private authStatusService:AuthenticationService,

  ) { }
  public form = {
    email: null,
    password: null,
  };
  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.login(this.form)
      .subscribe(res => {
        this.handleResponse(res);
      },
        error => {
          this.error = this.authService.handleLoginError(error);
        });
  }
  handleResponse(data: any) {
    this.token.handle(data.authorisation.token);
    this.authStatusService.changeAuthStatus(true);
    this.router.navigateByUrl('/profile')
  }

}
