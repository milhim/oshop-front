import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthenticationService } from './services/authentication.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'standard';
  isSignedIn!: boolean;
  constructor(
    private authState: AuthenticationService,
    public router: Router,
    public token: TokenService,
    private authService: AuthService,

  ) {

  }
  ngOnInit(): void {
    this.authState.authStatus.subscribe((val) => {
      this.isSignedIn = val;
    });
   
  }
 
  signOut() {
    this.authState.changeAuthStatus(false);
    this.token.remove();
    this.router.navigate(['login']);
    this.authService.removeIsAdmin();
  }
}
