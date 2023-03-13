import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailCardListComponent } from './product-detail-card-list.component';

describe('ProductDetailCardListComponent', () => {
  let component: ProductDetailCardListComponent;
  let fixture: ComponentFixture<ProductDetailCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
