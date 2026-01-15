// Local assets - Core sections
import warehouseImg from "../assets/warehouse.jpg";
import packingImg from "../assets/packing.jpg";
import shippingImg from "../assets/shipping.jpg";
import assemblyImg from "../assets/assembly-line.jpg";
import websiteImg from "../assets/website.png";
import analyticsImg from "../assets/analytics.jpg";
import integrationImg from "../assets/integration.png";
import socialMediaImg from "../assets/social-media.png";

// Services images
import customerServiceImg from "../assets/customer-service.png";
import emailImg from "../assets/email.png";
import infographicsImg from "../assets/infographics.png";
import inventoryManagementImg from "../assets/inventory-management.png";
import marketingPlansImg from "../assets/marketing-plans.png";
import packagingImg from "../assets/packaging.png";
import pickPackShipImg from "../assets/pick-pack-ship.png";
import pressReleasesImg from "../assets/press-releases.png";
import prodPhotographyImg from "../assets/prod-photography.png";
import productionImg from "../assets/production.png";
import supplyChainImg from "../assets/supply-chain.png";
import videoProdImg from "../assets/video-prod.png";
import amazonWalmartImg from "../assets/amazon-walmart.png";
import accountingImg from "../assets/accounting.png";

// Brand development images
import brands1Img from "../assets/brands-1.png";
import brands2Img from "../assets/brands-2.png";

// Facilities images
import ourFacilitiesImg from "../assets/our-facilities.jpg";
import photoStudioImg from "../assets/photo-studio.jpg";
import videoStudioImg from "../assets/video-studio.png";
import warehouseSpace1Img from "../assets/warehouse-space-1.png";
import warehouseSpace2Img from "../assets/warehouse-space-2.png";
import warehousing1Img from "../assets/warehousing-1.png";
import warehousing2Img from "../assets/warehousing-2.png";

// About section images
import ourStoryImg from "../assets/our-story.png";
import staff1Img from "../assets/staff-1.jpg";
import staff2Img from "../assets/staff-2.jpg";
import staff3Img from "../assets/staff-3.jpg";
import staff4Img from "../assets/staff-4.jpg";
import staff5Img from "../assets/staff-5.jpg";
import staff6Img from "../assets/staff-6.jpg";
import staff7Img from "../assets/staff-7.jpg";
import staff8Img from "../assets/staff-8.jpg";

// Partnership section images
import loadSharingImg from "../assets/load-sharing.png";

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

  // Services images
  customerService: customerServiceImg,
  email: emailImg,
  infographics: infographicsImg,
  inventoryManagement: inventoryManagementImg,
  marketingPlans: marketingPlansImg,
  packaging: packagingImg,
  pickPackShip: pickPackShipImg,
  pressReleases: pressReleasesImg,
  prodPhotography: prodPhotographyImg,
  production: productionImg,
  supplyChain: supplyChainImg,
  videoProduction: videoProdImg,
  amazonWalmart: amazonWalmartImg,
  accounting: accountingImg,

  // Brand development
  brands1: brands1Img,
  brands2: brands2Img,

  // Facilities
  ourFacilities: ourFacilitiesImg,
  warehouse1: warehousing1Img,
  warehouse2: warehousing2Img,
  warehouseSpace1: warehouseSpace1Img,
  warehouseSpace2: warehouseSpace2Img,
  photoStudio: photoStudioImg,
  videoStudio: videoStudioImg,

  // About section
  ourStory: ourStoryImg,
  staff1: staff1Img,
  staff2: staff2Img,
  staff3: staff3Img,
  staff4: staff4Img,
  staff5: staff5Img,
  staff6: staff6Img,
  staff7: staff7Img,
  staff8: staff8Img,

  // Partnership
  loadSharing: loadSharingImg,

  // Additional warehouse/logistics images (keeping these Unsplash for variety)
  forklift:
    "https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?fm=jpg&q=80&w=2000",
  logistics:
    "https://plus.unsplash.com/premium_photo-1661901122974-e280f0c1efab?fm=jpg&q=80&w=2000",
  shipping:
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?fm=jpg&q=80&w=2000",
  containers:
    "https://images.unsplash.com/photo-1606964212858-c215029db704?fm=jpg&q=80&w=2000",

  // Fallback team image (keeping Unsplash as fallback)
  team: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?fm=jpg&q=80&w=2000",

  // Logo (imported from assets)
  logo: new URL(
    "../assets/ecommerce-solutions-dark-small.webp",
    import.meta.url
  ).href,
};
