import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  GetUserNameState,
  GetUserStateModel,
} from '../../../store/navbar-info.state';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userName = 'firstName lastName';
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _store: Store
  ) {}

  logout() {
    this._authService.logout();
    this._router.navigateByUrl('/login');
  }
  @Select(GetUserNameState)
  getUserName!: Observable<GetUserStateModel>;
}
