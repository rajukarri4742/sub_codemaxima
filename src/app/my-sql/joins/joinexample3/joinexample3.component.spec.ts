import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joinexample3Component } from './joinexample3.component';

describe('Joinexample3Component', () => {
  let component: Joinexample3Component;
  let fixture: ComponentFixture<Joinexample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Joinexample3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Joinexample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
