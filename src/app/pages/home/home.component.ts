import { Component, isDevMode, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { getNetlifyImageUrl } from '../../utils/utils.service';
import { FaqComponent } from '../../components/faq/faq.component';
import { QuoteComponent } from '../../components/quote/quote.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, FaqComponent, QuoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('aboutImage') aboutImage!: ElementRef<HTMLImageElement>;
  @ViewChild('servicesImage') servicesImage!: ElementRef<HTMLImageElement>;
  
  heroImageUrl: string;
  
  // Image paths for NgOptimizedImage
  aboutImagePath = '/assets/flooringVertical4_result1.avif';
  servicesImagePath = '/assets/flooringVertical3_result1.avif';
  
  servicesList = [
    {
      name: 'Carpet',
      description: 'Premium carpet solutions for comfort and style in any space.'
    },
    {
      name: 'Timber',
      description: 'High-quality timber flooring that brings natural beauty to your home.'
    },
    {
      name: 'European Oak',
      description: 'Luxurious European Oak flooring for timeless elegance.'
    },
    {
      name: 'Laminate',
      description: 'Durable and affordable laminate flooring options for every budget.'
    },
    {
      name: 'Hybrid Flooring',
      description: 'Modern hybrid flooring combining the best of vinyl and laminate.'
    },
    {
      name: 'Parquetry',
      description: 'Custom parquetry designs for unique and intricate flooring patterns.'
    },
    {
      name: 'Chevron',
      description: 'Stylish chevron patterns that add character to your floors.'
    },
    {
      name: 'Vinyl Plank',
      description: 'Water-resistant vinyl plank flooring perfect for any room.'
    },
    {
      name: 'Carpet Tiles',
      description: 'Versatile carpet tiles ideal for commercial and residential spaces.'
    }
  ];
  
  constructor() {
    // Hero image uses background-image, so we still need the URL
    // NgOptimizedImage handles the other images automatically
    if (isDevMode()) {
      this.heroImageUrl = '/assets/mainHero_result1.avif';
    } else {
      this.heroImageUrl = getNetlifyImageUrl('/assets/mainHero_result1.avif');
    }
  }

  ngAfterViewInit() {
    // Set up Intersection Observer for scroll animations
    if (this.aboutImage?.nativeElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(this.aboutImage.nativeElement);
    }

    if (this.servicesImage?.nativeElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(this.servicesImage.nativeElement);
    }
  }
}

