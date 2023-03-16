import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  SelectCustomerState,
  SelectCustomerStateModel,
} from '../../../store/select-customer.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent {
  @Select(SelectCustomerState)
  selectCustomerStateModel!: Observable<SelectCustomerStateModel>;
  constructor(private _store: Store) {}
}
