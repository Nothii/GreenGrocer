import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Testimonial, TestimonialsService } from '../testimonials.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialComponent implements OnInit, OnDestroy {
  testimonialsSubscription!: Subscription;
  testimonials: Testimonial[] = [];

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<div class="nav-btn prev-slide"></div>', '<div class="nav-btn next-slide"></div>'],
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    nav: false
  };

  isDarkTheme: boolean = false;  // Define the type as boolean if it only holds true/false

  constructor(private testimonialService: TestimonialsService) {}

  ngOnInit() {
    this.testimonialsSubscription = this.testimonialService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials;
    });
  }

  ngOnDestroy() {
    if (this.testimonialsSubscription) {
      this.testimonialsSubscription.unsubscribe();
    }
  }
}
