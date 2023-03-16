import { SelectCustomerStateModel } from '../../store/select-customer.state';
import { CartSummaryStateModel } from '../../store/cart-summary.state';

export interface OrderStateModel {
  id: number;
  customerInfo: SelectCustomerStateModel;
  ordersInfo: CartSummaryStateModel[];
}
