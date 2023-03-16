import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeProductCardComponent } from './molecule-product-card.component';
import { Input } from '@angular/core';

const MOCK_MOLECULE_PRODUCT_CARD = {
  width: '300px',
  height: '300px',
  phoneBrand: 'Phone Brand',
  phoneModel: 'Phone Model',
  phoneImage: './assets/image-placeholder.jpg',
  price: '120',
};
describe('MoleculeProductCardComponent', () => {
  let component: MoleculeProductCardComponent;
  let fixture: ComponentFixture<MoleculeProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoleculeProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoleculeProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should width input decorator need default value', () => {
    const width = component.width;
    expect(width).toBe(MOCK_MOLECULE_PRODUCT_CARD.width);
  });
  it('should height input decorator need default value', () => {
    const height = component.height;
    expect(height).toBe(MOCK_MOLECULE_PRODUCT_CARD.height);
  });
  it('should phoneBrand input decorator need default value', () => {
    const phoneBrand = component.phoneBrand;
    expect(phoneBrand).toBe(MOCK_MOLECULE_PRODUCT_CARD.phoneBrand);
  });
  it('should phoneImage input decorator need default value', () => {
    const phoneImage = component.phoneImage;
    expect(phoneImage).toBe(MOCK_MOLECULE_PRODUCT_CARD.phoneImage);
  });
  it('should price input decorator need default value', () => {
    const price = component.price;
    expect(price).toBe(MOCK_MOLECULE_PRODUCT_CARD.price);
  });
});
