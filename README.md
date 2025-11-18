# Flooring Services Website

An Angular application for a services business, configured for Netlify deployment.

## Development

Run `npm install` to install dependencies, then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Netlify Deployment

The project is configured for Netlify deployment. The build command and publish directory are set in `netlify.toml`.

To test locally with Netlify:
```bash
npm run netlify:dev
```

## Netlify Image CDN

Use the `getNetlifyImageUrl` function from the Utils service to generate Netlify CDN-compatible image URLs.

