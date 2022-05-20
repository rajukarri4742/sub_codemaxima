import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletedata1Component } from './deletedata1.component';

describe('Deletedata1Component', () => {
  let component: Deletedata1Component;
  let fixture: ComponentFixture<Deletedata1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deletedata1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Deletedata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
