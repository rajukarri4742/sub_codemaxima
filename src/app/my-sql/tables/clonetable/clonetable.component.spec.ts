import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonetableComponent } from './clonetable.component';

describe('ClonetableComponent', () => {
  let component: ClonetableComponent;
  let fixture: ComponentFixture<ClonetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
