export interface OrderModel {
  id: number;
  userId: number;
  offers: OfferModel[];
  totalPrice: number;
}

export interface OfferModel {
  id: number;
  phoneBrand: string;
  phoneModel: string;
  price: number;
  screenSize: string;
  cameraResolution: string;
  warrantlyType: string;
  internalMemory: string;
  ramMemory: string;
  color: string;
}
