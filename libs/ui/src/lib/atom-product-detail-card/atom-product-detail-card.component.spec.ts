import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProductDetailCardComponent } from './atom-product-detail-card.component';

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
});
