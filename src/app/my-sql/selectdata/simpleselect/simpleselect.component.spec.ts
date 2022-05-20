import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleselectComponent } from './simpleselect.component';

describe('SimpleselectComponent', () => {
  let component: SimpleselectComponent;
  let fixture: ComponentFixture<SimpleselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
