import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectwhereComponent } from './selectwhere.component';

describe('SelectwhereComponent', () => {
  let component: SelectwhereComponent;
  let fixture: ComponentFixture<SelectwhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectwhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectwhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
