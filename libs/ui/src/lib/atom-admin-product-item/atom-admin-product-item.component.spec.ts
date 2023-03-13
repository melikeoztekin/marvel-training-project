import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProductItemComponent } from './atom-admin-product-item.component';

describe('AtomProductItemComponent', () => {
  let component: AtomProductItemComponent;
  let fixture: ComponentFixture<AtomProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomProductItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
