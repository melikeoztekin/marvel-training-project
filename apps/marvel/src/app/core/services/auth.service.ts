import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../shared/models/user.model';
import { filter, map, Observable } from 'rxjs';
import { LoginModel } from '../../shared/models/login.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  controllerUrl: string = `${environment.apiUrl}`;
  constructor(
    private _httpClient: HttpClient,
    private _jwtHelperService: JwtHelperService,
    private _localStorageService: LocalStorageService
  ) {}
  login(loginModel: LoginModel): Observable<UserModel> {
    return this._httpClient
      .get<UserModel[]>(this.controllerUrl + '/users')
      .pipe(
        filter((users) => !!users),
        map((users) =>
          users.find(
            (user) =>
              user.userName == loginModel.userName &&
              user.password == loginModel.password
          )
        )
      );
  }
  logout() {
    this._localStorageService.remove('token');
  }
  register(userModel: UserModel): Observable<UserModel> {
    return this._httpClient.post<UserModel>(this.controllerUrl + '/users', {
      ...userModel,
      id: 0,
      access_token: userModel.userName,
    });
  }

  get isAuthenticated(): boolean {
    let token = this._localStorageService.get('token');
    if (!token) return false;
    // if (this._jwtHelperService.isTokenExpired()) return false;
    return true;
  }
}
