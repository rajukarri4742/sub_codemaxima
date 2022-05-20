import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuatorComponent } from './accuator.component';

describe('AccuatorComponent', () => {
  let component: AccuatorComponent;
  let fixture: ComponentFixture<AccuatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccuatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
