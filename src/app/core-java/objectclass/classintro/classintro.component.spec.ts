import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassintroComponent } from './classintro.component';

describe('ClassintroComponent', () => {
  let component: ClassintroComponent;
  let fixture: ComponentFixture<ClassintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
