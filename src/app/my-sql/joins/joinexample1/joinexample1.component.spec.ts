import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joinexample1Component } from './joinexample1.component';

describe('Joinexample1Component', () => {
  let component: Joinexample1Component;
  let fixture: ComponentFixture<Joinexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Joinexample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Joinexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
