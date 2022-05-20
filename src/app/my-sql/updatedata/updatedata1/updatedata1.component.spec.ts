import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatedata1Component } from './updatedata1.component';

describe('Updatedata1Component', () => {
  let component: Updatedata1Component;
  let fixture: ComponentFixture<Updatedata1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updatedata1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Updatedata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
