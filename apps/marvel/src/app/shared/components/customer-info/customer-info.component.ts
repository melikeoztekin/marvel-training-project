import { Component } from '@angular/core';

@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent {
  customers = [
    {
      id: 1524,
      name: 'customer1',
      userName: 'cust1',
      email: 'cust1@gmail.com',
    },
  ];
}
