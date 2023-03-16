import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  CartSummaryState,
  CartSummaryStateModel,
} from '../../../store/cart-summary.state';
import { Observable } from 'rxjs';
import { RemoveCartItem, Reset } from '../../../actions/cart-summary.action';
import {
  SelectCustomerState,
  SelectCustomerStateModel,
} from '../../../store/select-customer.state';
import { ToastrService } from 'ngx-toastr';
import { ResetCustomer } from '../../../actions/select-customer.action';
import { CartSummaryModel } from '../../models/cartSummary.model';
import { Router } from '@angular/router';

@Component({
  selector: 'product-summary-list',
  templateUrl: './product-summary-list.component.html',
  styleUrls: ['./product-summary-list.component.scss'],
})
export class ProductSummaryListComponent {
  @Select(CartSummaryState)
  cartSummaryStateModel!: Observable<CartSummaryStateModel>;
  constructor(
    private _store: Store,
    private _toastrService: ToastrService,
    private _router: Router
  ) {}
  removeCartItem(index: number) {
    this._store.dispatch(new RemoveCartItem(index));
    this._toastrService.info('The product has been deleted from the cart');
  }
  @Select(SelectCustomerState)
  selectCustomerStateModel!: Observable<SelectCustomerStateModel>;

  isProductSummary() {
    var cartSummary: CartSummaryStateModel;
    var selectCustomer: SelectCustomerStateModel;
    this.selectCustomerStateModel.subscribe((x) => {
      selectCustomer = x;
    });
    this.cartSummaryStateModel.subscribe((user) => {
      cartSummary = user;
    });
    if (
      cartSummary.quantity != 0 &&
      selectCustomer.selectCustomer.customer != undefined
    ) {
      this._router.navigateByUrl('/product-details');
    }
  }
}
