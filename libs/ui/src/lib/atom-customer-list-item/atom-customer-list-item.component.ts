import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-customer-list-item',
  templateUrl: './atom-customer-list-item.component.html',
  styleUrls: ['./atom-customer-list-item.component.scss'],
})
export class AtomCustomerListItemComponent {
  @Input() id: string = '22323';
  @Input() name: string = 'Customer Name';
}
