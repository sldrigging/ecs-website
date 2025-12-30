export interface Service {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
  icon: string;
  secondImage?: string; // Optional: for dual-image layouts (no bullet points)
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description?: string; // Optional: for simple text description
  points?: string[]; // Optional: for bullet point list
  image: string;
  secondImage?: string; // Optional: for dual-image layouts
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
    id: "websites",
    title: "E-commerce Websites",
    subtitle: 'We Know How To Show Up On "Page 1"',
    points: [
      "We create a site plan that is logical and easy to navigate.",
      "Our front-end and back-end developers create the site using AI to make sure it is findable by AI.",
      "We create and use content that is searchable and findable by search engines.",
    ],
    icon: "🌐",
  },
  {
    id: "integration",
    title: "Integration",
    subtitle: "Connecting the Platforms to Work as One",
    points: [
      "Integration is complex and problematic.",
      "We use a proven group of applications that have been synchronized and perform at a high level.",
    ],
    icon: "⚙️",
  },
  {
    id: "advertising",
    title: "Paid Search Advertising",
    subtitle: "Over 21 Years of Experience",
    points: [
      "We create and develop campaigns.",
      "These campaigns are monitored daily and constantly adjusted until they are dialed in.",
      "Once dialed in, they require daily management to maintain cost control.",
    ],
    icon: "📊",
  },
  {
    id: "socialMedia",
    title: "Social Media Advertising",
    subtitle: "Created & Developed for Targeted Audiences",
    points: [
      "Social media audit.",
      "Media account strategy, design and implementation.",
      "Follower/subscriber network building.",
      "Content social posts.",
    ],
    icon: "📱",
  },
  {
    id: "pressReleases",
    title: "Press Releases",
    subtitle: "News & New Products to Targeted Publications",
    points: [
      "Free advertising.",
      "Goes in both print and digital media.",
      "Released through blog posts that become searchable content.",
    ],
    icon: "📰",
  },
  {
    id: "amazonWalmart",
    title: "Sell on Amazon & Walmart",
    subtitle: "We Create Store Fronts & Campaigns",
    points: [
      "Store front creation using existing content from main website.",
      "Develop and maintain advertising campaigns.",
    ],
    icon: "🛒",
  },
  {
    id: "blastEmail",
    title: "Blast Email Campaigns",
    subtitle: "Targeted & Effective – Gets Results",
    points: [
      "We develop or acquire databases with valid email addresses.",
      "Strategic messaging is determined, and infographics are created.",
      "Emails are blasted out on optimal days and times to maximize results.",
      "All campaigns are designed with a call to action and click that takes viewer to the relevant landing page.",
    ],
    icon: "📧",
  },
  {
    id: "infographics",
    title: "Infographics",
    subtitle: "Highly Effective Visual Communication",
    points: [
      "We create infographics for features on site pages, social media and blast email campaigns.",
      "Visual content that drives engagement and conversions.",
    ],
    icon: "📈",
  },
  {
    id: "videoProduction",
    title: "Video Production",
    subtitle: "From Company Videos to Short Teasers",
    points: [
      "Adam Tomblin is our videographer and came to us from Disney.",
      "Instructional videos.",
      "Short videos for social media campaigns.",
      "Company videos.",
      "In-studio or in the field.",
      "We use a drone when needed.",
    ],
    icon: "🎬",
  },
  {
    id: "productPhotography",
    title: "Product Photography",
    subtitle: "Properly Lit High-Resolution Images SELL Products",
    points: [
      "We use an Ortery product photography system with light box and software that controls light.",
      "To get depth, multiple images at different exposures are taken rapidly and merged into a single image.",
      "Images are instantly saved in multiple formats.",
      "Box is equipped with a 360° turntable.",
    ],
    icon: "📷",
  },
  {
    id: "brandDevelopment",
    title: "Brand Development",
    subtitle: "Registered Trademark Brands That We've Created",
    points: [],
    icon: "™️",
    secondImage: "team", // Placeholder - user will replace
  },
  {
    id: "marketingPlans",
    title: "Marketing Plans",
    subtitle: "Utilizing All Platforms & Methods",
    points: [
      "Identify target market.",
      "Objectives.",
      "Direct sales effort.",
      "Ecommerce site is the foundation.",
      "Advertising",
      "KPIs.",
    ],
    icon: "📋",
  },
  {
    id: "warehousingService",
    title: "Warehousing",
    subtitle: "Receiving, Storage & Shipping",
    points: [],
    icon: "🏭",
    secondImage: "warehouse2", // Second image for dual-image layout
  },
  {
    id: "pickPackShip",
    title: "Pick, Pack, Ship",
    subtitle: "Fast, Accurate Order Processing",
    points: [
      "Electronic orders are delivered to order pickers.",
      "Picked orders are delivered to the packing conveyors where a quality checker inspects orders.",
      "Goods are boxed and labeled for UPS or motor freight shipment.",
      "Orders received by 2:00 pm are shipped same day.",
    ],
    icon: "📦",
  },
  {
    id: "inventoryManagement",
    title: "Inventory Management",
    subtitle: "Accurate Management of Stock By Location",
    points: [
      "Every rack space and bin in the warehouse has an alphanumeric identifier and bar code.",
      "Inventory is managed in Microsoft Dynamics 365 Business Central and Warehouse Insights 3rd party application.",
      "Management focus and emphasis is on the discipline of processes – accurate receiving & order picking.",
    ],
    icon: "📊",
  },
  {
    id: "supplyChain",
    title: "Supply Chain Management",
    subtitle: "From Vendor Relations to Reorder Points",
    points: [
      "Analysis of stock turns & vendor capabilities.",
      "Setting optimal stock reorder points.",
      "Evaluate vendors and vendor performance.",
      "Coordination with vendors to maximize inventory turns",
      "Negotiation of payment terms.",
    ],
    icon: "🔗",
  },
  {
    id: "packaging",
    title: "Packaging",
    subtitle: "From Small Parts to Totes",
    points: [
      "Small parts bagging.",
      "From higher volume totes to smaller containers.",
      "Dispensing into paint containers.",
    ],
    icon: "📦",
  },
  {
    id: "productionService",
    title: "Production",
    subtitle: "From CNC Machining to Producing Coatings",
    points: [
      "Experts in CNC swiss machining.",
      "CNC milling and turning.",
      "Management of process oriented production.",
    ],
    icon: "⚙️",
  },
  {
    id: "customerService",
    title: "Customer Service",
    subtitle: "Order Processing · Technical Assistance",
    points: [
      "Our customer service staff is courteous and focused on the needs of the customer.",
      "Goal is to ensure a positive customer experience and ensure repeat business.",
    ],
    icon: "🎧",
  },
  {
    id: "accounting",
    title: "Accounting",
    subtitle: "Daily Processes & Monthly Reporting",
    points: [
      "Merchant account reconciliation.",
      "Accounts Payable.",
      "Daily batch processing orders.",
      "Inventory oversight.",
      "Financial statements.",
    ],
    icon: "💼",
  },
];

export const facilities: Facility[] = [
  {
    id: "ourFacilities",
    title: "Our Facilities",
    subtitle: "87,500 Sq Ft.",
    points: ["Warehousing", "Packaging", "Pick, pack, ship", "Production"],
    image: "warehouse1", // Placeholder - user will replace
  },
  {
    id: "warehouseSpace",
    title: "Warehouse Space",
    subtitle: "Receiving, Storage & Shipping",
    image: "shipping_local", // Placeholder - user will replace
    secondImage: "warehouse2", // Dual-image layout
  },
  {
    id: "videoStudio",
    title: "Video Studio",
    subtitle: "Professionally equipped video studio.",
    image: "team", // Placeholder - user will replace
  },
  {
    id: "photoStudio",
    title: "Product Photography Studio",
    subtitle: "Professional product photography equipment.",
    image: "containers", // Placeholder - user will replace
  },
  {
    id: "production",
    title: "Production",
    subtitle: "From CNC Machining to Producing Coatings",
    description:
      "Experts in CNC swiss machining, CNC milling and turning, and management of process oriented production.",
    image: "assembly", // Placeholder - user will replace
  },
];

export const stats: Stat[] = [
  {
    id: "years",
    value: 21,
    suffix: "+",
    label: "Years Experience",
  },
  {
    id: "orders",
    value: 1000000,
    suffix: "+",
    label: "Orders Shipped",
  },
  {
    id: "packages",
    value: 6000,
    suffix: "",
    label: "Packages Per Day",
  },
];

export const features: Feature[] = [
  {
    id: "innovation",
    icon: "◈",
    title: "Innovation Driven",
    description: "Leveraging the latest technology for optimal results",
  },
  {
    id: "partnership",
    icon: "◈",
    title: "Partnership Focused",
    description: "Building long-term relationships with our clients",
  },
  {
    id: "logistics",
    icon: "◈",
    title: "Logistics Experts",
    description: "Over 21 years of ecommerce fulfillment experience",
  },
];

export interface AboutItem {
  id: string;
  title: string;
  subtitle?: string;
  points?: string[];
  image?: string;
  secondImage?: string;
  isCollage?: boolean; // For image grid layouts like Staff
  collageImages?: string[]; // Array of image keys for collage
}

export const aboutItems: AboutItem[] = [
  {
    id: "ourStory",
    title: "Our Story",
    points: [
      "Ecommerce Solutions was founded in 2024.",
      "The roots of the company go back to 2004 when E-Rigging.com was created as part of Sea-Land Distributors.",
      "In 2016, Sea-Land Distributors ceased being a wholesale distributor to focus 100% on ecommerce.",
      "In 2018, the WebDev department was created and personnel added to write website code, manage data, manage paid search advertising and social media campaigns.",
      "Developed E-Rigging.com into an $18 million ecommerce site and the leading rigging products website in the industry.",
    ],
    image: "warehouse1", // Placeholder - user will replace
  },
  {
    id: "staff",
    title: "Staff",
    isCollage: true,
    collageImages: [
      "team", // Placeholder images - user will replace
      "team",
      "team",
      "team",
      "team",
      "team",
      "team",
      "team",
    ],
  },
];

export interface PartnershipItem {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  points?: string[];
  leftColumn?: { heading: string; items: string[] };
  rightColumn?: { heading: string; items: string[] };
  image?: string;
  secondImage?: string;
}

export const partnershipItems: PartnershipItem[] = [
  {
    id: "operatingCosts",
    title: "Operating Costs",
    subtitle: "Who Pays For What",
    leftColumn: {
      heading: "ECS Pays – Invoices to Client:",
      items: [
        "Building lease & utilities – if space used",
        "All personnel & payroll taxes",
        "Worker's comp insurance",
        "Website & software related expenses",
        "Office supplies & expenses",
      ],
    },
    rightColumn: {
      heading: "Clients Pay For Variable Costs:",
      items: [
        "Shopify – based on sales",
        "Paid search advertising",
        "Social media advertising",
        "Freight",
      ],
    },
  },
  {
    id: "loadSharing",
    title: "Load Sharing",
    subtitle: "Cost Savings For Our Clients",
    description:
      "Fixed Costs Are Apportioned. Other Fixed Cost Categories Are Calculated The Same Way.",
    image: "warehouse1", // Placeholder
  },
  {
    id: "fixedCostAccounts",
    title: "Fixed Cost Accounts",
    subtitle: "Apportioned",
    description:
      "Expenses are apportioned by % of cost based on estimated load or burden on company or by square footage for rent.",
    leftColumn: {
      heading: "",
      items: [
        "Rent",
        "Utilities, security, building maintenance",
        "Office supplies",
        "Office expense",
        "Avalara tax management service",
        "Amazon marketplace management per store",
        "Jira – project management system",
        "Chat GPT service",
        "Adobe Creative Suite",
      ],
    },
    rightColumn: {
      heading: "",
      items: [
        "All payroll",
        "Payroll taxes, HR expense, healthcare, etc.",
        "Worker's comp insurance",
        "MS Office/email",
        "Microsoft Dynamics 365 Business Central",
        "Restech IT support",
        "Celigo application programming interface",
        "Trustpilot 3rd party aggregator",
        "Klaviyo blast email service",
      ],
    },
  },
  {
    id: "variableCostAccounts",
    title: "Variable Cost Accounts",
    subtitle: "ECS to Manage These Expenses",
    leftColumn: {
      heading: "Billed Directly to Client's Account",
      items: [
        "Paid search advertising – Google, Bing, YouTube",
        "Social media advertising",
        "UPS freight",
        "Motor freight",
      ],
    },
    rightColumn: {
      heading: "ECS Pay & Invoice Back to Client",
      items: ["Shopify – based on sales", "Credit card processing fees"],
    },
  },
];

// Legacy structure for backward compatibility
export const partnershipData = {
  title: "Load Sharing",
  subtitle: "Cost Savings For Our Clients",
  description:
    "Fixed costs are apportioned across clients, creating significant savings.",
  charts: [
    { label: "Rent & Utilities", percentage: 77.14 },
    { label: "Admin Salaries", percentage: 70 },
  ],
};

export const contactInfo = {
  email: "info@ecommercesolutions.com",
  phone: "+1 (555) 123-4567",
  location: "Your Warehouse Location",
};

export const navigation = [
  { id: "services", label: "Services" },
  { id: "facilities", label: "Facilities" },
  { id: "partnership", label: "Partnership Structure" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];
