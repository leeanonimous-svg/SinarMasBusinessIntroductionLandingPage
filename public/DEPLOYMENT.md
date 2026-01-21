# Deployment Checklist for Hostinger

## Pre-Deployment

- [ ] All images exported and placed in `/public/assets/images/`
- [ ] Images optimized (compressed, proper format)
- [ ] Test website locally by opening `index.html` in browser
- [ ] Verify all links work correctly
- [ ] Test mobile responsiveness on different screen sizes
- [ ] Check browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Review all content for accuracy
- [ ] Verify contact information is correct
- [ ] Test all interactive elements (mobile menu, smooth scrolling)

## Domain & Hosting Setup

- [ ] Domain name configured and pointing to Hostinger
- [ ] SSL certificate installed and active (HTTPS)
- [ ] Access to cPanel or FTP credentials

## File Upload

- [ ] Connect to Hostinger via FTP or cPanel File Manager
- [ ] Navigate to `public_html` directory
- [ ] Upload all files from `/public` directory:
  - [ ] `index.html`
  - [ ] `/css/style.css`
  - [ ] `/js/main.js`
  - [ ] `/.htaccess`
  - [ ] `/assets/images/*` (all images)
- [ ] Verify file permissions:
  - [ ] Files: 644 (rw-r--r--)
  - [ ] Directories: 755 (rwxr-xr-x)

## Post-Deployment Testing

- [ ] Visit your domain and verify homepage loads
- [ ] Test navigation links (About, Products, Services, Sustainability)
- [ ] Test mobile menu on mobile device or browser DevTools
- [ ] Verify all images load correctly
- [ ] Check page load speed (use Google PageSpeed Insights)
- [ ] Test smooth scrolling functionality
- [ ] Verify navbar changes color on scroll
- [ ] Test on multiple devices:
  - [ ] Desktop (Chrome, Firefox, Safari, Edge)
  - [ ] Tablet (iPad, Android tablet)
  - [ ] Mobile (iPhone, Android phone)

## SEO & Performance

- [ ] Verify meta tags are present (title, description)
- [ ] Check that page appears in Google Search Console
- [ ] Submit sitemap to Google (optional, can create later)
- [ ] Test page speed: https://pagespeed.web.dev/
- [ ] Verify Gzip compression is working
- [ ] Check browser caching is enabled

## Security

- [ ] SSL certificate active (HTTPS)
- [ ] Security headers configured (.htaccess)
- [ ] Directory browsing disabled
- [ ] Remove any test/development files

## Optional Enhancements

- [ ] Add Google Analytics tracking code (if needed)
- [ ] Set up Google Search Console
- [ ] Create custom 404 error page
- [ ] Add favicon.ico
- [ ] Set up email forwarding for contact form (if added)
- [ ] Create sitemap.xml for SEO
- [ ] Add robots.txt file

## Maintenance Schedule

- [ ] Schedule regular content updates
- [ ] Monitor website performance monthly
- [ ] Update copyright year annually
- [ ] Review and update statistics/achievements
- [ ] Keep images and content fresh

## Contact Information

**Hostinger Support**: Available 24/7 via live chat
**Website**: https://www.hostinger.com/
**Documentation**: https://support.hostinger.com/

## Notes

- Keep a backup of all website files locally
- Document any custom changes made after deployment
- Update this checklist as deployment process evolves
