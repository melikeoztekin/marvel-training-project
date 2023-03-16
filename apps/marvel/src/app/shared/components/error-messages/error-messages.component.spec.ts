import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagesComponent } from './error-messages.component';
import { Input } from '@angular/core';
const MOCK_ERROR_MESSAGES = {
  formSubmit: false,
  errors: undefined,
  min: false,
};
describe('ErrorMessagesComponent', () => {
  let component: ErrorMessagesComponent;
  let fixture: ComponentFixture<ErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorMessagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should formSubmit input decorator need default value', () => {
    const formSubmit = component.formSubmit;
    expect(formSubmit).toBe(MOCK_ERROR_MESSAGES.formSubmit);
  });
  it('should errors input decorator need default value', () => {
    const errors = component.errors;
    expect(errors).toBe(MOCK_ERROR_MESSAGES.errors);
  });
  it('should min input decorator need default value', () => {
    const min = component.min;
    expect(min).toBe(MOCK_ERROR_MESSAGES.min);
  });
});
