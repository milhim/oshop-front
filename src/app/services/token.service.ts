import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/register',

  }
  constructor() { }
  handle(token: any) {
    localStorage.setItem('token', token);
  }

   getToken() {
    return localStorage.getItem('token');
  }
  remove() {
    localStorage.removeItem('token');
  }
  private payload(token: any) {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  }

  private isValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    } else {
      return false;
    }
  }
  logedIn() {
    return this.isValid();
  }

}
