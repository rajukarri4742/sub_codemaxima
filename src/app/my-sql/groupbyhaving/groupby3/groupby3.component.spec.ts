import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Groupby3Component } from './groupby3.component';

describe('Groupby3Component', () => {
  let component: Groupby3Component;
  let fixture: ComponentFixture<Groupby3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Groupby3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Groupby3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
