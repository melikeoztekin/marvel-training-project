import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomBackgroundImageComponent } from './atom-background-image.component';

describe('AtomBackgroundImageComponent', () => {
  let component: AtomBackgroundImageComponent;
  let fixture: ComponentFixture<AtomBackgroundImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomBackgroundImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
