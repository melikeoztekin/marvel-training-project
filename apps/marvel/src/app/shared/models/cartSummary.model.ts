import { ProductModel } from './product.model';

export interface CartSummaryModel {
  productId: number;
  quantity: number;
  totalPrice: number;
  product: ProductModel;
}
