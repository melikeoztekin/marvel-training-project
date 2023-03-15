import { ProductModel } from '../shared/models/product.model';

export class AddCartItem {
  static readonly type = '[cartItem] Add';
  constructor(public payload: ProductModel) {}
}
export class RemoveCartItem {
  static readonly type = '[cartItem] Remove';
  constructor(public payload: number) {}
}
