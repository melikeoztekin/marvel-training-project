import { Component } from '@angular/core';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent {
  cartSummaryProducts = [
    {
      phoneBrand: 'prodBrand1',
      phoneModel: 'prodModel1',
      price: '452',
      internalMemory: '64 GB',
      ramMemory: '4 GB',
      color: 'red',
    },
    {
      phoneBrand: 'prodBrand2',
      phoneModel: 'prodModel2',
      price: '444',
      internalMemory: '128 GB',
      ramMemory: '6 GB',
      color: 'black',
    },
    {
      phoneBrand: 'prodBrand3',
      phoneModel: 'prodModel3',
      price: '123',
      internalMemory: '256 GB',
      ramMemory: '4 GB',
      color: 'blue',
    },
  ];
}
