# MAIKR Studio Website

A premium one-page website for MAIKR Studio - AI Development for Real-World Applications.

## Live Site

Visit: [maikr-studio.netlify.app](https://maikr-studio.netlify.app) (or your custom domain)

## Structure

```
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactivity & form handling
└── assets/         # Images and logo
    ├── maikr_logo.png
    ├── bg_hero_9x16.png
    ├── bg_swirl_9x16.png
    └── bg_cta_9x16.png
```

## Features

- Responsive design (mobile-first)
- Calendly booking integration
- Web3Forms contact form
- Smooth scroll animations
- Dark premium theme

## Deployment

This is a static site - simply deploy to any static hosting:

### Netlify (Recommended)
1. Connect this repo to Netlify
2. Build settings: None required (static HTML)
3. Publish directory: `/` (root)

### GoDaddy
1. Upload all files via FTP/File Manager
2. Ensure index.html is at the root

### GitHub Pages
1. Go to Settings → Pages
2. Select "Deploy from branch" → main
3. Site will be at `username.github.io/maikr-studio`

## Contact Form

Uses Web3Forms API. Submissions go to the configured email.

## License

© 2026 MAIKR Studio. All rights reserved.
