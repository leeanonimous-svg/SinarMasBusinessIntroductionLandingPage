# Sinarmas Agri Business - Static Website

Production-ready static website for Sinarmas Agri Business, deployable to Hostinger shared hosting.

## File Structure

```
/public
├── index.html          # Main HTML file
├── /css
│   └── style.css      # Custom CSS styles
├── /js
│   └── main.js        # Minimal JavaScript for interactions
└── /assets
    └── /images        # Image assets (see below)
```

## Setup Instructions

### 1. Image Assets

Place the following images in `/public/assets/images/`:

- `hero-smart-logo.png` - Hero section background (SMART Agribusiness logo)
- `plantation-worker.png` - Plantation worker image for "What We Do" section
- `cooking-oil.png` - FILMA cooking oil product image
- `margarine.png` - FILMA margarine product image
- `shortening.png` - FILMA GOODFRY shortening product image
- `specialty-fats.png` - SMART specialty fats product image
- `sustainability.jpg` - Sustainability section image (optional - can use placeholder)

**Note**: The current React app uses `figma:asset` imports. You need to export these images and place them in the `/public/assets/images/` directory.

### 2. Deployment to Hostinger

1. **Upload Files**:
   - Connect to your Hostinger account via FTP (FileZilla, cPanel File Manager, etc.)
   - Upload the entire `/public` folder contents to your `public_html` directory
   - Make sure `index.html` is in the root of `public_html`

2. **File Permissions**:
   - Ensure all files have proper read permissions (644 for files, 755 for directories)

3. **Testing**:
   - Visit your domain to test the website
   - Test on mobile devices to ensure responsiveness
   - Check all navigation links and interactions

### 3. Local Testing

To test locally before deployment:

1. Simply open `index.html` in your web browser
2. No build process or server required
3. All dependencies (Tailwind CSS) load via CDN

## Features

- **Pure HTML/CSS**: No build tools or frameworks required
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessible**: Semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, proper heading hierarchy
- **Fast Loading**: Minimal JavaScript, CDN-based CSS
- **Interactive**: Mobile menu toggle, smooth scrolling, sticky navigation

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance

### Updating Content

All content is in `index.html`. To update:

1. Open `index.html` in a text editor
2. Find the section you want to modify
3. Update the HTML content
4. Save and re-upload to server

### Styling Changes

Custom styles are in `/public/css/style.css`. Common changes:

- Colors: Update hex values (e.g., `#16a34a` for green)
- Spacing: Modify padding/margin values
- Fonts: Add font imports at the top of the file

### Adding New Sections

1. Add new `<section>` in `index.html`
2. Give it a unique `id` attribute (e.g., `id="new-section"`)
3. Add navigation link in navbar: `<a href="#new-section">New Section</a>`
4. Style as needed using Tailwind classes

## Performance Tips

- Optimize images before upload (use WebP format when possible)
- Keep image file sizes under 500KB
- Consider lazy loading for images below the fold
- Use browser caching via .htaccess (on Hostinger)

## Support

For technical issues with the website code, refer to:
- Tailwind CSS docs: https://tailwindcss.com/docs
- MDN Web Docs: https://developer.mozilla.org

## License

© 2026 Sinarmas Agri Business. All rights reserved.
