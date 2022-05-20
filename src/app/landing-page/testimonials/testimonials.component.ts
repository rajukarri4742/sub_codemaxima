import { Component } from '@angular/core';
import {TestimonialRow, TestimonialsData} from './testimonials-data';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent  {
    testimonials:TestimonialRow[]
    constructor(private data:TestimonialsData) {
      this.testimonials = data.testimonials;
    }
  
}