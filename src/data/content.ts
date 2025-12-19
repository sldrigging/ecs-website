export interface Service {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
  icon: string;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'websites',
    title: 'E-commerce Websites',
    subtitle: 'We Know How To Show Up On "Page 1"',
    points: [
      'We create a site plan that is logical and easy to navigate.',
      'Our front-end and back-end developers create the site using AI to make sure it is findable by AI.',
      'We create and use content that is searchable and findable by search engines.',
    ],
    icon: '🌐',
  },
  {
    id: 'integration',
    title: 'Integration',
    subtitle: 'Connecting the Platforms to Work as One',
    points: [
      'Integration is complex and problematic.',
      'We use a proven group of applications that have been synchronized and perform at a high level.',
    ],
    icon: '⚙️',
  },
  {
    id: 'advertising',
    title: 'Paid Search Advertising',
    subtitle: 'Over 21 Years of Experience',
    points: [
      'We create and develop campaigns.',
      'These campaigns are monitored daily and constantly adjusted until they are dialed in.',
      'Once dialed in, they require daily management to maintain cost control.',
    ],
    icon: '📊',
  },
  {
    id: 'infographics',
    title: 'Infographics',
    subtitle: 'Highly Effective Visual Communication',
    points: [
      'We create infographics for features on site pages, social media and blast email campaigns.',
      'Visual content that drives engagement and conversions.',
    ],
    icon: '📈',
  },
];

export const facilities: Facility[] = [
  {
    id: 'warehousing',
    title: 'Warehousing',
    subtitle: 'Receiving, Storage & Shipping',
    description: 'State-of-the-art warehouse facilities equipped to handle all your ecommerce fulfillment needs. From receiving inventory to storage and shipping, we provide comprehensive solutions.',
    image: '/images/warehouse-1.jpg',
  },
  {
    id: 'production',
    title: 'Production',
    subtitle: 'From CNC Machining to Producing Coatings',
    description: 'Experts in CNC swiss machining, CNC milling and turning, and management of process oriented production.',
    image: '/images/production.jpg',
  },
];

export const stats: Stat[] = [
  {
    id: 'years',
    value: 21,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    id: 'orders',
    value: 1000000,
    suffix: '+',
    label: 'Orders Shipped',
  },
  {
    id: 'packages',
    value: 6000,
    suffix: '',
    label: 'Packages Per Day',
  },
];

export const features: Feature[] = [
  {
    id: 'innovation',
    icon: '◈',
    title: 'Innovation Driven',
    description: 'Leveraging the latest technology for optimal results',
  },
  {
    id: 'partnership',
    icon: '◈',
    title: 'Partnership Focused',
    description: 'Building long-term relationships with our clients',
  },
  {
    id: 'logistics',
    icon: '◈',
    title: 'Logistics Experts',
    description: 'Over 21 years of ecommerce fulfillment experience',
  },
];

export const partnershipData = {
  title: 'Load Sharing',
  subtitle: 'Cost Savings For Our Clients',
  description: 'Fixed costs are apportioned across clients, creating significant savings.',
  charts: [
    { label: 'Rent & Utilities', percentage: 77.14 },
    { label: 'Admin Salaries', percentage: 70 },
  ],
};

export const contactInfo = {
  email: 'info@ecommercesolutions.com',
  phone: '+1 (555) 123-4567',
  location: 'Your Warehouse Location',
};

export const navigation = [
  { id: 'services', label: 'Services' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'partnership', label: 'Partnership' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];
