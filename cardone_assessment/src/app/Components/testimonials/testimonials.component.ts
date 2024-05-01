import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  public paths: string[] = [
    'testimonial-1.jpeg',
    'testimonial-2.jpeg',
    'testimonial-3.jpeg',
    'testimonial-5.jpeg',
    'testimonial-6.jpeg',
  ];
}
