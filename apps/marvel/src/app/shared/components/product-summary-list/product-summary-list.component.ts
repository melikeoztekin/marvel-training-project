import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  CartSummaryState,
  CartSummaryStateModel,
} from '../../../store/cart-summary.state';
import { Observable } from 'rxjs';
import { RemoveCartItem } from '../../../actions/cart-summary.action';

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
}
