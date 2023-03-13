import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  controllerUrl = `${environment.apiUrl}/users`;
  constructor(private _httpClient: HttpClient) {}
  getList(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>(this.controllerUrl);
  }
}
