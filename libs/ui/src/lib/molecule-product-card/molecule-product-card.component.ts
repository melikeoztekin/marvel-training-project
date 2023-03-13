import { Component, Input } from '@angular/core';

@Component({
  selector: 'molecule-product-card',
  templateUrl: './molecule-product-card.component.html',
  styleUrls: ['./molecule-product-card.component.scss'],
})
export class MoleculeProductCardComponent {
  @Input() width: string = '300px';
  @Input() height: string = '300px';
  @Input() phoneBrand: string = 'Phone Brand';
  @Input() phoneModel: string = 'Phone Model';
  @Input() phoneImage: string = './assets/image-placeholder.jpg';
  @Input() price: string = '120';
}
