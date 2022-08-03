import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url='http://localhost:8000/api';

  constructor(private http:HttpClient) { }
  storeOrder(order:any){
    
    return this.http.post(`${this.url}/order`,order);
  }
}
