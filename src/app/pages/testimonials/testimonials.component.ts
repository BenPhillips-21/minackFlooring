import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from '../../components/quote/quote.component';

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, QuoteComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChild('testimonialsContainer', { read: ElementRef }) testimonialsContainer!: ElementRef<HTMLElement>;
  @ViewChild('contactSection', { read: ElementRef }) contactSection!: ElementRef<HTMLElement>;
  
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Mitchell',
      location: 'Melbourne, VIC',
      rating: 5,
      text: 'Minack Flooring transformed our entire home with beautiful European Oak flooring. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommend!'
    },
    {
      name: 'James Thompson',
      location: 'Richmond, VIC',
      rating: 5,
      text: 'From consultation to completion, the service was outstanding. The laminate flooring looks incredible and the installation was done with minimal disruption. Couldn\'t be happier!'
    },
    {
      name: 'Emma Wilson',
      location: 'St Kilda, VIC',
      rating: 5,
      text: 'We chose Minack Flooring for our new carpet installation and we\'re thrilled with the results. The team helped us select the perfect carpet and the installation was flawless.'
    },
    {
      name: 'Michael Chen',
      location: 'South Yarra, VIC',
      rating: 5,
      text: 'The hybrid flooring they installed in our kitchen and living areas is perfect. Water-resistant, stylish, and the installation was completed quickly and professionally.'
    },
    {
      name: 'Lisa Anderson',
      location: 'Fitzroy, VIC',
      rating: 5,
      text: 'The custom parquetry design they created for our entryway is absolutely stunning. True craftsmanship and attention to detail. Worth every penny!'
    },
    {
      name: 'David Brown',
      location: 'Carlton, VIC',
      rating: 5,
      text: 'Excellent service from start to finish. The timber flooring they installed has completely transformed our home. Professional, reliable, and great value for money.'
    },
    {
      name: 'Rachel Green',
      location: 'Prahran, VIC',
      rating: 5,
      text: 'Minack Flooring made the entire process stress-free. They provided excellent advice on material selection and the installation was seamless. Our new floors are beautiful!'
    },
    {
      name: 'Mark Taylor',
      location: 'Brunswick, VIC',
      rating: 5,
      text: 'The chevron pattern flooring they installed is a real showstopper. The team was knowledgeable, friendly, and the workmanship is top-notch. Highly satisfied!'
    },
    {
      name: 'Sophie Martinez',
      location: 'Hawthorn, VIC',
      rating: 5,
      text: 'We had carpet tiles installed in our office space and couldn\'t be happier. Professional installation, great communication throughout, and the result looks fantastic.'
    },
    {
      name: 'Chris Johnson',
      location: 'Port Melbourne, VIC',
      rating: 5,
      text: 'The vinyl plank flooring is perfect for our busy household. Easy to clean, looks great, and the installation was done efficiently. Great service all around!'
    },
    {
      name: 'Amanda White',
      location: 'Kew, VIC',
      rating: 5,
      text: 'Minack Flooring exceeded our expectations in every way. The European Oak flooring is stunning, and the team was professional, clean, and respectful of our home.'
    },
    {
      name: 'Robert Lee',
      location: 'Brighton, VIC',
      rating: 5,
      text: 'Outstanding workmanship and customer service. The hybrid flooring installation was completed on time and the quality is exceptional. We\'ll definitely use them again!'
    }
  ];

  ngAfterViewInit() {
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      // Set up Intersection Observer for scroll animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Observe all testimonial cards
      const cards = this.testimonialsContainer?.nativeElement?.querySelectorAll('.testimonial-card');
      cards?.forEach((card) => {
        observer.observe(card);
      });
    }, 0);
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }

  scrollToContact() {
    this.contactSection?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

