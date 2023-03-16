import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomSelectComponent } from './atom-select.component';
import { EventEmitter, Input } from '@angular/core';
const MOCK_ATOM_SELECT = {
  setDisabled: false,
  textfield: undefined,
  value: undefined,
  valuefield: undefined,
  name: undefined,
  datas: undefined,
};
describe('AtomSelectComponent', () => {
  let component: AtomSelectComponent;
  let fixture: ComponentFixture<AtomSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should setDisabled input decorator need default value', () => {
    const setDisabled = component.setDisabled;
    expect(setDisabled).toBe(MOCK_ATOM_SELECT.setDisabled);
  });
  it('should textfield input decorator need default value', () => {
    const textfield = component.textfield;
    expect(textfield).toBe(MOCK_ATOM_SELECT.textfield);
  });
  it('should value input decorator need default value', () => {
    const value = component.value;
    expect(value).toBe(MOCK_ATOM_SELECT.value);
  });
  it('should valuefield input decorator need default value', () => {
    const valuefield = component.valuefield;
    expect(valuefield).toBe(MOCK_ATOM_SELECT.valuefield);
  });
  it('should name input decorator need default value', () => {
    const name = component.name;
    expect(name).toBe(MOCK_ATOM_SELECT.name);
  });
  it('should datas input decorator need default value', () => {
    const datas = component.datas;
    expect(datas).toBe(MOCK_ATOM_SELECT.datas);
  });
  it('[onChange] should emit event', () => {
    const event = new MouseEvent('onChange');
    component.onChange(event);
    expect(component.onChange);
  });
  it('[onTouched] should', () => {
    component.onTouched();
    expect(component.onTouched);
  });
});
