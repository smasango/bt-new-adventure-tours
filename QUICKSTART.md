# Quick Start Guide - BT New Adventure Tours Website

## What You Have

A complete, professional, production-ready website for BT New Adventure Tours with:
- 8 fully functional pages
- Responsive design (mobile, tablet, desktop)
- Professional branding based on the company logo
- Contact and enquiry forms
- Gallery with lightbox
- Complete SEO optimization
- WhatsApp integration

## Immediate Next Steps

### 1. Test Locally (Right Now)

```bash
# Navigate to the project folder
cd bt-new-adventure-tours

# Open in browser
# Method 1 - Direct (no features requiring a server)
open index.html

# Method 2 - Using Python (more reliable)
python -m http.server 8000
# Then visit: http://localhost:8000
```

### 2. Customize Business Information

**Edit `config/business-config.js`:**
- Update phone number
- Update email
- Update business name
- Update colors if needed

**Update all HTML files** (or just use config):
- Phone number appears in footer, contact page, WhatsApp button
- Email in footer and contact form
- Company name in header and footer

### 3. Replace Images

**Logo:**
- Replace `images/logo/bt-logo.png` with your logo
- Keep same size or adjust in CSS

**Destination Images:**
- Replace files in `images/destinations/`
- Update image alt text in HTML

**Gallery:**
- Replace files in `images/gallery/`
- Add up to 9 images

**Safari:**
- Replace files in `images/safari/`

### 4. Update Contact Links

- Email links: `<a href="mailto:Brenda@btnatours.co.za">`
- Phone links: `<a href="tel:+27604842816">`
- WhatsApp: `href="https://wa.me/27604842816"`

### 5. Deploy to Truehost (See DEPLOYMENT.md)

Quick overview:
1. Create Truehost account
2. Register domain `btnatours.co.za`
3. Upload files via FTP to public_html
4. Configure SSL/HTTPS
5. Test all functionality
6. Submit to Google Search Console

## File Checklist

- ✅ 8 HTML pages (index, about, services, tours, attractions, gallery, contact, request-quote)
- ✅ 2 CSS files (main styles + responsive)
- ✅ JavaScript for interactivity
- ✅ Business configuration file
- ✅ Logo and placeholder images
- ✅ SEO files (robots.txt, sitemap.xml)
- ✅ Documentation (README.md, DEPLOYMENT.md)
- ✅ All setup files (.gitignore, favicon, etc.)

## Key Features

**Navigation:**
- Desktop menu
- Mobile hamburger menu
- WhatsApp floating button
- Consistent header/footer

**Content:**
- 10 services listed
- 19 attractions
- 6 featured tour packages
- Professional about page
- Comprehensive gallery

**Interactivity:**
- Mobile-responsive design
- Form validation
- Gallery lightbox
- Smooth scrolling
- Scroll animations

**Professional:**
- Modern color scheme (gold, navy, green, red)
- Professional typography
- Generous whitespace
- Smooth animations
- High-quality layout

## Customization Guide

### Change Company Colors

Edit `css/style.css`:
```css
:root {
  --primary-gold: #F4A000;
  --primary-navy: #1B3A5E;
  --accent-red: #E63946;
  --accent-green: #2D7D3F;
}
```

### Update Contact Info

Option 1: Update each HTML file
Option 2: Update `config/business-config.js` and reference it

### Add New Tour

1. Edit `tours.html`
2. Copy existing card template
3. Update image, title, description
4. Save

### Add Gallery Image

1. Upload image to `images/gallery/`
2. Add to `gallery.html` gallery grid
3. Update onclick parameter number

## Testing Checklist

- [ ] All pages load without errors
- [ ] Mobile menu opens/closes
- [ ] Links navigate correctly
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Gallery images open in lightbox
- [ ] WhatsApp button works
- [ ] No broken links
- [ ] Looks good on mobile (test with DevTools)

## Deployment Steps

1. **Create Truehost Account**
   - Go to https://www.truehost.co.za
   - Sign up for hosting

2. **Upload Files**
   - Use FTP client (FileZilla)
   - Upload to `public_html` folder

3. **Configure Domain**
   - Point domain to hosting
   - Configure DNS

4. **Enable HTTPS**
   - Enable AutoSSL in cPanel
   - Force HTTPS in .htaccess

5. **Test**
   - Visit https://www.btnatours.co.za
   - Test all functionality
   - Check mobile responsiveness

6. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap

## Support Resources

- **README.md** - Complete documentation
- **DEPLOYMENT.md** - Step-by-step deployment guide
- **Browser DevTools** - F12 to debug (Chrome, Firefox, Edge)
- **Truehost Support** - support@truehost.co.za

## Common Tasks

### Change Phone Number
Search for `060 484 2816` in all files and replace

### Change Email
Search for `Brenda@btnatours.co.za` and replace

### Add New Attraction
Edit `attractions.html` and add new card

### Update Social Media Links
Add to footer social section in each HTML file

### Change Website Tagline
Update in HTML headers and `config/business-config.js`

## Next Steps

1. Open `index.html` in browser to preview
2. Read `README.md` for complete documentation
3. Read `DEPLOYMENT.md` for Truehost deployment
4. Customize with your images and information
5. Deploy to Truehost
6. Monitor and maintain

---

**Ready to Deploy?** Start with the DEPLOYMENT.md file for step-by-step instructions.

**Questions?** Check README.md for troubleshooting and detailed information.

---
Created: September 26, 2026
Status: Production Ready
