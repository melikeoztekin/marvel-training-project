import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-admin-product-item',
  templateUrl: './atom-admin-product-item.component.html',
  styleUrls: ['./atom-admin-product-item.component.scss'],
})
export class AtomAdminProductItemComponent {
  @Input() width: string = '100px';
  @Input() height: string = '100px';
  @Input() phoneImage: string = './assets/image-placeholder.jpg';
  @Input() price: string = '120';
  @Input() phoneBrand: string = 'Phone Brand';
  @Input() phoneModel: string = 'Phone Model';
}
