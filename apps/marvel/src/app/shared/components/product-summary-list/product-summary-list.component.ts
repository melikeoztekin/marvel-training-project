import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  CartSummaryState,
  CartSummaryStateModel,
  RemoveCartItem,
} from '../../../store/cart-summary.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-summary-list',
  templateUrl: './product-summary-list.component.html',
  styleUrls: ['./product-summary-list.component.scss'],
})
export class ProductSummaryListComponent {
  @Select(CartSummaryState)
  cartSummaryStateModel!: Observable<CartSummaryStateModel>;
  constructor(private _store: Store) {}
  removeCartItem(index: number) {
    this._store.dispatch(new RemoveCartItem(index));
  }
  // cartSummaryProducts = [
  // {
  //   phoneBrand: 'prodBrand1',
  //   phoneModel: 'prodModel1',
  //   price: '452',
  // },
  // {
  //   phoneBrand: 'prodBrand2',
  //   phoneModel: 'prodModel2',
  //   price: '444',
  // },
  // {
  //   phoneBrand: 'prodBrand3',
  //   phoneModel: 'prodModel3',
  //   price: '123',
  // },
  // ];
}
