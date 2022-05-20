import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onetomay2Component } from './onetomay2.component';

describe('Onetomay2Component', () => {
  let component: Onetomay2Component;
  let fixture: ComponentFixture<Onetomay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onetomay2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onetomay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
