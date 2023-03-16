import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProductSummaryComponent } from './atom-product-summary.component';
import { EventEmitter } from '@angular/core';

const MOCK_ATOM_PRODUCT_SUMMARY = {
  price: '120',
  phoneBrand: 'Phone Brand',
  phoneModel: 'Phone Model',
  quantity: undefined,
};
describe('ProductSummaryComponent', () => {
  let component: AtomProductSummaryComponent;
  let fixture: ComponentFixture<AtomProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomProductSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should price input decorator need default value', () => {
    const price = component.price;
    expect(price).toBe(MOCK_ATOM_PRODUCT_SUMMARY.price);
  });
  it('should phoneBrand input decorator need default value', () => {
    const phoneBrand = component.phoneBrand;
    expect(phoneBrand).toBe(MOCK_ATOM_PRODUCT_SUMMARY.phoneBrand);
  });
  it('should phoneModel input decorator need default value', () => {
    const phoneModel = component.phoneModel;
    expect(phoneModel).toBe(MOCK_ATOM_PRODUCT_SUMMARY.phoneModel);
  });
  it('should quantity input decorator need default value', () => {
    const quantity = component.quantity;
    expect(quantity).toBe(MOCK_ATOM_PRODUCT_SUMMARY.quantity);
  });
  it('should onDelete property to be instance of EventEmitter', () => {
    expect(component.onDelete).toBeInstanceOf(EventEmitter);
  });
  it('[onClick] should emit event', () => {
    const event = new MouseEvent('click');
    component.onClick(event);
    expect(component.onDelete.emit(event));
  });
});
