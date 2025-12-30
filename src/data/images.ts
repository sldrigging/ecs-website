// Local assets
import warehouseImg from "../assets/warehouse.jpg";
import packingImg from "../assets/packing.jpg";
import shippingImg from "../assets/shipping.jpg";
import assemblyImg from "../assets/assembly-line.jpg";
import websiteImg from "../assets/website.png";
import analyticsImg from "../assets/analytics.jpg";
import integrationImg from "../assets/integration.png";
import socialMediaImg from "../assets/social-media.png";

// Unsplash image URLs for the ECS website
export const images = {
  // Hero section - Local asset
  hero: warehouseImg,

  // New local assets for services/sections
  packing: packingImg,
  shipping_local: shippingImg,
  assembly: assemblyImg,
  website: websiteImg,
  analytics: analyticsImg,
  integration_local: integrationImg,
  socialMedia: socialMediaImg,
  rank1: new URL("../assets/rank1.png", import.meta.url).href,

  // Facilities
  warehouse1:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?fm=jpg&q=80&w=2000",
  warehouse2:
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?fm=jpg&q=80&w=2000",
  production:
    "https://plus.unsplash.com/premium_photo-1663040001568-f07cab70d71f?fm=jpg&q=80&w=2000",

  // Additional warehouse/logistics images
  forklift:
    "https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?fm=jpg&q=80&w=2000",
  logistics:
    "https://plus.unsplash.com/premium_photo-1661901122974-e280f0c1efab?fm=jpg&q=80&w=2000",
  shipping:
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?fm=jpg&q=80&w=2000",
  containers:
    "https://images.unsplash.com/photo-1606964212858-c215029db704?fm=jpg&q=80&w=2000",

  // About/Team
  team: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?fm=jpg&q=80&w=2000",

  // Logo (imported from assets)
  logo: new URL(
    "../assets/ecommerce-solutions-dark-small.webp",
    import.meta.url
  ).href,
};
