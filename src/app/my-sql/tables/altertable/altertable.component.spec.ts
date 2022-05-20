import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltertableComponent } from './altertable.component';

describe('AltertableComponent', () => {
  let component: AltertableComponent;
  let fixture: ComponentFixture<AltertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
