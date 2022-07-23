import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url='http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  handleLoginError(error: any) {
    return error.error.error;
  }
  
  handleRegisterError(error: any) {
    return error.error.errors;
  }
  login(data: any) {
    return this.http.post(`${this.url}/login`, data);
  }
  signup(data:any){
    return this.http.post(`${this.url}/register`,data);
  }
  sendPasswordRequest(data:any){
    return this.http.post(`${this.url}/send-password-reset-link`,data);

  }
  changePassword(data:any){
    return this.http.post(`${this.url}/password-reset`,data);
  }
  getUsername(){
    return this.http.get(`${this.url}/username`);
  }
  
}
