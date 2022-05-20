import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthematicComponent } from './arthematic.component';

describe('ArthematicComponent', () => {
  let component: ArthematicComponent;
  let fixture: ComponentFixture<ArthematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArthematicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
