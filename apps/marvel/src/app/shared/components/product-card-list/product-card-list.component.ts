import { Component } from '@angular/core';

@Component({
  selector: 'product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss'],
})
export class ProductCardListComponent {
  productList = [
    {
      phoneBrand: 'prodBrand1',
      phoneModel: 'prodModel1',
      price: '140',
      phoneImage: './assets/productImages/iphone11problack.jpg',
    },
    {
      phoneBrand: 'prodBrand2',
      phoneModel: 'prodModel2',
      price: '150',
      phoneImage: './assets/productImages/iphone12promaxblue.jpg',
    },
    {
      phoneBrand: 'prodBrand3',
      phoneModel: 'prodModel3',
      price: '160',
      phoneImage: './assets/productImages/samsungA71gray.jpg',
    },
    {
      phoneBrand: 'prodBrand4',
      phoneModel: 'prodModel4',
      price: '170',
      phoneImage: './assets/productImages/redminote11blue.jpg',
    },
    {
      phoneBrand: 'prodBrand5',
      phoneModel: 'prodModel5',
      price: '180',
      phoneImage: './assets/productImages/huaweinova9blue.jpg',
    },
    {
      phoneBrand: 'prodBrand6',
      phoneModel: 'prodModel6',
      price: '190',
      phoneImage: './assets/productImages/casperviaf30white.jpg',
    },
    {
      phoneBrand: 'prodBrand7',
      phoneModel: 'prodModel7',
      price: '200',
      phoneImage: './assets/productImages/realme5igreen.jpg',
    },
    {
      phoneBrand: 'prodBrand8',
      phoneModel: 'prodModel8',
      price: '210',
      phoneImage: './assets/productImages/generalmobile22red.jpg',
    },
  ];
}
