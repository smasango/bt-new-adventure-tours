// ============================================================
// BT NEW ADVENTURE TOURS - MAIN JAVASCRIPT
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initForms();
  initGallery();
  initWhatsAppButton();
  initScrollAnimations();
  initServiceCards();
});

// ============================================================
// NAVIGATION HANDLING
// ============================================================

function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (hamburger && !hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

// ============================================================
// FORM HANDLING
// ============================================================

function initForms() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmission(form);
    });
  });
}

function handleFormSubmission(form) {
  // Validate form
  if (!validateForm(form)) {
    return;
  }
  
  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Log form data (in production, this would be sent to a server)
  console.log('Form submitted:', data);
  
  // Show success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.innerHTML = `
    <div style="background-color: #2D7D3F; color: white; padding: 15px 20px; border-radius: 4px; margin-bottom: 20px; text-align: center;">
      <strong>Thank you for contacting BT New Adventure Tours!</strong>
      <p style="margin-top: 8px;">We have received your enquiry and will be in touch shortly.</p>
    </div>
  `;
  
  form.insertBefore(successMessage, form.firstChild);
  form.reset();
  
  // Remove success message after 5 seconds
  setTimeout(() => {
    successMessage.remove();
  }, 5000);
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    // Required field validation
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.style.borderColor = '#E63946';
      isValid = false;
    } else {
      input.style.borderColor = '';
    }
    
    // Email validation
    if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        input.style.borderColor = '#E63946';
        isValid = false;
      }
    }
    
    // Phone validation (basic)
    if (input.type === 'tel' && input.value) {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(input.value)) {
        input.style.borderColor = '#E63946';
        isValid = false;
      }
    }
  });
  
  return isValid;
}

// ============================================================
// GALLERY & LIGHTBOX
// ============================================================

let currentLightboxIndex = 0;
let lightboxImages = [];

function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    if (img) {
      lightboxImages[index] = img.src;
      item.addEventListener('click', () => {
        openLightbox(index);
      });
    }
  });
  
  // Lightbox controls
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const closeBtn = lightbox.querySelector('.lightbox-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox').classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightboxImage();
      if (e.key === 'ArrowRight') nextLightboxImage();
    }
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = lightbox.querySelector('img');
  img.src = lightboxImages[index];
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function nextLightboxImage() {
  if (currentLightboxIndex < lightboxImages.length - 1) {
    openLightbox(currentLightboxIndex + 1);
  }
}

function prevLightboxImage() {
  if (currentLightboxIndex > 0) {
    openLightbox(currentLightboxIndex - 1);
  }
}

// ============================================================
// WHATSAPP INTEGRATION
// ============================================================

function initWhatsAppButton() {
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  if (whatsappBtn) {
    // The WhatsApp number should be in the href from HTML
    // Just ensure it's clickable and working
    whatsappBtn.addEventListener('click', function(e) {
      // Allow default action (opening WhatsApp)
    });
  }
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // Observe cards and sections
  document.querySelectorAll('.card, .service-card, .process-step, .feature-item').forEach(el => {
    observer.observe(el);
  });
}

// ============================================================
// SERVICE CARD HOVER EFFECTS
// ============================================================

function initServiceCards() {
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.card-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.card-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Format phone number for WhatsApp
function getWhatsAppLink(phoneNumber) {
  const number = phoneNumber.replace(/\D/g, ''); // Remove non-numeric
  return `https://wa.me/${number}?text=Hi%20BT%20New%20Adventure%20Tours%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`;
}

// Lazy load images
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================================

// Ensure all interactive elements are keyboard accessible
document.addEventListener('keydown', function(e) {
  // Focus visible for keyboard navigation
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('click', function() {
  document.body.classList.remove('keyboard-nav');
});

// Skip to main content link
const skipLink = document.querySelector('.skip-to-main');
if (skipLink) {
  skipLink.addEventListener('click', function(e) {
    e.preventDefault();
    const main = document.querySelector('main') || document.querySelector('.main-content');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ============================================================
// ERROR HANDLING
// ============================================================

window.addEventListener('error', function(e) {
  console.error('Error:', e.error);
});

// ============================================================
// PERFORMANCE MONITORING
// ============================================================

// Log page load time
window.addEventListener('load', function() {
  if (performance.timing) {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
  }
});
