import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService:TokenService,

  ) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean |any {
    if(this.tokenService.logedIn()) return true;

    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
   
  }
  removereturnUrl(){
      localStorage.removeItem('returnUrl');
    
  }


}
