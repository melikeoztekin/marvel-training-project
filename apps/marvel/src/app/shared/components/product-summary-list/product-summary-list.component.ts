import { Component } from '@angular/core';

@Component({
  selector: 'product-summary-list',
  templateUrl: './product-summary-list.component.html',
  styleUrls: ['./product-summary-list.component.scss'],
})
export class ProductSummaryListComponent {
  cartSummaryProducts = [
    {
      phoneBrand: 'prodBrand1',
      phoneModel: 'prodModel1',
      price: '452',
    },
    {
      phoneBrand: 'prodBrand2',
      phoneModel: 'prodModel2',
      price: '444',
    },
    {
      phoneBrand: 'prodBrand3',
      phoneModel: 'prodModel3',
      price: '123',
    },
  ];
}
