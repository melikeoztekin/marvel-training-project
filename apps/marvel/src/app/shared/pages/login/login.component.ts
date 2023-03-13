import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LoginModel } from '../../models/login.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../core/services/local-storage.service';

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
    private _router: Router
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
            console.error(
              'Giriş Başarılı',
              'userTpyeId :',
              response.userTypeId
            );
            this._localStorageService.add('token', response.access_token);
            if (response.userTypeId == 1) {
              this._toastrService.success('Login successful', 'Success');
              this._router.navigateByUrl('/admin-page');
            } else {
              this._toastrService.success('Login successful');
              this._router.navigateByUrl('/customer-store');
            }
          } else {
            console.error('Giriş Başarısız');
            this._toastrService.error(
              'User not found. Check your username  and password.',
              'Error'
            );
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('alanları doldurman lazım');
      this._toastrService.warning('Please fill in all fields.', 'Warning');
    }
  }

  isButtonDisable: boolean = true;
  checkIsValid() {
    if (this.loginForm.invalid) {
      this.isButtonDisable = true;
    } else {
      this.isButtonDisable = false;
    }
  }
}