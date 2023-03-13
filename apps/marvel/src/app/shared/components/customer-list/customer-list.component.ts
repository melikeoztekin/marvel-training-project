import { Component } from '@angular/core';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  customerList = [
    {
      id: 232,
      name: 'customer1',
      userName: 'cust1',
      email: 'cust1@gmail.com',
    },
    {
      id: 4534,
      name: 'customer2',
      userName: 'cust2',
      email: 'cust2@gmail.com',
    },
    {
      id: 34345,
      name: 'customer',
      userName: 'cust3',
      email: 'cust3@gmail.com',
    },
    {
      id: 34345,
      name: 'customer',
      userName: 'cust3',
      email: 'cust3@gmail.com',
    },
    {
      id: 34345,
      name: 'customer',
      userName: 'cust3',
      email: 'cust3@gmail.com',
    },
    {
      id: 34345,
      name: 'customer',
      userName: 'cust3',
      email: 'cust3@gmail.com',
    },
  ];
}
