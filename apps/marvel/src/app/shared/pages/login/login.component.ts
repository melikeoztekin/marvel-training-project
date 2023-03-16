import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LoginModel } from '../../models/login.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { SelectCustomer } from '../../../actions/select-customer.action';
import { Store } from '@ngxs/store';
import { GetUserName } from '../../../actions/navbar-info.action';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _localStorageService: LocalStorageService,
    private _toastrService: ToastrService,
    private _router: Router,
    private _store: Store
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onLogin() {
    if (!this.loginForm.invalid) {
      this._authService.login(this.loginForm.value as LoginModel).subscribe(
        (response) => {
          if (response != undefined) {
            console.log('Giriş Başarılı', 'userTpyeId :', response.userTypeId);
            this._localStorageService.add('token', response.access_token);
            if (response.userTypeId == 1) {
              this._toastrService.success('Login successful', 'Success');
              this._router.navigateByUrl('/admin-page');
              this._store.dispatch(new GetUserName(response));
            } else {
              this._toastrService.success('Login successful');
              this._router.navigateByUrl('/customer-store');
              this._store.dispatch(new SelectCustomer(response));
              this._store.dispatch(new GetUserName(response));
            }
          } else {
            console.log('Giriş Başarısız');
            this._toastrService.error(
              'User not found. Check your username  and password.',
              'Error'
            );
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('alanları doldurman lazım');
      this._toastrService.warning('Please fill in all fields.', 'Warning');
    }
  }
}
