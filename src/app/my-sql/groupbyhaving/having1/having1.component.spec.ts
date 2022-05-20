import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Having1Component } from './having1.component';

describe('Having1Component', () => {
  let component: Having1Component;
  let fixture: ComponentFixture<Having1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Having1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Having1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
