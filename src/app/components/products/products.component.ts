import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  filteredProducts: any;
  category: any;
  cart: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService,

  ) {


    this.productService.getAll()
      .subscribe(
        products => {
          this.products = products;
          route.queryParamMap.subscribe(params => {
            this.category = params.get('category');

            this.filteredProducts = (this.category) ?
              this.products.filter((p: any) => p.category === this.category) :
              this.products;
          });//we cant use snapshot here
        }
      );


  }
   ngOnInit() {

    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }


}
