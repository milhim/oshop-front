import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: any
  products: any;
  quantity: any;
  totalPrice: any = 0;
  constructor(
    private cartService: ShoppingCartService,
    private productService: ProductService,

  ) {

  }


  ngOnInit() {


    this.cartService.getAll().subscribe((cart: any) => {
      cart.map((result: any) => {
        if (result.id = localStorage.getItem('cartId')) {
          this.cart = result;
        }
      });
    });

    this.cartService.getCart().subscribe((cart: any) => {
      this.cart = cart;
    });
    this.cartService.getProductsInCart().subscribe((cart: any) => {
      this.products = cart.products;
    });


  }
  //get the quantity of each product in cart
  getQuantity(product: any) {
    let t: any;
    this.cart.map((item: any) => {
      if (product.id === item.product_id) {
        t = item;
      }
    });
    return t ? t.quantity : 0;
  }
  getPrice(product: any) {
    this.totalPrice += product.price * this.getQuantity(product);
    return product.price * this.getQuantity(product);
  }


}
