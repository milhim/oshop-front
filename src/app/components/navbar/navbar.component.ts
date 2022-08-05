import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn = false;
  public username: any;
  public quantity: any;
  public isAdmin!:boolean

  constructor(
    private authStatusService: AuthenticationService,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private cartService: ShoppingCartService,


  ) {
    // this.authService.getUsername().subscribe(username => this.username = username);
  }

  ngOnInit(): void {

    this.authStatusService.authStatus.subscribe(
      value => this.loggedIn = value
    );
    this.cartService.getAll().subscribe((cart: any) => {
      cart.map((result: any) => {
        if (result.id = localStorage.getItem('cartId')) {
          this.quantity = result.quantity;
        }
      });
    });
    this.getUser();
    this.isAdmin=this.authService.isAdmin();

  }
  logout($event: MouseEvent) {

    $event.preventDefault();
    this.tokenService.remove();
    this.authStatusService.changeAuthStatus(false);
    this.router.navigateByUrl('/login')
  }
  getUser() {
    this.authService.profileUser().subscribe(res => {
      this.username = res;
    });
  }
}
