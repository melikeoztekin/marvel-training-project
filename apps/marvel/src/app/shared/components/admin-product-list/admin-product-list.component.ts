import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { AddCartItem } from '../../../actions/cart-summary.action';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss'],
})
export class AdminProductListComponent implements OnInit {
  products: ProductModel[] = [];
  searchTerm: any;

  constructor(
    private _productService: ProductService,
    private _store: Store,
    private _toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._productService.getList().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }
  addCart(productModel: ProductModel) {
    this._store.dispatch(new AddCartItem(productModel));
    this._toastrService.success('Add product to cart successful');
  }
}
