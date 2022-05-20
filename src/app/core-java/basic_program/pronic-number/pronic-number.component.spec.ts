import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronicNumberComponent } from './pronic-number.component';

describe('PronicNumberComponent', () => {
  let component: PronicNumberComponent;
  let fixture: ComponentFixture<PronicNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronicNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronicNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
