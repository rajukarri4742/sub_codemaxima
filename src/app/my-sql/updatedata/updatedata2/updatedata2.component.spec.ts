import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatedata2Component } from './updatedata2.component';

describe('Updatedata2Component', () => {
  let component: Updatedata2Component;
  let fixture: ComponentFixture<Updatedata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updatedata2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Updatedata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
