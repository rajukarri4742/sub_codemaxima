import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletedata2Component } from './deletedata2.component';

describe('Deletedata2Component', () => {
  let component: Deletedata2Component;
  let fixture: ComponentFixture<Deletedata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deletedata2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Deletedata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
