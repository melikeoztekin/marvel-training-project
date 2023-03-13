import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-detail-card-list',
  templateUrl: './product-detail-card-list.component.html',
  styleUrls: ['./product-detail-card-list.component.scss'],
})
export class ProductDetailCardListComponent {
  productDetailList = [
    {
      phoneBrand: 'prodBrand1',
      phoneModel: 'prodModel1',
      phoneImage: './assets/productImages/samsungA71gray.jpg',
      internalMemory: '64 GB',
      ramMemory: '8 GB',
      screenSize: '16 inc and up',
      cameraResolution: '2160p',
      warrantlyType: ' Turkey Guaranteed',
      color: 'gray',
    },
    {
      phoneBrand: 'prodBrand2',
      phoneModel: 'prodModel2',
      phoneImage: './assets/productImages/redminote11blue.jpg',
      internalMemory: '128 GB',
      ramMemory: '3 GB',
      screenSize: '15.5 inc',
      cameraResolution: '3600p',
      warrantlyType: ' Turkey Guaranteed',
      color: 'blue',
    },
    {
      phoneBrand: 'prodBrand3',
      phoneModel: 'prodModel3',
      phoneImage: './assets/productImages/iphone11problack.jpg',
      internalMemory: '64 GB',
      ramMemory: '4 GB',
      screenSize: '16.5s inc',
      cameraResolution: '3600p',
      warrantlyType: ' Turkey Guaranteed',
      color: 'black',
    },
  ];
}
