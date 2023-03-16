import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Select } from '@ngxs/store';
import {
  GetUserNameState,
  GetUserStateModel,
} from '../../store/navbar-info.state';

@Injectable({
  providedIn: 'root',
})
export class UserAdminGuard implements CanActivate {
  @Select(GetUserNameState)
  getUserName!: Observable<GetUserStateModel>;
  constructor(private _router: Router, private _authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var userType = 0;
    this.getUserName.subscribe((x) => {
      userType = x.getUserName.user.userTypeId;
    });
    console.log(userType);
    if (userType != 1) {
      this._router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
