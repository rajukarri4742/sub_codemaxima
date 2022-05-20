import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Having3Component } from './having3.component';

describe('Having3Component', () => {
  let component: Having3Component;
  let fixture: ComponentFixture<Having3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Having3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Having3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
