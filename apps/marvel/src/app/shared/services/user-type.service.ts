import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UserTypeModel } from '../models/userType.model';

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  controllerUrl = `${environment.apiUrl}/userTypes`;
  constructor(private _httpClient: HttpClient) {}
  getList(): Observable<UserTypeModel[]> {
    return this._httpClient.get<UserTypeModel[]>(this.controllerUrl);
  }
}
