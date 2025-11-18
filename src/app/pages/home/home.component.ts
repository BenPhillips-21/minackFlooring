import { Component, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getNetlifyImageUrl } from '../../utils/utils.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  heroImageUrl: string;

  constructor() {
    // Use direct asset path in development, Netlify CDN in production
    if (isDevMode()) {
      this.heroImageUrl = '/assets/mainHero_result.avif';
    } else {
      // Use Netlify CDN for production
      this.heroImageUrl = getNetlifyImageUrl('/assets/mainHero_result.avif');
    }
  }
}

