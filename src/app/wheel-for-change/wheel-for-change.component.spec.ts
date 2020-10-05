import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelForChangeComponent } from './wheel-for-change.component';

describe('WheelForChangeComponent', () => {
  let component: WheelForChangeComponent;
  let fixture: ComponentFixture<WheelForChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelForChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelForChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
