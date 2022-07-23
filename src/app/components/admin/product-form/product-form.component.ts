import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: any;
  product = {
    title: "",
    price: "",
    category: "",
    imageUrl: "",

  };
  id: any;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,


  ) {
    this.categories = this.categoryService.getAll()
      .subscribe((res: any) => this.categories = res);
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.show(this.id).subscribe(
        (product: any) => this.product = product
      );
    }
  }

  ngOnInit(): void {

  }
  save(product: any) {
    if (this.id) {
      this.productService.update(this.id, product)
        .subscribe()
    }
    else {
      this.productService.create(product).subscribe(
        res => console.log(res)
      );
    }

    setTimeout(() => {
      this.router.navigate(['/admin/products']);

    }, 1000)
  }
  delete() {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(this.id).subscribe();
      setTimeout(() => {
        this.router.navigate(['/admin/products']);

      }, 1000)
    } else return;
  }

}
