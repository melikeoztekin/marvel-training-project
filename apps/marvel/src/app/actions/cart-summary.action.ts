import { ProductModel } from '../shared/models/product.model';

export class AddCartItem {
  static readonly type = '[cartItem] Add';
  constructor(public payload: ProductModel) {}
}
export class RemoveCartItem {
  static readonly type = '[cartItem] Remove';
  constructor(public payload: number) {}
}
export class Reset {
  static readonly type = '[resetCart] Reset';
}
export class UpdateCartItem {
  static readonly type = '[cartItem] Update';
  constructor(public payload: UpdateCartItemInputModel) {}
}

export class UpdateCartItemInputModel {
  product: ProductModel;
  index: number;
}
