import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null,
  };
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.sendPasswordRequest(this.form)
      .subscribe(
        res => this.handleResponse(res)
      )
  }
  handleResponse(res: any) {
    console.log(res);
    this.form.email = null;
  }

}
