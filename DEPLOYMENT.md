# Deployment Guide - BT New Adventure Tours

Complete guide for deploying the website to Truehost South Africa.

## Prerequisites

You'll need:
- Truehost hosting account (https://www.truehost.co.za)
- Domain name: `btnatours.co.za` (or similar)
- FTP/SFTP client (FileZilla recommended)
- Text editor for configuration files

## Step 1: Create Truehost Hosting Account

1. **Visit Truehost**
   - Go to https://www.truehost.co.za

2. **Register for Hosting**
   - Choose a hosting package (standard web hosting is sufficient)
   - Package requirements:
     - 10GB+ disk space
     - PHP support (optional, for form processing)
     - SSL certificate included

3. **Complete Registration**
   - Provide company information
   - Set up billing
   - Create cPanel account
   - Receive account details via email

4. **Save Your Details**
   - Note your cPanel URL
   - Save FTP/SFTP credentials
   - Save account number

## Step 2: Domain Configuration

### Register Your Domain

If not already registered:

1. **With Truehost**
   - Register through Truehost dashboard
   - Or transfer existing domain

2. **Configure DNS**
   - In Truehost cPanel
   - Point domain to hosting account
   - Note: DNS changes take 24-48 hours to propagate

### Connect Domain to Hosting

1. **Log into cPanel**
   - Use URL provided by Truehost
   - Username and password from signup email

2. **Add Domain**
   - Find "Addon Domains" or "Domains"
   - Add `btnatours.co.za`
   - Point to public_html folder
   - Create document root

3. **Verify Domain**
   - Test in browser (may take a few hours)
   - You should see default page initially

## Step 3: Upload Website Files

### Using FTP/SFTP

**FileZilla Setup:**

1. **Download FileZilla** (if not installed)
   - https://filezilla-project.org

2. **Configure Connection**
   - File → Site Manager → New Site
   - Protocol: SFTP (recommended) or FTP
   - Host: ftp.btnatours.co.za (or Truehost server address)
   - Port: 22 (SFTP) or 21 (FTP)
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Connect

3. **Upload Files**
   - On right side: Navigate to `public_html`
   - On left side: Navigate to your project folder
   - Select ALL files and folders
   - Right-click → Upload
   - Wait for completion

**File Structure After Upload:**

```
public_html/
├── index.html
├── about.html
├── services.html
├── tours.html
├── attractions.html
├── gallery.html
├── contact.html
├── request-quote.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
├── config/
│   └── business-config.js
└── images/
    ├── logo/
    ├── destinations/
    ├── gallery/
    └── safari/
```

### Using cPanel File Manager

**Alternative if no FTP client:**

1. **Log into cPanel**
2. **File Manager**
3. **Navigate to public_html**
4. **Upload Button**
5. **Select all files**
6. **Upload**

## Step 4: SSL/HTTPS Configuration

### Enable SSL Certificate

**Important:** Modern websites MUST use HTTPS

1. **Log into cPanel**
2. **Find "SSL/TLS"**
3. **Auto-install AutoSSL**
   - Most Truehost plans include free AutoSSL
   - Certificate installs automatically

4. **Verify HTTPS**
   - Visit https://www.btnatours.co.za
   - Check for green lock icon
   - Verify no warnings

### Force HTTPS

Add to `.htaccess` in `public_html`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove www if not needed
RewriteCond %{HTTP_HOST} ^www\.
RewriteRule ^(.*)$ https://btnatours.co.za/$1 [L,R=301]
```

## Step 5: Configure Email & Forms

### Enable Email Addresses

1. **cPanel → Email Accounts**
2. **Create email addresses:**
   - `brenda@btnatours.co.za`
   - `info@btnatours.co.za`
   - `contact@btnatours.co.za`

3. **Set password**
4. **Configure email client** if needed

### Form Submission Options

#### Option A: Formspree (Recommended - No Backend Needed)

1. **Visit https://formspree.io**
2. **Sign up**
3. **Create new form**
4. **Get form endpoint**
5. **Update form action in HTML:**

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <!-- form fields -->
</form>
```

#### Option B: PHP Email Script (Backend)

Create `submit-form.php` in public_html:

```php
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = sanitize($_POST['name']);
    $email = sanitize($_POST['email']);
    $message = sanitize($_POST['message']);
    
    $to = 'Brenda@btnatours.co.za';
    $subject = 'New Enquiry from BT Tours Website';
    $headers = "From: $email\r\n";
    
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
}

function sanitize($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}
?>
```

Then update form HTML:
```html
<form action="submit-form.php" method="POST">
```

#### Option C: Contact Form Plugin

If using WordPress hosting later:
- Install "WPForms" or "Contact Form 7"
- Configure email notifications
- Embed form in page

## Step 6: WhatsApp Integration

The WhatsApp button is pre-configured with the phone number.

To test:
1. Click WhatsApp button
2. Should open WhatsApp with message
3. On mobile, goes to WhatsApp app
4. On desktop, goes to WhatsApp Web

The number is hardcoded. To change:
1. Edit HTML files
2. Replace `27604842816` with new number (international format)
3. Or edit `config/business-config.js`

## Step 7: SEO & Search Engines

### Submit to Google Search Console

1. **Visit https://search.google.com/search-console**
2. **Add Property**
3. **Select "URL prefix"**
4. **Enter https://www.btnatours.co.za**
5. **Verify ownership** (HTML file method easiest)
6. **Download verification file**
7. **Upload to public_html**
8. **Verify in Search Console**

### Submit Sitemap

1. **In Search Console**
2. **Sitemaps section**
3. **Submit sitemap**
4. **URL: https://www.btnatours.co.za/sitemap.xml**

### Submit to Bing Webmaster Tools

1. **Visit https://www.bing.com/webmasters**
2. **Add site**
3. **Enter domain**
4. **Verify and submit sitemap**

## Step 8: Testing

### Functionality Testing

- [ ] All links work
- [ ] Navigation menu works on desktop
- [ ] Hamburger menu works on mobile
- [ ] Forms submit successfully
- [ ] WhatsApp button works
- [ ] Gallery images load and lightbox works
- [ ] No broken images
- [ ] All CSS styles apply correctly

### Mobile Testing

- [ ] Test on iPhone
- [ ] Test on Android
- [ ] Test on tablet (iPad)
- [ ] Test on different screen sizes
- [ ] Test portrait and landscape

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance Testing

Use Google PageSpeed Insights:
1. https://pagespeed.web.dev
2. Enter https://www.btnatours.co.za
3. Check desktop and mobile scores
4. Address any issues
5. Target score: >80

### Security Testing

Use SSL Labs:
1. https://www.ssllabs.com/ssltest/
2. Enter https://www.btnatours.co.za
3. Should get A or A+ rating
4. Fix any warnings

## Step 9: Analytics & Monitoring

### Google Analytics

1. **Create account** at https://analytics.google.com
2. **Set up property** for your domain
3. **Add Google Analytics script** to all pages

Add to `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-XXXXXXX-X');
</script>
```

### Monitor Uptime

- Use Uptime Robot (https://uptimerobot.com)
- Get alerts if site goes down
- Monitor performance metrics

## Step 10: Maintenance

### Regular Tasks

**Monthly:**
- Check analytics
- Review form submissions
- Monitor SEO rankings
- Check for broken links

**Quarterly:**
- Update content
- Add new tours/attractions
- Refresh gallery images
- Update testimonials

**Annually:**
- Renew SSL certificate (auto-renew recommended)
- Review backup strategy
- Update security patches
- Audit website performance

### Backups

1. **Set up automatic backups** (Truehost usually provides)
2. **Manual backup** before major changes:
   - Download entire public_html folder
   - Save locally or cloud storage

3. **Database backup** (if using later)
   - Export database regularly
   - Store securely

## Troubleshooting

### Website Not Loading

1. **Check DNS propagation**
   - https://www.whatsmydns.net
   - All nameservers should point correctly

2. **Check file permissions**
   - Files: 644
   - Folders: 755
   - Set in cPanel File Manager

3. **Check .htaccess**
   - May have syntax errors
   - Temporarily rename to test

4. **Check error logs**
   - cPanel → Error Logs
   - Look for PHP or server errors

### Forms Not Working

1. **Check server PHP version**
   - May need PHP 7+ for some code
   - cPanel → Select PHP Version

2. **Check form action**
   - Verify correct URL
   - Verify method is POST

3. **Check email configuration**
   - Verify email address exists
   - Check PHP mail function enabled

4. **Enable error reporting** (temporary)
   - Add to PHP scripts for debugging

### Images Not Loading

1. **Check image paths**
   - All paths should be relative
   - Check case sensitivity (Linux is case-sensitive)

2. **Check file permissions**
   - Image files need read permissions (644)

3. **Verify images uploaded**
   - Check in cPanel File Manager
   - Ensure images in correct folders

### Slow Performance

1. **Optimize images**
   - Reduce file sizes
   - Use appropriate formats

2. **Enable caching**
   - Use .htaccess caching rules
   - Or cPanel caching tools

3. **Minimize CSS/JS**
   - Combine files
   - Remove unnecessary code

4. **Check server resources**
   - Contact Truehost support if overloaded

## Support Resources

### Truehost Support
- **Email:** support@truehost.co.za
- **Phone:** 087 942 6060
- **Knowledge Base:** https://www.truehost.co.za/support

### cPanel Help
- **Official Documentation:** https://cpanel.net/docs/
- **Video Tutorials:** https://www.cpanel.net/

### General Web Hosting
- **Google Search Console Help:** https://support.google.com/search-console
- **Bing Webmaster Tools Help:** https://www.bing.com/webmasters/help

## Quick Reference

**Truehost Details:**
- Hosting Provider: Truehost (South Africa)
- Domain: btnatours.co.za
- Upload Method: FTP/SFTP to public_html
- SSL: AutoSSL (usually included)
- Email: Create in cPanel

**Important URLs:**
- Website: https://www.btnatours.co.za
- cPanel: https://cpanel.truehost.co.za (or provided URL)
- FTP: ftp.btnatours.co.za

**Credentials Storage:**
- Save in secure password manager
- Never commit to Git repository
- Use environment variables for secrets

---

**Last Updated:** September 26, 2026
**For:** BT New Adventure Tours
**Status:** Production Ready
