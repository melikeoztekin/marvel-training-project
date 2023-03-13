import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'atom-input',
  templateUrl: './atom-input.component.html',
  styleUrls: ['./atom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AtomInputComponent,
      multi: true,
    },
  ],
})
export class AtomInputComponent implements OnInit, ControlValueAccessor {
  @Input() placeHolder!: string;
  @Input() requiredField: boolean = false;
  @Input() inputType: string = 'text';
  @Input() setDisabled: boolean = false;
  @Input() pattern!: string;

  @Input() iconShow!: string;
  @Input() iconHide!: string;
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() value: any;
  disabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};
  constructor() {}
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  markAsTouched(): void {
    this.onTouched();
  }

  get className(): string {
    if (
      this.form &&
      this.form.get(this.name).invalid &&
      this.form.get(this.name).touched &&
      this.form.get(this.name).dirty
    ) {
      return 'ng-invalid';
    }
    return '';
  }

  public passwordToggle: boolean = false;
  public passwordShow: boolean = false;
  ngOnInit(): void {
    this.passwordToggle = this.inputType == 'password';
  }
  passwordToggleEvent() {
    this.passwordShow = !this.passwordShow;
    if (this.passwordShow) {
      console.log('şifre görünüyor');
      this.inputType = 'text';
    } else {
      console.log('şifre görünmüyor');
      this.inputType = 'password';
    }
  }
}
