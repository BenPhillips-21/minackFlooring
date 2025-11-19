import { ImageLoaderConfig } from '@angular/common';

/**
 * Image loader for NgOptimizedImage that serves images as static assets
 * Bypasses CDN optimization and serves images directly from the assets folder
 * 
 * Example usage:
 * ```typescript
 * import { NgOptimizedImage, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
 * 
 * providers: [
 *   {
 *     provide: IMAGE_LOADER,
 *     useValue: imageLoader
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
 * @returns The direct asset path URL
 */
export function imageLoader(config: ImageLoaderConfig): string {
  const { src } = config;
  
  // Always use direct asset path - serve as static assets
  // Remove leading slash if present for local assets
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `/${cleanSrc}`;
}

