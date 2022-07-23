import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories: any;
@Input('category') category:any;
  constructor(
    private categoryService: CategoryService,

  ) {
    this.categoryService.getAll()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
  }

}
