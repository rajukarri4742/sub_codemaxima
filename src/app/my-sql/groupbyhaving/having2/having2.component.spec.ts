import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Having2Component } from './having2.component';

describe('Having2Component', () => {
  let component: Having2Component;
  let fixture: ComponentFixture<Having2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Having2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Having2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
