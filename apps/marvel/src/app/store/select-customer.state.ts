import { SelectCustomerModel } from '../shared/models/selectCustomer.model';
import { Action, State, StateContext } from '@ngxs/store';
import {
  ResetCustomer,
  SelectCustomer,
} from '../actions/select-customer.action';

const initialState = {
  selectCustomer: {} as SelectCustomerModel,
};
export class SelectCustomerStateModel {
  selectCustomer: SelectCustomerModel;
}

@State<SelectCustomerStateModel>({
  name: 'select_customer',
  defaults: initialState,
})
export class SelectCustomerState {
  @Action(SelectCustomer) selectCustomer(
    ctx: StateContext<SelectCustomerStateModel>,
    { payload }: SelectCustomer
  ) {
    const state = ctx.getState();
    ctx.patchState({
      selectCustomer: { customerId: payload.id, customer: payload },
    });
  }
  @Action(ResetCustomer) reset(ctx: StateContext<SelectCustomerStateModel>) {
    ctx.patchState({
      selectCustomer: {} as SelectCustomerModel,
    });
  }
}
