import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletedata3Component } from './deletedata3.component';

describe('Deletedata3Component', () => {
  let component: Deletedata3Component;
  let fixture: ComponentFixture<Deletedata3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deletedata3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Deletedata3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
