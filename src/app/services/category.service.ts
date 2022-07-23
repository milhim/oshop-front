import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient,
    ) { }
    private url='http://localhost:8000/api';

  getAll(){
   return this.http.get(`${this.url}/categories`);
  }
}
