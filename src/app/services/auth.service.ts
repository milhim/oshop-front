import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  handleLoginError(error: any) {
    return error.error.error;
  }

  handleRegisterError(error: any) {
    return error.error.errors;
  }
  signin(user:User):Observable<any>{
    return this.http.post(`${this.url}/login`, user);
  }
  register(user:User):Observable<any>{
    return this.http.post(`${this.url}/register`, user);
  }
  sendPasswordRequest(data: any) {
    return this.http.post(`${this.url}/send-password-reset-link`, data);

  }
  changePassword(data: any) {
    return this.http.post(`${this.url}/password-reset`, data);
  }
  profileUser(): Observable<any> {
    return this.http.get(`${this.url}/profile`);
  }
 

}
