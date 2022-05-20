import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiComponent } from './initi.component';

describe('InitiComponent', () => {
  let component: InitiComponent;
  let fixture: ComponentFixture<InitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
