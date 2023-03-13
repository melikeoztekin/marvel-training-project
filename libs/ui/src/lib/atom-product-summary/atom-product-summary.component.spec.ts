import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProductSummaryComponent } from './atom-product-summary.component';

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
});
