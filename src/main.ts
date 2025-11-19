import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { IMAGE_LOADER } from '@angular/common';
import { imageLoader } from './app/utils/netlify-image-loader';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // Provide image loader for NgOptimizedImage directive (serves static assets)
    {
      provide: IMAGE_LOADER,
      useValue: imageLoader
    }
  ]
}).catch(err => console.error(err));

