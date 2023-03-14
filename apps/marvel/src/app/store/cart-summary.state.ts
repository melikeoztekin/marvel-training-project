import { CartSummaryModel } from '../shared/models/cartSummary.model';
import { ProductModel } from '../shared/models/product.model';
import { Action, State, StateContext } from '@ngxs/store';

// Actions
export class AddCartItem {
  static readonly type = '[cartItem] Add';
  constructor(public payload: ProductModel) {}
}
export class RemoveCartItem {
  static readonly type = '[cartItem] Remove';
  constructor(public payload: number) {}
}
// Sepetin başlangıç değerleri
const initialState = {
  cartSummary: [],
  total: 0,
};
//State modeli
export class CartSummaryStateModel {
  cartSummary: CartSummaryModel[];
  total: number;
}
// State
@State<CartSummaryStateModel>({
  name: 'cart_summary',
  defaults: initialState,
})
export class CartSummaryState {
  @Action(AddCartItem)
  addCartItem(
    ctx: StateContext<CartSummaryStateModel>,
    { payload }: AddCartItem
  ) {
    const state = ctx.getState();
    const controls = state.cartSummary;
    // const controlIndex = controls.findIndex((x) => x.productId == payload.id);
    // if (controlIndex != -1) {
    //   controls[controlIndex].quantity += 1;
    //   controls[controlIndex].totalPrice += payload.price;
    // } else {
    const newCartItem: CartSummaryModel = {
      productId: payload.id,
      quantity: 1,
      product: payload,
      totalPrice: payload.price,
    };
    controls.push(newCartItem);
    // }
    ctx.patchState({ cartSummary: controls, total: totalSum(controls) });
  }

  @Action(RemoveCartItem) removeCartItem(
    ctx: StateContext<CartSummaryStateModel>,
    { payload }: RemoveCartItem
  ) {
    const state = ctx.getState();
    const newCartItems = state.cartSummary.filter(
      (x, index) => index != payload
    );
    ctx.patchState({
      cartSummary: newCartItems,
      total: totalSum(newCartItems),
    });
  }
}
// sepet tutarını günceller
function totalSum(cartSummary: CartSummaryModel[]): number {
  let total = 0;
  cartSummary.forEach((x) => {
    total += x.totalPrice;
  });
  return total;
}
