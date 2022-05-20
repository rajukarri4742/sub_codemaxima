import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatedata3Component } from './updatedata3.component';

describe('Updatedata3Component', () => {
  let component: Updatedata3Component;
  let fixture: ComponentFixture<Updatedata3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updatedata3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Updatedata3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
