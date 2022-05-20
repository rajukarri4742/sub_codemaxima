import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Altertable2Component } from './altertable2.component';

describe('Altertable2Component', () => {
  let component: Altertable2Component;
  let fixture: ComponentFixture<Altertable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Altertable2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Altertable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
