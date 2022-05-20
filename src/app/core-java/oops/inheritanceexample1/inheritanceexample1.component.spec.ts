import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritanceexample1Component } from './inheritanceexample1.component';

describe('Inheritanceexample1Component', () => {
  let component: Inheritanceexample1Component;
  let fixture: ComponentFixture<Inheritanceexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inheritanceexample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inheritanceexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
