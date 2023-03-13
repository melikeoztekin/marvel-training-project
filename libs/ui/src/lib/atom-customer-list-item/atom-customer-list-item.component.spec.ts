import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomCustomerListItemComponent } from './atom-customer-list-item.component';

describe('AtomCustomerListItemComponent', () => {
  let component: AtomCustomerListItemComponent;
  let fixture: ComponentFixture<AtomCustomerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomCustomerListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomCustomerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
