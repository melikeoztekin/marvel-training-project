import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { matchValidator } from '../../form-validations';
import { AuthService } from '../../../core/services/auth.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { UserTypeService } from '../../services/user-type.service';
import { UserTypeModel } from '../../models/userType.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userTypes: UserTypeModel[] = [];
  users: UserModel[] = [];
  registerForm!: FormGroup;
  @Input() min: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _toastrService: ToastrService,
    private _router: Router,
    private _userTypeService: UserTypeService,
    private _userService: UserService
  ) {}
  ngOnInit(): void {
    this.createRegisterform();
    this.getUserType();
    this.getUser();
  }

  getUser() {
    this._userService.getList().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });
  }
  getUserType() {
    this._userTypeService.getList().subscribe((response) => {
      this.userTypes = response;
      console.log(this.userTypes);
    });
  }

  idGenerator(min, max) {
    return Math.floor(Math.random() * (max - min));
  }

  createRegisterform() {
    this.registerForm = this._formBuilder.group({
      id: [this.idGenerator(1006, 9999)],
      userTypeId: [0, [Validators.required, Validators.min(1)]],
      email: ['', [Validators.email]],
      userName: ['', [Validators.required]],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z-çÇğĞıİöÖşŞüÜ ]{2,45}$'),
        ],
      ],
      password: [
        '',
        [Validators.minLength(4), Validators.pattern('^[a-zA-Z0-9]{4,18}$')],
      ],
      confirmPassword: ['', [matchValidator('password')]],
    });
  }

  onRegister() {
    if (!this.registerForm.invalid) {
      if (
        this.users.findIndex(
          (user) =>
            user.email == this.registerForm.value.email ||
            user.userName == this.registerForm.value.userName
        ) == -1
      ) {
        this.registerForm.controls['userTypeId'].setValue(
          parseInt(this.registerForm.value.userTypeId)
        );
        this._authService
          .register(this.registerForm.value as UserModel)
          .subscribe(
            (response) => {
              if (response != undefined) {
                console.log('Kayıt Başarılı');
                console.log(this.registerForm.value);
                this._toastrService.success(
                  'Registration successful',
                  'Success'
                );
                this._router.navigateByUrl('/login');
              }
            },
            (error) => {
              console.error(error);
            }
          );
      } else {
        console.error('Kullanıcı adı veya mail adresi kullanımda');
        this._toastrService.error(
          'Username or e-mail address system is registered. Try logging in.',
          'Error'
        );
      }
    } else {
      console.error('Kayıt Başarısız');
      this._toastrService.warning('Please fill in all fields.', 'Warning');
    }
  }
}
