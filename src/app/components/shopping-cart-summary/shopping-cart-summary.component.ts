import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {
  cart: any;
  items: any;
  product:any
  constructor(
    private cartService: ShoppingCartService,
    private productService: ProductService,
  ) {
    this.cartService.getCart().subscribe(cart => this.cart = cart);
    this.cartService.getCartItems().subscribe((items) => {
      this.items = items
    });
  }


}
