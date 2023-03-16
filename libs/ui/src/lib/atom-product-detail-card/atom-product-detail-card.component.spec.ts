import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProductDetailCardComponent } from './atom-product-detail-card.component';
const MOCK_ATOM_PRODUCT_DETAIL_CARD = {
  phoneBrand: 'prodBrand',
  phoneModel: 'prodModel',
  phoneImage: './assets/image-placeholder.jpg',
  screenSize: 'X inc and up',
  cameraResolution: 'X-Y MP',
  warrantlyType: 'Turkey Guaranteed',
  color: '',
  internalMemory: '',
  ramMemory: '',
  id: 0,
  index: -1,
  price: 0,
};
describe('AtomProductDetailCardComponent', () => {
  let component: AtomProductDetailCardComponent;
  let fixture: ComponentFixture<AtomProductDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomProductDetailCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomProductDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should phoneBrand input decorator need default value', () => {
    const phoneBrand = component.phoneBrand;
    expect(phoneBrand).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.phoneBrand);
  });
  it('should phoneModel input decorator need default value', () => {
    const phoneModel = component.phoneModel;
    expect(phoneModel).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.phoneModel);
  });
  it('should phoneImage input decorator need default value', () => {
    const phoneImage = component.phoneImage;
    expect(phoneImage).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.phoneImage);
  });
  it('should screenSize input decorator need default value', () => {
    const screenSize = component.screenSize;
    expect(screenSize).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.screenSize);
  });
  it('should cameraResolution input decorator need default value', () => {
    const cameraResolution = component.cameraResolution;
    expect(cameraResolution).toBe(
      MOCK_ATOM_PRODUCT_DETAIL_CARD.cameraResolution
    );
  });
  it('should warrantlyType input decorator need default value', () => {
    const warrantlyType = component.warrantlyType;
    expect(warrantlyType).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.warrantlyType);
  });
  it('should color input decorator need default value', () => {
    const color = component.color;
    expect(color).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.color);
  });
  it('should internalMemory input decorator need default value', () => {
    const internalMemory = component.internalMemory;
    expect(internalMemory).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.internalMemory);
  });
  it('should ramMemory input decorator need default value', () => {
    const ramMemory = component.ramMemory;
    expect(ramMemory).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.ramMemory);
  });
  it('should id input decorator need default value', () => {
    const id = component.id;
    expect(id).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.id);
  });
  it('should index input decorator need default value', () => {
    const index = component.index;
    expect(index).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.index);
  });
  it('should price input decorator need default value', () => {
    const price = component.price;
    expect(price).toBe(MOCK_ATOM_PRODUCT_DETAIL_CARD.price);
  });
});
