import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onetoone2Component } from './onetoone2.component';

describe('Onetoone2Component', () => {
  let component: Onetoone2Component;
  let fixture: ComponentFixture<Onetoone2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onetoone2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onetoone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
