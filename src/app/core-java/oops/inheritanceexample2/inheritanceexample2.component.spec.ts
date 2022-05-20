import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritanceexample2Component } from './inheritanceexample2.component';

describe('Inheritanceexample2Component', () => {
  let component: Inheritanceexample2Component;
  let fixture: ComponentFixture<Inheritanceexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inheritanceexample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inheritanceexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
