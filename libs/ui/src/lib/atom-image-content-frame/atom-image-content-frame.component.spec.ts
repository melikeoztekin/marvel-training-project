import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomImageContentFrameComponent } from './atom-image-content-frame.component';

describe('AtomImageContentFrameComponent', () => {
  let component: AtomImageContentFrameComponent;
  let fixture: ComponentFixture<AtomImageContentFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomImageContentFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomImageContentFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
