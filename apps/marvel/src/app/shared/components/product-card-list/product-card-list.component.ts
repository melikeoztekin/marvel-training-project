import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss'],
})
export class ProductCardListComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this._productService.getList().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }
}
