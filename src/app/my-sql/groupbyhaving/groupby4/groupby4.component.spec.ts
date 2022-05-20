import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Groupby4Component } from './groupby4.component';

describe('Groupby4Component', () => {
  let component: Groupby4Component;
  let fixture: ComponentFixture<Groupby4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Groupby4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Groupby4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
