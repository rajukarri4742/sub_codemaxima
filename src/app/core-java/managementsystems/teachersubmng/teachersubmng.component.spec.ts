import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersubmngComponent } from './teachersubmng.component';

describe('TeachersubmngComponent', () => {
  let component: TeachersubmngComponent;
  let fixture: ComponentFixture<TeachersubmngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersubmngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersubmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
