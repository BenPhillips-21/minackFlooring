import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export interface ServiceItem {
  name: string;
  description: string;
  imagePath: string;
  isLandscape: boolean;
  width: number;
  height: number;
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss'
})
export class ServicesGridComponent {
  services: ServiceItem[] = [
    {
      name: 'Laminate',
      description: 'Durable, budget-friendly flooring with a stylish finish, ideal for high-traffic areas and modern interiors.',
      imagePath: '/assets/flooringLandscape_result1.avif',
      isLandscape: true,
      width: 800,
      height: 600
    },
    {
      name: 'Carpet',
      description: 'Premium carpet solutions for comfort and style in any space, offering warmth and luxury underfoot.',
      imagePath: '/assets/carpet1.avif',
      isLandscape: false,
      width: 600,
      height: 800
    },
    {
      name: 'Timber',
      description: 'High-quality timber flooring that brings natural beauty to your home with timeless elegance.',
      imagePath: '/assets/flooringLandscape2_result1.avif',
      isLandscape: true,
      width: 800,
      height: 600
    },
    {
      name: 'European Oak',
      description: 'Luxurious European Oak flooring for timeless elegance and exceptional durability.',
      imagePath: '/assets/oakFloor1.avif',
      isLandscape: false,
      width: 600,
      height: 800
    },
    {
      name: 'Hybrid Flooring',
      description: 'Modern hybrid flooring combining the best of vinyl and laminate for versatile, water-resistant solutions.',
      imagePath: '/assets/flooringLandscape3_result1.avif',
      isLandscape: true,
      width: 800,
      height: 600
    },
    {
      name: 'Parquetry',
      description: 'Custom parquetry designs for unique and intricate flooring patterns that add character to any space.',
      imagePath: '/assets/flooringVertical3_result1.avif',
      isLandscape: false,
      width: 600,
      height: 800
    },
    {
      name: 'Chevron',
      description: 'Stylish chevron patterns that add character and visual interest to your floors.',
      imagePath: '/assets/flooringLandscape5_result1.avif',
      isLandscape: true,
      width: 800,
      height: 600
    }
  ];
}

