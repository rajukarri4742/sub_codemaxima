import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manytomany2Component } from './manytomany2.component';

describe('Manytomany2Component', () => {
  let component: Manytomany2Component;
  let fixture: ComponentFixture<Manytomany2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Manytomany2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Manytomany2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
