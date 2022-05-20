import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsitrComponent } from './absitr.component';

describe('AbsitrComponent', () => {
  let component: AbsitrComponent;
  let fixture: ComponentFixture<AbsitrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsitrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsitrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
