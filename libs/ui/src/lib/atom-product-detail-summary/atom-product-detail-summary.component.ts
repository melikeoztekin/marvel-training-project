import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-product-detail-summary',
  templateUrl: './atom-product-detail-summary.component.html',
  styleUrls: ['./atom-product-detail-summary.component.scss'],
})
export class AtomProductDetailSummaryComponent {
  @Input() phoneBrand: string = 'Phone Brand';
  @Input() phoneModel: string = 'Phone Model';
  @Input() price: string = '120';
  @Input() internalMemory: string = '64 GB';
  @Input() ramMemory: string = '4 GB';
  @Input() color: string = 'black';
}
