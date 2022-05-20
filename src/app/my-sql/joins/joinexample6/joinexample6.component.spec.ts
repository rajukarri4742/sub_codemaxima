import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joinexample6Component } from './joinexample6.component';

describe('Joinexample6Component', () => {
  let component: Joinexample6Component;
  let fixture: ComponentFixture<Joinexample6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Joinexample6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Joinexample6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
