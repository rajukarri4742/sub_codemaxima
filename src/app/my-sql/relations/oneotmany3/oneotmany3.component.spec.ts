import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneotmany3Component } from './oneotmany3.component';

describe('Oneotmany3Component', () => {
  let component: Oneotmany3Component;
  let fixture: ComponentFixture<Oneotmany3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oneotmany3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneotmany3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
