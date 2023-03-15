import { UserModel } from './user.model';

export interface SelectCustomerModel {
  customerId: number;
  customer: UserModel;
}
