import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProductCardComponent } from './molecule-product-card.component';

describe('AtomProductCardComponent', () => {
  let component: AtomProductCardComponent;
  let fixture: ComponentFixture<AtomProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
