import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotnullComponent } from './notnull.component';

describe('NotnullComponent', () => {
  let component: NotnullComponent;
  let fixture: ComponentFixture<NotnullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotnullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotnullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
