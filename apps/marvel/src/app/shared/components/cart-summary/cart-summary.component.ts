import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  CartSummaryState,
  CartSummaryStateModel,
} from '../../../store/cart-summary.state';
import { Observable } from 'rxjs';
import { RemoveCartItem } from '../../../actions/cart-summary.action';
import { OrderModel } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  @Select(CartSummaryState)
  cartSummaryStateModel!: Observable<CartSummaryStateModel>;
  orders: OrderModel[] = [];

  constructor(
    private _store: Store,
    private _orderService: OrderService,
    private _toastrService: ToastrService
  ) {
    // this.console();
  }
  removeCartItem(index: number) {
    this._store.dispatch(new RemoveCartItem(index));
    this._toastrService.info('The product has been deleted from the cart');
  }

  ngOnInit(): void {
    this.addOrder();
  }

  // console() {
  //   this.cartSummaryStateModel.subscribe((x) => {
  //     this.degisken = x;
  //     console.log(this.degisken);
  //   });
  // }

  addOrder() {
    this.cartSummaryStateModel.subscribe((x) => {
      x.cartSummary;
    });
  }
}
