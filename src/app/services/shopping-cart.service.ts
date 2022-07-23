import { AnimationStyleMetadata } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private url = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient,

  ) { }
  private create(product: any) {
    return this.http.post(`${this.url}/shopping-cart`, product);
  }
  private update(product: any, cartId: any) {
    return this.http.put(`${this.url}/shopping-cart`, [cartId, product]);
  }


  getOrCreateCart(product: any) {
    let cartId = localStorage.getItem('cartId');
    if (cartId) {
      this.update(product, cartId).subscribe();
      return;
    }

    this.create(product).subscribe((response: any) => {
      localStorage.setItem('cartId', response.id);
    });
  }
  
getProductsInCart(){
  let cartId = localStorage.getItem('cartId');
  return this.http.get(`${this.url}/shopping-cart-products/${cartId}`);
}
  getCart() {
    let cartId = localStorage.getItem('cartId');
    return this.http.get(`${this.url}/shopping-cart/${cartId}`);

  }
  getAll() {
    return this.http.get(`${this.url}/shopping-cart`);

  }
  remove(product: any) {
    let cartId = localStorage.getItem('cartId');
    return this.http.post(`${this.url}/shopping-cart/remove`, [cartId, product]);

  }

}
