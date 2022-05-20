import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritanceexample3Component } from './inheritanceexample3.component';

describe('Inheritanceexample3Component', () => {
  let component: Inheritanceexample3Component;
  let fixture: ComponentFixture<Inheritanceexample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inheritanceexample3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inheritanceexample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
