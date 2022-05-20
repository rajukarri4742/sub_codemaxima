import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsOffersSectionComponent } from './students-offers-section.component';

describe('StudentsOffersSectionComponent', () => {
  let component: StudentsOffersSectionComponent;
  let fixture: ComponentFixture<StudentsOffersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsOffersSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsOffersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
