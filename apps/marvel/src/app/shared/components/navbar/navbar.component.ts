import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  GetUserNameState,
  GetUserStateModel,
} from '../../../store/navbar-info.state';
import { Reset } from '../../../actions/cart-summary.action';
import { ResetCustomer } from '../../../actions/select-customer.action';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() userName: string = 'firstName lastName';
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _store: Store
  ) {}

  logout() {
    this._authService.logout();
    this._router.navigateByUrl('/login');
    this._store.dispatch(new Reset());
    this._store.dispatch(new ResetCustomer());
  }

  @Select(GetUserNameState)
  getUserName!: Observable<GetUserStateModel>;
}
