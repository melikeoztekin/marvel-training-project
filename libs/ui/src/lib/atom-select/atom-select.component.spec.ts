import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomSelectComponent } from './atom-select.component';

describe('AtomSelectComponent', () => {
  let component: AtomSelectComponent;
  let fixture: ComponentFixture<AtomSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
