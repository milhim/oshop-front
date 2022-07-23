import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: any;
  filteredProducts: any;
  p:number=1;
  constructor(
    private productService: ProductService,
  ) {
    this.productService.getAll().subscribe(
      products => this.filteredProducts = this.products = products,
    );
  }
  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter((product: any) => product.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }
  ngOnInit(): void {
  }

}
