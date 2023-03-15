import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  CartSummaryState,
  CartSummaryStateModel,
} from '../../../store/cart-summary.state';
import { Observable } from 'rxjs';
import { RemoveCartItem } from '../../../actions/cart-summary.action';
import { CartSummaryModel } from '../../models/cartSummary.model';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  @Select(CartSummaryState)
  cartSummaryStateModel!: Observable<CartSummaryStateModel>;
  degisken: CartSummaryStateModel;

  constructor(private _store: Store) {
    this.console();
  }
  removeCartItem(index: number) {
    this._store.dispatch(new RemoveCartItem(index));
  }

  ngOnInit(): void {}

  console() {
    this.cartSummaryStateModel.subscribe((x) => {
      this.degisken = x;
      console.log(this.degisken);
    });
  }
}
