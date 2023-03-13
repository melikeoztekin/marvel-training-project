import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss'],
})
export class AdminProductListComponent implements OnInit {
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
