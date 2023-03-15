import { CartSummaryModel } from '../shared/models/cartSummary.model';
import { Action, State, StateContext } from '@ngxs/store';
import { AddCartItem, RemoveCartItem } from '../actions/cart-summary.action';

// Sepetin başlangıç değerleri
const initialState = {
  cartSummary: [],
  total: 0,
  quantity: 0,
};
//State modeli
export class CartSummaryStateModel {
  cartSummary: CartSummaryModel[];
  total: number;
  quantity: number;
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
    const quantity = state.quantity;
    const controlIndex = controls.findIndex((x) => x.productId == payload.id);
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
    ctx.patchState({
      cartSummary: controls,
      total: totalSum(controls),
      quantity: quantity + 1,
    });
  }

  @Action(RemoveCartItem) removeCartItem(
    ctx: StateContext<CartSummaryStateModel>,
    { payload }: RemoveCartItem
  ) {
    const state = ctx.getState();
    const quantity = state.quantity;
    const newCartItems = state.cartSummary.filter(
      (x, index) => index != payload
    );
    ctx.patchState({
      cartSummary: newCartItems,
      total: totalSum(newCartItems),
      quantity: quantity - 1,
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
