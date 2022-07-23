import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url='http://localhost:8000/api';

  constructor(private http:HttpClient) { }
  create(data:any){
    return this.http.post(`${this.url}/products`,data);
  }
  getAll(){
    return this.http.get(`${this.url}/products`);
  }
  show(id:any){
    return this.http.get(`${this.url}/products/${id}`);
  }
  update(id:any,product:any){
    return this.http.put(`${this.url}/products/${id}`,product);

  }
  delete(id:any){
    return this.http.delete(`${this.url}/products/${id}`);

  }
}
