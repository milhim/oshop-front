import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') product: any;
  @Input('shopping-cart') shoppingCart: any;
  
  // cart:any;
  constructor(
    private cartService: ShoppingCartService,

  ) {
    // this.cartService.getCart().subscribe(cart => {
    //   this.cart = cart;
    // });
  }

  addToCart() {
    this.cartService.getOrCreateCart(this.product);

  }
  removeFromCart() {
    this.cartService.remove(this.product).subscribe();
  }
  getQuantity() {
    if (!this.shoppingCart) return 0
    let item: any;
    this.shoppingCart.map((result: any) => {
      if (result.product_id === this.product.id) {
        item = result;
      }
    });
    return item ? item.quantity : 0;
  }
}
