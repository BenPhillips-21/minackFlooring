import { isDevMode } from '@angular/core';
import { ImageLoaderConfig } from '@angular/common';
import { getNetlifyImageUrl } from './utils.service';

/**
 * Custom image loader for NgOptimizedImage that works with Netlify Image CDN
 * Receives ImageLoaderConfig from NgOptimizedImage and returns optimized CDN URLs
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
 * @param config - Image loader configuration from Angular (includes src, width, etc.)
 * @returns The optimized Netlify Image CDN URL or direct asset path in development
 */
export function netlifyImageLoader(config: ImageLoaderConfig): string {
  const { src, width } = config;
  
  // In development, use direct asset path
  if (isDevMode()) {
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    return `/${cleanSrc}`;
  }
  
  // In production, use Netlify Image CDN with width optimization
  // Cap the width to a reasonable maximum for performance
  const maxWidth = 1920;
  const optimizedWidth = width && width > maxWidth ? maxWidth : width;
  
  return getNetlifyImageUrl(src, optimizedWidth);
}

