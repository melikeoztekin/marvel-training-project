import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomHeaderComponent } from './atom-header.component';

describe('AtomHeaderComponent', () => {
  let component: AtomHeaderComponent;
  let fixture: ComponentFixture<AtomHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
