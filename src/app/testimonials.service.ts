import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

export interface Testimonial {
  text: string;
  id: number;
  name: string;
  description: string;
  imgSrc: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonialsSubject = new BehaviorSubject<Testimonial[]>([]);

  constructor(private translate: TranslateService) {
    this.loadTestimonials();
    this.translate.onLangChange.subscribe(() => {
      this.loadTestimonials();
    });
  }

  getTestimonials() {
    return this.testimonialsSubject.asObservable();
  }

  private loadTestimonials() {
    const testimonialKeys = [
      'testimonials.testimonial1',
      'testimonials.testimonial2',
      'testimonials.testimonial3',
    ];
    this.translate.get(testimonialKeys).subscribe(translations => {
      const testimonials: Testimonial[] = testimonialKeys.map((key, index) => ({
        text: translations[key],
        id: index,
        name: '',
        description: '',
        imgSrc: ''
      }));
      this.testimonialsSubject.next(testimonials);
    });
  }
}
