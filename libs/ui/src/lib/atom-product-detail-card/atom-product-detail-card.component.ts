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

  colors2 = [
    { id: 1, color: 'black' },
    { id: 2, color: 'white' },
    { id: 3, color: 'gray' },
    { id: 4, color: 'blue' },
    { id: 5, color: 'green' },
    { id: 6, color: 'red' },
  ];
  internalMemories2 = [
    { id: 1, internalMemory: '32 GB' },
    { id: 2, internalMemory: '64 GB' },
    { id: 3, internalMemory: '128 GB' },
    { id: 4, internalMemory: '256 GB' },
  ];
  ramMemories2 = [
    { id: 1, ramMemory: '3 GB' },
    { id: 2, ramMemory: '4 GB' },
    { id: 3, ramMemory: '6 GB' },
    { id: 4, ramMemory: '8 GB' },
    { id: 5, ramMemory: '12 GB' },
  ];

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
