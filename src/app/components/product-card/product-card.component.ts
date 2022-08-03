import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product: any;
  @Input('show-action') showAction: boolean = true;
  @Input('shopping-cart') shoppingCart: any;
  constructor(
    private cartService: ShoppingCartService,

  ) {
  }

  addToCart() {
    this.cartService.getOrCreateCart(this.product);

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