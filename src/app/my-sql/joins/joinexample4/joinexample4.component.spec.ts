import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joinexample4Component } from './joinexample4.component';

describe('Joinexample4Component', () => {
  let component: Joinexample4Component;
  let fixture: ComponentFixture<Joinexample4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Joinexample4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Joinexample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
