// src/lib/productData.ts

// src/lib/productData.ts
export interface ProductCard {
  id: string;
  name: string;
  slug: string;
  originalPrice: number;
  price: number;
  discount: string;
  image: string;
  images: string[];
  features: string[];
  badge?: string;
  category: string;
  rating: number;
  reviewCount: number;
  specifications: {
    motor: string;
    battery: string;
    range: string;
    speed: string;
    weight: string;
    wheelSize: string;
    foldable: boolean;
    brakes?: string;
    frame?: string;
    drivetrain?: string;
  };
  description: string;
  keyFeatures: string[];
  availableColors: string[];
  availableSizes: string[];
  whatsInTheBox: string[];
}

export const PRODUCTS_DATA: ProductCard[] = [
  {
    id: "1",
    name: "DYU D3F",
    slug: "dyu-d3f-mini-folding-electric-bike",
    originalPrice: 899,
    price: 449,
    discount: "50% OFF",
    image: "/images/d3f/d3f-main.png",
    images: [
      "/images/d3f/d3f-main.png",
      "/images/d3f/D3F-1.png",
      "/images/d3f/D3F-2.png",
      "/images/d3f/D3F-3.png",
      "/images/d3f/D3F-4.png",
      "/images/d3f/D3F-5.png",
      "/images/d3f/D3F-6.png",
      "/images/d3f/D3F-7.png",
      "/images/d3f/D3F-side.png",
    ],
    features: ["Ultra-compact 14\" design", "Quick fold", "Lightweight"],
    badge: "COMPACT KING",
    category: "Mini",
    rating: 4.5,
    reviewCount: 178,
    specifications: {
      motor: "250W Rear Hub Motor",
      battery: "36V 10Ah Lithium-ion",
      range: "37-45 miles",
      speed: "15.5 mph",
      weight: "35 lbs",
      wheelSize: "14 inch",
      foldable: true,
      brakes: "Disc brakes",
      frame: "Aluminum alloy"
    },
    description:
      "The DYU D3F is a compact, lightweight electric bike perfect for short commutes and easy storage. Small 14\" wheels and a quick fold make it extremely portable.",
    keyFeatures: [
      "Ultra-compact 14-inch design",
      "Foldable for easy storage",
      "Perfect for short commutes",
      "Lightweight and portable",
      "Budget-friendly option"
    ],
    availableColors: ["Matte Black", "White"],
    availableSizes: ["One-size (folding)"],
    whatsInTheBox: [
      "DYU D3F E-bike",
      "Charger",
      "User manual",
      "Tool kit",
      "Front light (installed)"
    ]
  },
  {
    id: "2",
    name: "DYU T1",
    slug: "dyu-t1-torque-sensor-electric-bike",
    originalPrice: 1299,
    price: 649,
    discount: "50% OFF",
    image: "/images/T1/t1-main.png",
    images: [
      "/images/T1/t1-main.png",
      "/images/T1/t1-1.png",
      "/images/T1/t1-2.png",
      "/images/T1/t1-3.png",
      "/images/T1/t1-4.png",
      "/images/T1/t1-5.png",
      "/images/T1/t1-6.png",
      "/images/T1/t1-7.png"
    ],
    features: ["Torque sensor", "Removable battery", "Shimano gears"],
    badge: "SMART CHOICE",
    category: "Smart",
    rating: 4.7,
    reviewCount: 156,
    specifications: {
      motor: "250W Mid-Drive with Torque Sensor",
      battery: "36V 12.5Ah removable",
      range: "35-50 miles",
      speed: "20 mph",
      weight: "42 lbs",
      wheelSize: "20 inch",
      foldable: true,
      brakes: "Disc brakes",
      frame: "Magnesium alloy",
      drivetrain: "Shimano derailleur"
    },
    description:
      "DYU T1 features a torque sensor for natural pedal assist and a premium lightweight frame — ideal if you want a refined e-bike riding experience.",
    keyFeatures: [
      "Torque sensor for natural pedal assist",
      "Removable battery",
      "Magnesium alloy frame",
      "Shimano derailleur system",
      "Smart features"
    ],
    availableColors: ["Glossy Black", "Glossy White", "Deep Ocean Green"],
    availableSizes: ["20 inch frame"],
    whatsInTheBox: [
      "DYU T1 E-bike",
      "Removable battery",
      "Charger",
      "Tool kit",
      "User manual"
    ]
  },
  {
    id: "3",
    name: "DYU C1",
    slug: "dyu-c1-26-inch-city-electric-bike",
    originalPrice: 1099,
    price: 599,
    discount: "45% OFF",
    image: "/images/C1/c1-main.png",
    images: [
      "/images/C1/c1-main.png",
      "/images/C1/c1-1.png",
      "/images/C1/c1-2.png",
      "/images/C1/c1-3.png",
      "/images/C1/c1-4.png",
      "/images/C1/c1-5.png",
      "/images/C1/c1-6.png",
      "/images/C1/c1-7.png"
    ],
    features: ["26\" wheels", "Front suspension", "Comfort geometry"],
    badge: "CITY CRUISER",
    category: "City",
    rating: 4.6,
    reviewCount: 134,
    specifications: {
      motor: "250W / 500W peak hub motor",
      battery: "36V 10Ah detachable",
      range: "37-60 miles",
      speed: "25 mph",
      weight: "55 lbs",
      wheelSize: "26 inch",
      foldable: true,
      brakes: "Disc brakes",
      frame: "Aluminum alloy"
    },
    description:
      "DYU C1 is made for city riders who need a comfortable, reliable e-bike with front suspension and stable 26\" wheels.",
    keyFeatures: [
      "26-inch wheels for stability",
      "Front suspension",
      "Shimano 7-speed transmission (varies)",
      "Detachable battery",
      "Comfortable riding position"
    ],
    availableColors: ["Matte Gray", "Midnight Blue"],
    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU C1 E-bike",
      "Charger",
      "Owner manual",
      "Bell",
      "Basic tool kit"
    ]
  },
  {
    id: "4",
    name: "DYU C6",
    slug: "dyu-c6-26-inch-city-electric-bike",
    originalPrice: 1199,
    price: 699,
    discount: "42% OFF",
    image: "/images/C6/c6-main.png",
    images: [
      "/images/C6/c6-main.png",
      "/images/C6/c6-1.png",
      "/images/C6/c6-2.png",
      "/images/C6/c6-3.png",
      "/images/C6/c6-4.png",
      "/images/C6/c6-5.png",
      "/images/C6/c6-6.png",
      "/images/C6/c6-7.png"
    ],
    features: ["12.5Ah battery", "Dual suspension option (model)", "LED display"],
    badge: "STUDENT FAVORITE",
    category: "City",
    rating: 4.8,
    reviewCount: 203,
    specifications: {
      motor: "250W rear hub motor",
      battery: "36V 12.5Ah detachable",
      range: "Up to 60 km",
      speed: "25 km/h",
      weight: "25 kg",
      wheelSize: "26 inch",
      foldable: true,
      brakes: "Hydraulic disc brakes",
      frame: "Aluminum"
    },
    description:
      "DYU C6 mixes style with longer range and stronger battery performance for everyday commuting and urban riding.",
    keyFeatures: [
      "Powerful 12.5Ah battery",
      "Front suspension fork",
      "Seat shock absorption",
      "Modern urban design",
      "Enhanced safety features"
    ],
    availableColors: ["Pearl White", "Forest Green"],
    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU C6 E-bike",
      "Charger",
      "Owner manual",
      "Tool kit",
      "Reflectors"
    ]
  },
  {
    id: "5",
    name: "DYU C9",
    slug: "dyu-c9-20-inch-long-range-ebike",
    originalPrice: 1699,
    price: 899,
    discount: "47% OFF",
    image: "/images/C9/c9-main.png",
    images: [
      "/images/C9/c9-main.png",
      "/images/C9/c9-1.png",
      "/images/C9/c9-2.png",
      "/images/C9/c9-3.png",
      "/images/C9/c9-4.png",
      "/images/C9/c9-5.png",
      "/images/C9/c9-6.png",
      "/images/C9/c9-7.png"
    ],
    features: ["Fat tires 20x3.0", "Exceptional range", "All-terrain capability"],
    badge: "LONG RANGE",
    category: "Adventure",
    rating: 4.9,
    reviewCount: 89,
    specifications: {
      motor: "750W peak rear hub motor",
      battery: "48V 15Ah removable",
      range: "80-100 miles (varies by usage)",
      speed: "28 mph",
      weight: "65 lbs",
      wheelSize: "20 x 3.0 inch fat tires",
      foldable: true,
      brakes: "Hydraulic disc",
      frame: "Steel/Aluminum hybrid"
    },
    description:
      "DYU C9 is built for long-range adventure with fat tires and a large capacity battery for extended rides off the beaten path.",
    keyFeatures: [
      "Fat 20x3.0 tires",
      "Front shock absorber",
      "Large range battery",
      "All-terrain capability",
      "Balanced motor-battery design"
    ],
    availableColors: ["Black", "Olive Green"],
    availableSizes: ["One-size (20\")"],
    whatsInTheBox: [
      "DYU C9 E-bike",
      "48V charger",
      "Tool kit",
      "Manual",
      "Puncture repair kit"
    ]
  },
  {
    id: "6",
    name: "DYU Stroll 1",
    slug: "dyu-stroll-1-700c-city-electric-bike",
    originalPrice: 1299,
    price: 799,
    discount: "38% OFF",
    image: "/images/Stroll1/stroll1-main.png",
    images: [
      "/images/Stroll1/stroll1-main.png",
      "/images/Stroll1/stroll-1.png",
      "/images/Stroll1/stroll-2.png",
      "/images/Stroll1/stroll-3.png",
      "/images/Stroll1/stroll-4.png",
      "/images/Stroll1/stroll-5.png",
      "/images/Stroll1/stroll-6.png",
      "/images/Stroll1/stroll-7.png"
    ],
    features: ["700C wheels", "Aluminum frame", "Hydraulic brakes"],
    badge: "PREMIUM STYLE",
    category: "Urban",
    rating: 4.7,
    reviewCount: 127,
    specifications: {
      motor: "250W mid-drive motor",
      battery: "36V 9Ah removable",
      range: "Up to 67 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "700C",
      foldable: false,
      brakes: "Hydraulic disc",
      frame: "Aluminum alloy"
    },
    description:
      "DYU Stroll 1 is a premium urban e-bike made for smooth rides with a sleek aluminum frame and efficient components.",
    keyFeatures: [
      "Streamlined aluminum frame",
      "700C wheels for smooth rolling",
      "Hydraulic disc brakes",
      "Multiple riding modes",
      "Comfort geometry"
    ],
    availableColors: ["Matte Black", "Cream"],
    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU Stroll 1 E-bike",
      "Charger",
      "Owner manual",
      "Tool kit",
      "Fender (model dependent)"
    ]
  }
];

// ✅ Get product by slug
export const getProductBySlug = (slug: string): ProductCard | undefined => {
  return PRODUCTS_DATA.find((product) => product.slug === slug);
};

// ✅ Get all slugs
export const getAllProductSlugs = (): string[] => {
  return PRODUCTS_DATA.map((product) => product.slug);
};

// ✅ Get products by category
export const getProductsByCategory = (category: string): ProductCard[] => {
  if (category === "All") return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter((product) => product.category === category);
};

// ✅ Get related products
export const getRelatedProducts = (
  currentProductId: string,
  limit: number = 3
): ProductCard[] => {
  return PRODUCTS_DATA.filter((p) => p.id !== currentProductId).slice(0, limit);
};
