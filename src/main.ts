import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { IMAGE_LOADER } from '@angular/common';
import { netlifyImageLoader } from './app/utils/netlify-image-loader';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // Provide Netlify image loader for NgOptimizedImage directive
    {
      provide: IMAGE_LOADER,
      useValue: netlifyImageLoader
    }
  ]
}).catch(err => console.error(err));

