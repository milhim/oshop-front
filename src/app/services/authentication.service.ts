import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userState = new BehaviorSubject<boolean>(this.token.logedIn()!);
  authStatus = this.userState.asObservable();

  constructor(private token: TokenService) { }
  changeAuthStatus(value: boolean) {
    this.userState.next(value);
  }
}
