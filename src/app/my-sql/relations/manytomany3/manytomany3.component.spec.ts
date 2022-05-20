import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manytomany3Component } from './manytomany3.component';

describe('Manytomany3Component', () => {
  let component: Manytomany3Component;
  let fixture: ComponentFixture<Manytomany3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Manytomany3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Manytomany3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
