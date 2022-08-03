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




  }
  ngOnInit() {

    this.cartService.getCartItems().subscribe(cart => {
      this.cart = cart;
    });

    this.productService.getAll()
      .subscribe(
        products => {
          this.products = products;
          this.route.queryParamMap.subscribe(params => {
            this.category = params.get('category');

            this.applyFilter();
          });//we cant use snapshot here
        }
      );

  }
  applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter((p: any) => p.category === this.category) :
      this.products;
  }

}
