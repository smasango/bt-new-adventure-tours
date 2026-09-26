# BT New Adventure Tours - Website

A professional, modern, responsive tourism website for BT New Adventure Tours, a South African tour company offering customised tours, safaris, and travel services.

**Website:** https://www.btnatours.co.za/

## Project Overview

This is a complete, production-ready website built with:
- **HTML5** - Semantic markup
- **CSS3** - Modern styling based on brand colors
- **JavaScript** - Interactive features and form handling
- **Responsive Design** - Mobile-first approach (480px to 1440px+)
- **Accessibility** - WCAG standards compliance
- **SEO** - Optimized for search engines

## Features

### Core Features
- **Responsive Design** - Works perfectly on all devices
- **Service Directory** - Complete listing of 10 tourism services
- **Attraction Database** - 19+ South African attractions
- **Tour Packages** - Featured and customizable tours
- **Gallery** - Photo gallery with lightbox functionality
- **Contact Forms** - Multiple forms for enquiries and quotes
- **WhatsApp Integration** - Floating chat button
- **SEO Optimized** - Structured data, meta tags, sitemap

### Business Features
- **Centralized Configuration** - Update business info in one place
- **Professional Branding** - Color scheme derived from logo
- **Mobile Menu** - Hamburger menu for tablets/mobile
- **Smooth Scrolling** - Professional navigation experience
- **Form Validation** - Client-side form validation
- **Success Messages** - User feedback for form submissions

## Project Structure

```
bt-new-adventure-tours/
├── index.html                 # Homepage
├── about.html                 # About page
├── services.html              # Services listing
├── tours.html                 # Tour packages
├── attractions.html           # Attractions directory
├── gallery.html               # Photo gallery
├── contact.html               # Contact form
├── request-quote.html         # Tour enquiry form
│
├── css/
│   ├── style.css              # Main stylesheet
│   └── responsive.css         # Mobile/tablet styles
│
├── js/
│   └── main.js                # JavaScript functionality
│
├── config/
│   └── business-config.js     # Business information
│
├── images/
│   ├── logo/
│   │   └── bt-logo.png        # Company logo
│   ├── destinations/          # Destination images
│   ├── gallery/               # Gallery images
│   └── safari/                # Safari images
│
├── robots.txt                 # Search engine directives
├── sitemap.xml                # XML sitemap for SEO
├── .gitignore                 # Git ignore rules
├── README.md                  # This file
├── DEPLOYMENT.md              # Deployment guide
└── favicon.ico                # Favicon
```

## Getting Started

### Local Development

1. **Download the project files**
   - Extract the ZIP file to your desired location

2. **Open in browser**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Access the site**
   - Open http://localhost:8000 in your browser

### File Structure Overview

- **HTML Files** - All `.html` files are complete pages
- **CSS Files** - `style.css` contains main design, `responsive.css` contains mobile styles
- **JavaScript** - `main.js` handles interactivity, forms, gallery, navigation
- **Config** - `config/business-config.js` stores business information
- **Images** - Create directories and add images as needed

## Customization

### Update Business Information

Edit `config/business-config.js`:

```javascript
BUSINESS_CONFIG = {
  businessName: 'BT NEW ADVENTURE TOURS',
  phone: '060 484 2816',
  email: 'Brenda@btnatours.co.za',
  website: 'https://www.btnatours.co.za',
  colors: {
    primary_gold: '#F4A000',
    primary_navy: '#1B3A5E',
    // ... other colors
  }
}
```

### Replace Logo

1. Replace `images/logo/bt-logo.png` with your logo
2. The logo appears in the header on all pages
3. Update image dimensions in HTML if needed

### Update Images

1. **Destinations**
   - Replace `images/destinations/*.jpg` with your images
   - Update image alt text in HTML

2. **Gallery**
   - Add images to `images/gallery/`
   - Update gallery HTML with new images

3. **Optimize Images**
   - Use optimized JPG/PNG files
   - Consider image size for web (compress for faster loading)

### Modify Services

Edit `config/business-config.js` services array or update HTML directly in `services.html`

### Add New Tours

1. Edit `tours.html` to add new tour cards
2. Use the existing card structure as a template
3. Add corresponding images

### Change Colors

1. Edit CSS variables in `css/style.css`:
   ```css
   :root {
     --primary-gold: #F4A000;
     --primary-navy: #1B3A5E;
     --accent-red: #E63946;
     --accent-green: #2D7D3F;
   }
   ```

2. Changes apply site-wide automatically

### Update Contact Information

1. Edit `config/business-config.js` phone and email
2. Update footer on each page (or use config in footer)
3. Update WhatsApp number in HTML links

## Forms

### Form Handling

Forms are set up to:
1. Validate client-side (required fields, email format, phone format)
2. Display success message
3. In production, send data to backend server

### To Make Forms Send Emails

For local/test: Forms currently show success but don't send email
For production: You need to:

1. **Option 1: PHP Backend**
   - Create `submit-form.php`
   - Add form `action="submit-form.php"`
   - Process form data and send email

2. **Option 2: Third-party Service**
   - Use Formspree (https://formspree.io)
   - Use EmailJS (https://www.emailjs.com)
   - Use Netlify Forms

3. **Option 3: Truehost Features**
   - Check if hosting provider offers form submission
   - Use cPanel features if available

## Performance Optimization

### Image Optimization
- Compress images before uploading
- Use appropriate formats (JPG for photos, PNG for graphics)
- Consider WebP for modern browsers

### CSS/JS
- Minify CSS and JS in production
- Remove unused styles
- Lazy-load images

### Core Web Vitals
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## Accessibility

The website follows WCAG accessibility standards:
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Alt text for images
- Form labels and validation
- Skip-to-content link

## SEO

### Optimized For
- "South Africa tours"
- "South African tours"
- "Johannesburg tours"
- "Cape Town tours"
- "Kruger safaris"
- And more regional keywords

### SEO Features
- Proper meta tags
- Open Graph tags for social sharing
- Structured data (Schema.org)
- XML sitemap
- Robots.txt
- Descriptive page titles
- H1/H2/H3 hierarchy

## Deployment

See `DEPLOYMENT.md` for detailed instructions on deploying to Truehost South Africa.

Quick steps:
1. Create hosting account at Truehost
2. Configure domain and DNS
3. Upload files via FTP/SFTP
4. Configure SSL/HTTPS
5. Test functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Breakpoints
- Mobile: 375px - 480px
- Tablet: 768px - 1024px
- Desktop: 1440px+

## Maintenance

### Regular Tasks
- Update business information as needed
- Add new tours and attractions
- Update gallery with fresh images
- Monitor form submissions
- Check SEO rankings
- Review analytics

### Security Notes
- Don't commit credentials to Git
- Use environment variables for sensitive data
- Keep passwords in separate `.env` file
- Never expose API keys in code

## GitHub Setup

### Initialize Repository

```bash
# Navigate to project directory
cd bt-new-adventure-tours

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Complete website for BT New Adventure Tours"

# Add remote repository
git remote add origin https://github.com/your-username/bt-new-adventure-tours.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### GitHub Pages (Optional)

To host on GitHub Pages:
1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Site will be available at `https://your-username.github.io/bt-new-adventure-tours/`

## Troubleshooting

### Images Not Loading
- Check image paths are correct
- Verify images exist in folders
- Check file extensions (jpg, png, gif)
- Test relative vs absolute paths

### Forms Not Working
- Check browser console for JavaScript errors
- Verify form field names match JavaScript
- Check input type attributes
- Test in different browsers

### Mobile Layout Issues
- Check viewport meta tag exists
- Test on actual mobile devices
- Verify responsive CSS is loaded
- Check media queries in responsive.css

### WhatsApp Button Not Working
- Verify phone number format (international)
- Check URL encoding
- Test on mobile device
- Ensure HTTPS on production

## Support & Contact

For website inquiries:
- **Telephone:** 060 484 2816
- **Email:** Brenda@btnatours.co.za
- **Website:** https://www.btnatours.co.za

## License

© 2026 BT New Adventure Tours. All rights reserved.

This website was created for BT New Adventure Tours. Modification and use of this website should only be done with proper authorization.

## Version History

- **v1.0** (2026-09-26) - Initial release
  - Complete website with 8 pages
  - Responsive design
  - Full feature set
  - Production-ready

---

**Created:** September 26, 2026
**Status:** Production Ready
**Last Updated:** September 26, 2026
