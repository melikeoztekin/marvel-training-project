import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButtonComponent } from './atom-button.component';
import { EventEmitter } from '@angular/core';

const MOCK_ATOM_BUTTON = {
  buttonColor: 'bg-blue',
  buttonType: undefined,
  isDisabled: false,
  buttonText: undefined,
  icon: undefined,
};

describe('ButtonComponent', () => {
  let component: AtomButtonComponent;
  let fixture: ComponentFixture<AtomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should buttonColor input decorator need default value', () => {
    const buttonColor = component.buttonColor;
    expect(buttonColor).toBe(MOCK_ATOM_BUTTON.buttonColor);
  });
  it('should buttonType input decorator need default value', () => {
    const buttonType = component.buttonType;
    expect(buttonType).toBe(MOCK_ATOM_BUTTON.buttonType);
  });
  it('should buttonText input decorator need default value', () => {
    const buttonText = component.buttonText;
    expect(buttonText).toBe(MOCK_ATOM_BUTTON.buttonText);
  });
  it('should icon input decorator need default value', () => {
    const icon = component.icon;
    expect(icon).toBe(MOCK_ATOM_BUTTON.icon);
  });
  it('should isDisabled input decorator need default value', () => {
    const isDisabled = component.isDisabled;
    expect(isDisabled).toBe(MOCK_ATOM_BUTTON.isDisabled);
  });
  it('should onClickButton property to be instance of EventEmitter', () => {
    expect(component.onClickButton).toBeInstanceOf(EventEmitter);
  });
  it('[onClick] should emit event', () => {
    const event = new MouseEvent('click');
    component.onClick(event);
    expect(component.onClickButton.emit(event));
  });
});
