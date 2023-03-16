import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProductDetailSummaryComponent } from './atom-product-detail-summary.component';
import { EventEmitter } from '@angular/core';
const MOCK_ATOM_PRODUCT_DETAIL_SUMMARY = {
  price: '',
  phoneBrand: 'Phone Brand',
  phoneModel: 'Phone Model',
  internalMemory: '',
  ramMemory: '',
  color: '',
};
describe('AtomProductDetailSummaryComponent', () => {
  let component: AtomProductDetailSummaryComponent;
  let fixture: ComponentFixture<AtomProductDetailSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomProductDetailSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomProductDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should price input decorator need default value', () => {
    const price = component.price;
    expect(price).toBe(MOCK_ATOM_PRODUCT_DETAIL_SUMMARY.price);
  });
  it('should phoneBrand input decorator need default value', () => {
    const phoneBrand = component.phoneBrand;
    expect(phoneBrand).toBe(MOCK_ATOM_PRODUCT_DETAIL_SUMMARY.phoneBrand);
  });
  it('should phoneModel input decorator need default value', () => {
    const phoneModel = component.phoneModel;
    expect(phoneModel).toBe(MOCK_ATOM_PRODUCT_DETAIL_SUMMARY.phoneModel);
  });
  it('should internalMemory input decorator need default value', () => {
    const internalMemory = component.internalMemory;
    expect(internalMemory).toBe(
      MOCK_ATOM_PRODUCT_DETAIL_SUMMARY.internalMemory
    );
  });
  it('should ramMemory input decorator need default value', () => {
    const ramMemory = component.ramMemory;
    expect(ramMemory).toBe(MOCK_ATOM_PRODUCT_DETAIL_SUMMARY.ramMemory);
  });
  it('should color input decorator need default value', () => {
    const color = component.color;
    expect(color).toBe(MOCK_ATOM_PRODUCT_DETAIL_SUMMARY.color);
  });
  it('should onDelete property to be instance of EventEmitter', () => {
    expect(component.onDelete).toBeInstanceOf(EventEmitter);
  });
  it('[onClick] should emit event', () => {
    const event = new MouseEvent('onClick');
    component.onClick(event);
    expect(component.onDelete.emit(event));
  });
});
