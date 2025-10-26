// lib/accessoriesProducts.ts

export interface AccessoryProduct {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  category: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  compatibility: string[];
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
}

export const accessoriesProducts: AccessoryProduct[] = [
  {
    id: "1",
    slug: "jobobike-front-rack",
    name: "JOBOBIKE Front Rack",
    description: "Lightweight aluminum front rack with durable matte black powder coating, rustproof and perfect for all weather conditions.",
    fullDescription: "The JOBOBIKE front rack is made of lightweight aluminum with a durable, matte black powder coating. It is rustproof, making it perfect for all weather conditions. No matter whether you are traveling on rough terrain or in the city - the JOBOBIKE luggage rack is guaranteed not to fall down when suddenly turning or braking heavily.",
    price: 450,
    currency: "kr",
    image: "/images/front-rack/front-1.png",
    images: [
      "/images/front-rack/front-1.png",
      "/images/front-rack/front-2.png",
     
     
    ],
    category: ["Racks & Carriers"],
    specifications: [
      { label: "Material", value: "Aluminum Alloy" },
      { label: "Finish", value: "Matte Black Powder Coating" },
      { label: "Weight Capacity", value: "15kg" },
      { label: "Mounting", value: "Front Fork Mount" }
    ],
    features: [
      "Rustproof construction",
      "Lightweight aluminum design",
      "Durable matte black finish",
      "Secure mounting system",
      "All-weather performance"
    ],
    compatibility: [
      "JOBOBIKE Robin",
      "JOBOBIKE Robin ST",
      "JOBOBIKE Transer",
      "JOBOBIKE Commuter",
      "JOBOBIKE Linda",
      "JOBOBIKE Lyon",
      "JOBOBIKE Eddy",
      "JOBOBIKE Eddy X"
    ],
    inStock: true
  },
  {
    id: "2",
    slug: "jobobike-basket-with-wooden",
    name: "JOBOBIKE Basket with Wooden Handle",
    description: "Stylish integrated basket with wooden handle, perfect for carrying groceries and personal items on your e-bike.",
    fullDescription: "The JOBOBIKE basket with wooden handle combines functionality with elegant design. Made from durable materials with a beautiful wooden handle accent, it can be mounted on both front and rear racks. The integrated design ensures quick and easy installation without additional hardware.",
    price: 550,
    currency: "kr",
    image: "/images/basket/basket-1.png",
    images: [
      "/images/basket/basket-1.png",
      "/images/basket/basket-2.png",
     
    ],
    category: ["Baskets & Storage"],
    specifications: [
      { label: "Material", value: "Aluminum Alloy with Wooden Handle" },
      { label: "Finish", value: "Matte Black" },
      { label: "Capacity", value: "20L" },
      { label: "Mounting", value: "Front/Rear Rack Compatible" }
    ],
    features: [
      "Elegant wooden handle",
      "Integrated mounting system",
      "Quick installation",
      "Weather resistant",
      "Spacious 20L capacity"
    ],
    compatibility: [
      "JOBOBIKE Robin",
      "JOBOBIKE Transer",
      "JOBOBIKE Commuter",
      "JOBOBIKE Linda",
      "JOBOBIKE Lyon",
      "JOBOBIKE Eddy",
      "JOBOBIKE Sam"
    ],
    inStock: true
  },
  {
    id: "3",
    slug: "jobobike-cover-bag-sam",
    name: "JOBOBIKE Cover Bag for Sam",
    description: "Waterproof cover bag that protects your folding bike from dust, water and abrasions. Specially designed for JOBOBIKE Sam.",
    fullDescription: "This waterproof cover bag is specifically designed to protect your JOBOBIKE Sam folding bike from dust, water, and abrasions. The durable material ensures long-lasting protection, while the compact design makes it easy to store and transport your bike. Perfect for travel and storage.",
    price: 650,
    currency: "kr",
    image: "/images/Thermal/thermal-bag-1.png ",
    images: [
      "/images/Thermal/thermal-bag-1.png",
      "/images/Thermal/thermal-bag-2.png",
      "/images/Thermal/thermal-bag-3.png",
     
    ],
    category: ["Protection & Storage"],
    specifications: [
      { label: "Material", value: "600D Oxford Fabric" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Size", value: "85cm x 43cm x 72cm" },
      { label: "Weight", value: "1.2kg" }
    ],
    features: [
      "Waterproof protection",
      "Dust and scratch resistant",
      "Reinforced carrying handles",
      "Compact storage",
      "Easy to clean"
    ],
    compatibility: ["JOBOBIKE Sam"],
    inStock: true
  },
  {
    id: "4",
    slug: "jobobike-lock",
    name: "JOBOBIKE Lock",
    description: "Heavy-duty bike lock providing maximum security for your e-bike with anti-theft protection and weather-resistant construction.",
    fullDescription: "The JOBOBIKE Lock offers premium security for your electric bike. Featuring a hardened steel construction with anti-pick and anti-drill protection, this lock ensures your bike stays safe. The weather-resistant design works in all conditions, and the compact size makes it easy to carry.",
    price: 350,
    currency: "kr",
    image : "/images/lock/lock-1.png",
    images: [
      "/images/lock/lock-1.png",
      "/images/lock/lock-2.png",
      
    ],
    category: ["Security"],
    specifications: [
      { label: "Material", value: "Hardened Steel" },
      { label: "Security Level", value: "Level 9" },
      { label: "Length", value: "120cm" },
      { label: "Diameter", value: "12mm" }
    ],
    features: [
      "Hardened steel construction",
      "Anti-pick cylinder",
      "Anti-drill protection",
      "Weather resistant coating",
      "Includes 3 keys"
    ],
    compatibility: ["Universal - All JOBOBIKE Models"],
    inStock: true
  },
  {
    id: "5",
    slug: "jobobike-phone-holder-waterproof",
    name: "JOBOBIKE Phone Holder (Waterproof Cover)",
    description: "Secure phone holder with waterproof cover, allowing you to use your phone for navigation while protecting it from the elements.",
    fullDescription: "Keep your phone accessible and protected with the JOBOBIKE Phone Holder. The waterproof cover allows full touchscreen functionality while protecting against rain and dust. The secure mounting system ensures your phone stays in place even on rough terrain, making it perfect for GPS navigation.",
    price: 250,
    currency: "kr",
    image: "/images/holder/holder-1.png",
    images: [
      "/images/holder/holder-1.png",
      "/images/holder/holder-2.png",
      "/images/holder/holder-3.png",
      
    ],
    category: ["Electronics & Holders"],
    specifications: [
      { label: "Compatibility", value: "Phones up to 6.7 inches" },
      { label: "Water Resistance", value: "IPX6" },
      { label: "Mounting", value: "Handlebar Mount" },
      { label: "Rotation", value: "360°" }
    ],
    features: [
      "Waterproof touchscreen cover",
      "360° rotation",
      "Secure locking mechanism",
      "Quick release system",
      "Universal phone compatibility"
    ],
    compatibility: ["Universal - All JOBOBIKE Models"],
    inStock: true
  },
  {
    id: "6",
    slug: "jobobike-bicycle-mirror",
    name: "JOBOBIKE Bicycle Mirror",
    description: "High-quality rearview mirror providing excellent visibility and safety while riding your e-bike.",
    fullDescription: "The JOBOBIKE Bicycle Mirror enhances your riding safety with a wide field of view and shatterproof glass. The adjustable arm allows you to find the perfect viewing angle, while the sturdy mounting system keeps it secure even on bumpy roads. The sleek design complements your bike's aesthetics.",
    price: 200,
    currency: "kr",
    image:"/images/mirror/mirror-1.png",
    images: [
      "/images/mirror/mirror-1.png",
      "/images/mirror/mirror-2.png",
      
    ],
    category: ["Safety & Visibility"],
    specifications: [
      { label: "Mirror Size", value: "80mm diameter" },
      { label: "Material", value: "Shatterproof Glass" },
      { label: "Mounting", value: "Handlebar Mount" },
      { label: "Adjustment", value: "Multi-angle" }
    ],
    features: [
      "Shatterproof mirror glass",
      "Wide viewing angle",
      "Adjustable positioning",
      "Sturdy mounting bracket",
      "Easy installation"
    ],
    compatibility: ["Universal - All JOBOBIKE Models"],
    inStock: true
  },
  {
    id: "7",
    slug: "jobobike-helmet",
    name: "JOBOBIKE Bicycle Helmet",
    description: "CE EN 1078 and CPSC certified safety helmet with impact-resistant construction and optimal ventilation for comfortable riding.",
    fullDescription: "The JOBOBIKE bicycle helmet was tested for safety by CE EN 1078 in Europe and CPSC in the USA. Impact-resistant PC material on the outside and a shock-absorbing EPS unibody on the inside provide maximum protection. The helmet features optimal ventilation, adjustable fit system, and removable padding for comfort during long rides.",
    price: 490,
    currency: "kr",
    image:"/images/helmet/helmet-1.png",
    images: [
      "/images/helmet/helmet-1.png",
      "/images/helmet/helmet-2.png",
      
    ],
    category: ["Safety & Visibility"],
    specifications: [
      { label: "Certification", value: "CE EN 1078, CPSC" },
      { label: "Material", value: "PC Shell + EPS Foam" },
      { label: "Weight", value: "280g" },
      { label: "Ventilation", value: "18 Air Vents" }
    ],
    features: [
      "Dual safety certification",
      "Impact-resistant construction",
      "Optimal ventilation system",
      "Adjustable fit dial",
      "Removable padding",
      "Reflective elements"
    ],
    compatibility: ["Universal"],
    inStock: true,
    sizes: ["S (52-56cm)", "M (56-60cm)", "L (60-64cm)"],
    colors: ["Black", "White", "Blue", "Red"]
  },
  {
    id: "8",
    slug: "jobobike-bottle-holder",
    name: "JOBOBIKE Bottle Holder",
    description: "Durable aluminum bottle holder that securely holds your water bottle during rides, easy to install and compatible with most bottles.",
    fullDescription: "Stay hydrated on your rides with the JOBOBIKE Bottle Holder. Made from lightweight aluminum with a secure grip design, it holds bottles firmly in place even on rough terrain. The universal mounting system fits all JOBOBIKE frames, and the sleek design matches your bike's aesthetic.",
    price: 150,
    currency: "kr",
    image:"/images/bottle/bottle-1.png",
    images: [
      "/images/bottle/bottle-1.png",
      "/images/bottle/bottle-2.png",
     
    ],
    category: ["Accessories"],
    specifications: [
      { label: "Material", value: "Aluminum Alloy" },
      { label: "Finish", value: "Matte Black" },
      { label: "Bottle Capacity", value: "500-750ml" },
      { label: "Mounting", value: "Frame Mount" }
    ],
    features: [
      "Lightweight aluminum construction",
      "Secure grip design",
      "Universal bottle compatibility",
      "Easy installation",
      "Sleek appearance"
    ],
    compatibility: ["Universal - All JOBOBIKE Models"],
    inStock: true
  },
  {
    id: "9",
    slug: "jobobike-pannier-bag",
    name: "JOBOBIKE Pannier Bag",
    description: "Spacious waterproof pannier bag with multiple compartments, perfect for commuting and touring with your e-bike.",
    fullDescription: "The JOBOBIKE Pannier Bag offers ample storage space for your daily commute or weekend adventures. With waterproof construction, multiple compartments, and reflective strips for safety, this bag combines functionality with durability. The quick-release mounting system makes it easy to attach and remove from your rack.",
    price: 750,
    currency: "kr",
    image:"/images/pannier/pannier-1.png",
    images: [
      "/images/pannier/pannier-1.png",
      "/images/pannier/pannier-2.png",
      "/images/pannier/pannier-3.png",
      
    ],
    category:[ "Baskets & Storage"],
    specifications: [
      { label: "Material", value: "600D Polyester" },
      { label: "Water Resistance", value: "IPX5" },
      { label: "Capacity", value: "25L" },
      { label: "Mounting", value: "Quick-Release Rack System" }
    ],
    features: [
      "Waterproof construction",
      "Multiple compartments",
      "Reflective safety strips",
      "Quick-release mounting",
      "Reinforced bottom",
      "Shoulder strap included"
    ],
    compatibility: [
      "JOBOBIKE Robin",
      "JOBOBIKE Transer",
      "JOBOBIKE Commuter",
      "JOBOBIKE Linda",
      "JOBOBIKE Sam",
      "JOBOBIKE Romer"
    ],
    inStock: true
  }
];

// Helper function to get product by slug
export const getAccessoryBySlug = (slug: string): AccessoryProduct | undefined => {
  return accessoriesProducts.find(product => product.slug === slug);
};

// Helper function to get products by category
export const getAccessoriesByCategory = (category: string[]): AccessoryProduct[] => {
  return accessoriesProducts.filter(product => product.category === category);
};

