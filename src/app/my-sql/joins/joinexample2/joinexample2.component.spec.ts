import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joinexample2Component } from './joinexample2.component';

describe('Joinexample2Component', () => {
  let component: Joinexample2Component;
  let fixture: ComponentFixture<Joinexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Joinexample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Joinexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
