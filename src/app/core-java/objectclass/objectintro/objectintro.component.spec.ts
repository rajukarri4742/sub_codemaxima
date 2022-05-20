import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectintroComponent } from './objectintro.component';

describe('ObjectintroComponent', () => {
  let component: ObjectintroComponent;
  let fixture: ComponentFixture<ObjectintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
