import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-product-detail-summary',
  templateUrl: './atom-product-detail-summary.component.html',
  styleUrls: ['./atom-product-detail-summary.component.scss'],
})
export class AtomProductDetailSummaryComponent {
  @Input() phoneBrand: string = 'Phone Brand';
  @Input() phoneModel: string = 'Phone Model';
  @Input() price: string = '';
  @Input() internalMemory: string = '';
  @Input() ramMemory: string = '';
  @Input() color: string = '';

  @Output() onDelete = new EventEmitter<any>();
  onClick(event: Event) {
    this.onDelete.emit(event);
  }
}
