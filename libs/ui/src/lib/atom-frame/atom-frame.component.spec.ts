import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomFrameComponent } from './atom-frame.component';

describe('AtomFrameComponent', () => {
  let component: AtomFrameComponent;
  let fixture: ComponentFixture<AtomFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
