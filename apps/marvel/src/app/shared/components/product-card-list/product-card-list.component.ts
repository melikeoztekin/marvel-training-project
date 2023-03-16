import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngxs/store';
import { AddCartItem } from '../../../actions/cart-summary.action';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss'],
})
export class ProductCardListComponent implements OnInit {
  products: ProductModel[] = [];

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
