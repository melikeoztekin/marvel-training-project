import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  users: UserModel[] = [];
  customers: UserModel[] = [];
  constructor(private _userService: UserService) {}
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._userService.getList().subscribe((response) => {
      this.users = response;
      console.log(this.users);
      this.filterCustomer();
    });
  }

  filterCustomer() {
    this.customers = this.users.filter((user) => {
      return user.userTypeId == 2;
    });
    console.log('customer', this.customers);
  }
}
