import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  CartSummaryState,
  CartSummaryStateModel,
} from '../../../store/cart-summary.state';
import { Observable } from 'rxjs';
import { RemoveCartItem, Reset } from '../../../actions/cart-summary.action';
import { OrderService } from '../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import {
  SelectCustomerState,
  SelectCustomerStateModel,
} from '../../../store/select-customer.state';
import { Router } from '@angular/router';
import {
  GetUserNameState,
  GetUserStateModel,
} from '../../../store/navbar-info.state';
import { HttpClient } from '@angular/common/http';
import { OrderStateModel } from '../../models/orderState.model';
import { OrderModel } from '../../models/order.model';
import { ResetCustomer } from '../../../actions/select-customer.action';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent {
  @Select(CartSummaryState)
  cartSummaryStateModel!: Observable<CartSummaryStateModel>;
  @Select(SelectCustomerState)
  selectCustomerStateModel!: Observable<SelectCustomerStateModel>;
  @Select(GetUserNameState)
  getUserName!: Observable<GetUserStateModel>;
  userId: number = 0;
  constructor(
    private _store: Store,
    private _orderService: OrderService,
    private _toastrService: ToastrService,
    private _router: Router,
    private _httpClient: HttpClient
  ) {
    this.selectCustomerStateModel.subscribe((x) => {
      this.userId = x.selectCustomer.customerId;
    });
  }

  removeCartItem(index: number) {
    this._store.dispatch(new RemoveCartItem(index));
    this._toastrService.info('The product has been deleted from the cart');
  }

  async createOrder() {
    var orderList: OrderModel[] = [];
    this.cartSummaryStateModel.subscribe((x) => {
      x.cartSummary.forEach((element) => {
        orderList.push({
          id: 0,
          userId: this.userId,
          productId: element.productId,
          screenSize: element.product.screenSize,
          color: element.product.color,
          cameraResolution: element.product.cameraResolution,
          totalPrice: element.totalPrice,
          internalMemory: element.product.internalMemory,
          phoneBrand: element.product.phoneBrand,
          phoneModel: element.product.phoneModel,
          price: element.product.price,
          ramMemory: element.product.ramMemory,
          warrantlyType: element.product.warrantlyType,
        });
      });
    });
    for (const model of orderList) {
      await this._orderService
        .addOrder(model as OrderModel)
        .subscribe((response) => {
          console.error(response);
        });
    }
    this._toastrService.success('Successfuly');
    this.getUserName.subscribe((user) => {
      if (user.getUserName.user.userTypeId == 1) {
        this._store.dispatch(new Reset());
        this._store.dispatch(new ResetCustomer());
        this._router.navigateByUrl('/admin-page');
      } else {
        this._store.dispatch(new Reset());
        this._router.navigateByUrl('/customer-store');
      }
    });
  }
}

// (this.order = {
//   ...this.order,
//   id: Math.floor(Math.random() * 100000),
//   ordersInfo: [],
//   customerInfo: [],
// })

// this.selectCustomerStateModel.subscribe((x) => {
//   x.selectCustomer;
//   console.log(x.selectCustomer);
//   this.cartSummaryStateModel.subscribe((x) => {
//     x.cartSummary;
//     console.log(x.cartSummary);
//   });
// });
// this._orderService.addOrder(OrderStateModel).subscribe((response) => {
//   response.id;
//   console.log('orderstates');
// });
