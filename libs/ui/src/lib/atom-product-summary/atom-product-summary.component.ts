import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-product-summary',
  templateUrl: './atom-product-summary.component.html',
  styleUrls: ['./atom-product-summary.component.scss'],
})
export class AtomProductSummaryComponent {
  @Input() price: string = '120';
  @Input() phoneBrand: string = 'Phone Brand';
  @Input() phoneModel: string = 'Phone Model';
  @Input() quantity: string;

  @Output() onDelete = new EventEmitter<any>();
  onClick(event: Event) {
    this.onDelete.emit(event);
  }
}
