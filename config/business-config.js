// BT New Adventure Tours - Business Configuration
// Update these values in one place and they'll be used throughout the website

const BUSINESS_CONFIG = {
  // Company Information
  businessName: 'BT NEW ADVENTURE TOURS',
  tagline: 'Discover What South Africa Has To Offer As A Tourist Destination...',
  secondaryTagline: 'We Tailor Your Tours...',
  
  // Contact Information
  phone: '060 484 2816',
  email: 'Brenda@btnatours.co.za',
  website: 'https://www.btnatours.co.za',
  
  // WhatsApp Configuration
  whatsappNumber: '27604842816', // International format without +
  whatsappNumberFormatted: '060 484 2816',
  
  // Branding Colors (from logo analysis)
  colors: {
    primary: '#F4A000',      // Gold/Yellow (BT letters)
    secondary: '#1B3A5E',    // Navy Blue (T letter, Tours text)
    accent1: '#E63946',      // Red (Adventure text, jacket)
    accent2: '#2D7D3F',      // Green (New text, pants)
    white: '#FFFFFF',
    darkGray: '#333333',
    lightGray: '#F8F9FA',
  },
  
  // Services
  services: [
    { id: 'holiday', name: 'Holiday & Leisure', icon: 'palm-tree' },
    { id: 'accommodation', name: 'Accommodation', icon: 'hotel' },
    { id: 'tours', name: 'Tours', icon: 'map' },
    { id: 'safaris', name: 'Safaris', icon: 'binoculars' },
    { id: 'conference', name: 'Pre- & Post-Conference Tours', icon: 'briefcase' },
    { id: 'excursions', name: 'Excursions', icon: 'compass' },
    { id: 'transfers', name: 'Transfers', icon: 'car' },
    { id: 'flights', name: 'Flight Booking', icon: 'plane' },
    { id: 'shuttle', name: 'Airport Shuttle', icon: 'van' },
    { id: 'chauffeur', name: 'Chauffeur Services', icon: 'driver' },
  ],
  
  // Attractions
  attractions: [
    { name: 'Union Buildings', region: 'Pretoria', category: 'heritage' },
    { name: 'Cradle of Humankind', region: 'Gauteng', category: 'heritage' },
    { name: 'Mapungubwe', region: 'Northern Province', category: 'heritage' },
    { name: 'Apartheid Museum', region: 'Johannesburg', category: 'history' },
    { name: 'Robben Island', region: 'Cape Town', category: 'history' },
    { name: 'Liliesleaf Farm', region: 'Johannesburg', category: 'history' },
    { name: 'Hector Pieterson Memorial', region: 'Soweto', category: 'history' },
    { name: 'Mandela House', region: 'Soweto', category: 'history' },
    { name: 'Maboneng', region: 'Johannesburg', category: 'culture' },
    { name: 'Kruger National Park', region: 'Mpumalanga', category: 'wildlife' },
    { name: 'Palace of Justice', region: 'Pretoria', category: 'heritage' },
    { name: 'Constitution Hill', region: 'Johannesburg', category: 'history' },
    { name: 'Magaliesburg', region: 'North West', category: 'nature' },
    { name: 'Gold Reef City', region: 'Johannesburg', category: 'entertainment' },
    { name: 'Hartbeespoort Dam', region: 'North West', category: 'nature' },
    { name: 'Lesedi Cultural Village', region: 'Gauteng', category: 'culture' },
    { name: 'Table Mountain', region: 'Cape Town', category: 'nature' },
    { name: 'Victoria Falls', region: 'Zimbabwe/Zambia', category: 'nature' },
    { name: 'District Six', region: 'Cape Town', category: 'history' },
  ],
  
  // Featured Experiences
  featuredExperiences: [
    {
      id: 'johannesburg',
      title: 'Johannesburg & Soweto',
      description: 'Explore Johannesburg\'s vibrant history, culture and urban experiences',
      image: 'johannesburg'
    },
    {
      id: 'capetown',
      title: 'Cape Town',
      description: 'Discover Table Mountain, District Six and the city\'s surrounding attractions',
      image: 'capetown'
    },
    {
      id: 'kruger',
      title: 'Kruger National Park',
      description: 'Experience South Africa\'s incredible wildlife and natural landscapes',
      image: 'kruger'
    },
    {
      id: 'pretoria',
      title: 'Pretoria',
      description: 'Explore attractions including the Union Buildings and surrounding destinations',
      image: 'pretoria'
    },
    {
      id: 'cradle',
      title: 'Cradle of Humankind',
      description: 'Discover one of South Africa\'s most significant heritage destinations',
      image: 'cradle'
    },
    {
      id: 'panorama',
      title: 'Mpumalanga & Panorama Route',
      description: 'Experience scenic landscapes and natural wonders of South Africa\'s highlands',
      image: 'panorama'
    }
  ],
  
  // Copyright Year
  copyrightYear: new Date().getFullYear()
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BUSINESS_CONFIG;
}
