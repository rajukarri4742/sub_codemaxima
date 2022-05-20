import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSectionComponent } from './mentor-section.component';

describe('MentorSectionComponent', () => {
  let component: MentorSectionComponent;
  let fixture: ComponentFixture<MentorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
