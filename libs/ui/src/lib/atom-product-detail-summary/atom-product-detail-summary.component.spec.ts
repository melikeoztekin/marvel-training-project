import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProductDetailSummaryComponent } from './atom-product-detail-summary.component';

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
});
