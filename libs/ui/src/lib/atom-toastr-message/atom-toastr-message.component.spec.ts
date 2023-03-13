import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomToastrMessageComponent } from './atom-toastr-message.component';

describe('AtomToastrMessageComponent', () => {
  let component: AtomToastrMessageComponent;
  let fixture: ComponentFixture<AtomToastrMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomToastrMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomToastrMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
