import { isDevMode } from '@angular/core';
import { ImageLoaderConfig } from '@angular/common';
import { getNetlifyImageUrl } from './utils.service';

/**
 * Custom image loader for NgOptimizedImage that works with Netlify CDN
 * Use this with NgOptimizedImage directive for <img> tags
 * 
 * Example usage:
 * ```typescript
 * import { NgOptimizedImage, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
 * 
 * providers: [
 *   {
 *     provide: IMAGE_LOADER,
 *     useValue: netlifyImageLoader
 *   }
 * ]
 * ```
 * 
 * Then in template:
 * ```html
 * <img ngSrc="/assets/image.jpg" width="800" height="600" alt="Description">
 * ```
 * 
 * @param config - Image loader configuration from Angular
 * @returns The optimized image URL
 */
export function netlifyImageLoader(config: ImageLoaderConfig): string {
  const { src, width } = config;
  
  // In development, use direct asset path
  if (isDevMode()) {
    // Remove leading slash if present for local assets
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    return `/${cleanSrc}`;
  }
  
  // Cap the width to a reasonable maximum for performance
  // Most displays are 1920px or less, and even 2x DPI means 3840px max
  // Capping at 1920px reduces file size significantly while maintaining quality
  const maxWidth = 1920;
  const optimizedWidth = width && width > maxWidth ? maxWidth : width;
  
  // In production, use Netlify CDN
  return getNetlifyImageUrl(src, optimizedWidth);
}

