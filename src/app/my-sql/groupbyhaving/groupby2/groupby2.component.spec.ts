import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Groupby2Component } from './groupby2.component';

describe('Groupby2Component', () => {
  let component: Groupby2Component;
  let fixture: ComponentFixture<Groupby2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Groupby2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Groupby2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
