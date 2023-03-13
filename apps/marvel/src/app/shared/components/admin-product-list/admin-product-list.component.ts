import { Component } from '@angular/core';

@Component({
  selector: 'admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss'],
})
export class AdminProductListComponent {
  productList = [
    {
      phoneBrand: 'prodBrand',
      phoneModel: 'prodModel',
      price: '140',
      phoneImage: './assets/productImages/iphone11problack.jpg',
    },
    {
      phoneBrand: 'prodBrand',
      phoneModel: 'prodModel',
      price: '150',
      phoneImage: './assets/productImages/iphone12promaxblue.jpg',
    },
    {
      phoneBrand: 'prodBrand',
      phoneModel: 'prodModel',
      price: '160',
      phoneImage: './assets/productImages/samsungA71gray.jpg',
    },
    {
      phoneBrand: 'prodBrand',
      phoneModel: 'prodModel',
      price: '170',
      phoneImage: './assets/productImages/redminote11blue.jpg',
    },
    {
      phoneBrand: 'prodBrand',
      phoneModel: 'prodModel',
      price: '180',
      phoneImage: './assets/productImages/huaweinova9blue.jpg',
    },
    {
      phoneBrand: 'prodBrand',
      phoneModel: 'prodModel',
      price: '190',
      phoneImage: './assets/productImages/casperviaf30white.jpg',
    },
    {
      phoneBrand: 'prodBrand',
      phoneModel: 'prodModel',
      price: '200',
      phoneImage: './assets/productImages/realme5igreen.jpg',
    },
    {
      phoneBrand: 'prodBrand',
      phoneModel: 'prodModel',
      price: '210',
      phoneImage: './assets/productImages/generalmobile22red.jpg',
    },
  ];
}
