import { Injectable } from '@angular/core';

/**
 * Utility function to convert image paths to Netlify Image CDN URLs
 * @param imagePath - The local image path (e.g., '/pavingImg.png')
 * @param width - Desired image width in pixels
 * @param quality - Image quality (1-100, default: 75)
 * @returns Netlify Image CDN URL
 */
export function getNetlifyImageUrl(imagePath: string, width?: number, quality: number = 75): string {
  // Ensure path starts with /
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  // Encode the full path for URL
  const encodedPath = encodeURIComponent(cleanPath);
  
  // Build Netlify Image CDN URL
  let url = `/.netlify/images?url=${encodedPath}&q=${quality}`;
  
  if (width) {
    url += `&w=${width}`;
  }
  
  return url;
}

// Store reference to the exported function for use in the service
const getNetlifyImageUrlFn = getNetlifyImageUrl;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  /**
   * Generates a Netlify CDN-compatible image URL
   * @param imagePath - The local image path (e.g., '/pavingImg.png')
   * @param width - Desired image width in pixels
   * @param quality - Image quality (1-100, default: 75)
   * @returns Netlify Image CDN URL
   */
  getNetlifyImageUrl(imagePath: string, width?: number, quality: number = 75): string {
    return getNetlifyImageUrlFn(imagePath, width, quality);
  }
}

