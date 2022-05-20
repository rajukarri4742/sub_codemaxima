import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroptableComponent } from './droptable.component';

describe('DroptableComponent', () => {
  let component: DroptableComponent;
  let fixture: ComponentFixture<DroptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
