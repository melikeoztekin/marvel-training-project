import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  CartSummaryState,
  CartSummaryStateModel,
} from '../../../store/cart-summary.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-detail-card-list',
  templateUrl: './product-detail-card-list.component.html',
  styleUrls: ['./product-detail-card-list.component.scss'],
})
export class ProductDetailCardListComponent {
  @Select(CartSummaryState)
  cartSummaryStateModel!: Observable<CartSummaryStateModel>;

  constructor(private _store: Store) {}
}
