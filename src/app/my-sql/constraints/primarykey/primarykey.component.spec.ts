import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarykeyComponent } from './primarykey.component';

describe('PrimarykeyComponent', () => {
  let component: PrimarykeyComponent;
  let fixture: ComponentFixture<PrimarykeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarykeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarykeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
