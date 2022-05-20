import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './home/landing-page.component';
import { AnimatedCardComponent } from './animated-card/animated-card.component';
import { MentorSectionComponent } from './mentor-section/mentor-section.component';
import { StudentsOffersSectionComponent } from './students-offers-section/students-offers-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TrainingModulesComponent } from './training-modules/training-modules.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    AnimatedCardComponent,
    MentorSectionComponent,
    StudentsOffersSectionComponent,
    TestimonialsComponent,
    TrainingModulesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent,
    AnimatedCardComponent,
    MentorSectionComponent,
    StudentsOffersSectionComponent,
    TestimonialsComponent,
    TrainingModulesComponent
  ]
})
export class LandingPageModule { }
