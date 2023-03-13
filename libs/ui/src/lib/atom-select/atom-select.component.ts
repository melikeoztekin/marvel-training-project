import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'atom-select',
  templateUrl: './atom-select.component.html',
  styleUrls: ['./atom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AtomSelectComponent,
      multi: true,
    },
  ],
})
export class AtomSelectComponent implements OnInit {
  @Input() setDisabled: boolean = false;
  @Input() datas!: any[];
  @Input() textfield: any;
  @Input() value: any;
  @Input() valuefield: any;
  @Input() name: string;
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
  ngOnInit(): void {}
}
