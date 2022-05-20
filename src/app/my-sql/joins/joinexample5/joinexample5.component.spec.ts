import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joinexample5Component } from './joinexample5.component';

describe('Joinexample5Component', () => {
  let component: Joinexample5Component;
  let fixture: ComponentFixture<Joinexample5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Joinexample5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Joinexample5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
