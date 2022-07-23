import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
  public error = {
    email: null,
    password: null,
  };
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null,

  };
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,


  ) {
    route.queryParams.subscribe(parms => {
      this.form.resetToken = parms['token'];
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.changePassword(this.form).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }
  handleResponse(data: any) {
   
    this.router.navigateByUrl('/login');
  }
  handleError(error: any) {
    this.error = error.error.errors;
  }
}
