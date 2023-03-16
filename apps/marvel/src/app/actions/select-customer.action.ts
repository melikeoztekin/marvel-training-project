import { UserModel } from '../shared/models/user.model';

export class SelectCustomer {
  static readonly type = '[selectCustomer] Add';
  constructor(public payload: UserModel) {}
}
export class ResetCustomer {
  static readonly type = '[resetCustomer] Reset';
}
