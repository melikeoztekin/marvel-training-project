import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-product-detail-card',
  templateUrl: './atom-product-detail-card.component.html',
  styleUrls: ['./atom-product-detail-card.component.scss'],
})
export class AtomProductDetailCardComponent {
  colors = ['black', 'white', 'gray', 'blue', 'green', 'red'];
  internalMemories = ['32 GB', '64 GB', '128 GB', '256 GB'];
  ramMemories = ['3 GB', '4 GB', '6 GB', '8 GB', '12 GB'];

  @Input() phoneBrand: string = 'prodBrand';
  @Input() phoneModel: string = 'prodModel';
  @Input() phoneImage: string = './assets/image-placeholder.jpg';
  @Input() screenSize: string = 'X inc and up';
  @Input() cameraResolution: string = 'X-Y MP';
  @Input() warrantlyType: string = 'Turkey Guaranteed';
  @Input() color: string = '';
  @Input() internalMemory: string = '';
  @Input() ramMemory: string = '';
}
