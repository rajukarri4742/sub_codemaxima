import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onetoone3Component } from './onetoone3.component';

describe('Onetoone3Component', () => {
  let component: Onetoone3Component;
  let fixture: ComponentFixture<Onetoone3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onetoone3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onetoone3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
