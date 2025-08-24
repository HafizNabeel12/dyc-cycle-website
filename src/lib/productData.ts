// src/lib/productData.ts

export interface ProductCard {
  id: number;
  name: string;
  slug: string;
  originalPrice: number;
  salePrice: number;
  discount: string;
  image: string;
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
  };
  description: string;
  keyFeatures: string[];
}

// Real Product Data based on fetched information
export const PRODUCTS_DATA: ProductCard[] = [
  {
    id: 1,
    name: "DYU D3F",
    slug: "dyu-d3f-mini-folding-electric-bike",
    originalPrice: 899,
    salePrice: 449,
    discount: "50% OFF",
    image: "/images/d3f/d3f-main.png",
    features: ["37+ Mile Range", "15.5 MPH", "Ultra Compact", "Quick Fold"],
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
      foldable: true
    },
    description: "The DYU D3F is a compact, lightweight electric bike perfect for students. Its 14-inch wheels make it incredibly portable and easy to store in dorm rooms.",
    keyFeatures: [
      "Ultra-compact 14-inch design",
      "Foldable for easy storage",
      "Perfect for short commutes",
      "Lightweight and portable",
      "Budget-friendly option"
    ]
  },
  {
    id: 2,
    name: "DYU T1",
    slug: "dyu-t1-torque-sensor-electric-bike",
    originalPrice: 1299,
    salePrice: 649,
    discount: "50% OFF",
    image: "/images/T1/t1-main.png",
    features: ["Torque Sensor", "35+ Mile Range", "20 inch", "Shimano Gears"],
    badge: "SMART CHOICE",
    category: "Smart",
    rating: 4.7,
    reviewCount: 156,
    specifications: {
      motor: "250W Mid-Drive with Torque Sensor",
      battery: "36V 12.5Ah Removable",
      range: "35-50 miles",
      speed: "20 mph",
      weight: "42 lbs",
      wheelSize: "20 inch",
      foldable: true
    },
    description: "The DYU T1 features advanced torque sensor technology and premium magnesium alloy frame. Perfect for students who want the latest in e-bike technology.",
    keyFeatures: [
      "Torque sensor for natural pedal assist",
      "Magnesium alloy frame",
      "Shimano derailleur system",
      "Advanced smart features",
      "Premium build quality"
    ]
  },
  {
    id: 3,
    name: "DYU C1",
    slug: "dyu-c1-26-inch-city-electric-bike",
    originalPrice: 1099,
    salePrice: 599,
    discount: "45% OFF",
    image: "/images/C1/c1-main.png",
    features: ["26 inch Wheels", "60KM Range", "500W Peak Power", "Front Suspension"],
    badge: "CITY CRUISER",
    category: "City",
    rating: 4.6,
    reviewCount: 134,
    specifications: {
      motor: "250W/500W Peak Hub Motor",
      battery: "36V 10Ah Detachable",
      range: "37-60 miles",
      speed: "25 mph",
      weight: "55 lbs",
      wheelSize: "26 inch",
      foldable: true
    },
    description: "The DYU C1 offers the perfect balance of comfort and performance with 26-inch wheels and front suspension, ideal for city commuting.",
    keyFeatures: [
      "26-inch wheels for stability",
      "Front suspension system",
      "Shimano 7-speed transmission",
      "Detachable battery",
      "Comfortable city riding position"
    ]
  },
  {
    id: 4,
    name: "DYU C6",
    slug: "dyu-c6-26-inch-city-electric-bike",
    originalPrice: 1199,
    salePrice: 699,
    discount: "42% OFF",
    image: "/images/C6/c6-main.png",
    features: ["60KM Range", "12.5Ah Battery", "Dual Suspension", "LED Display"],
    badge: "STUDENT FAVORITE",
    category: "City",
    rating: 4.8,
    reviewCount: 203,
    specifications: {
      motor: "250W Rear Hub Motor",
      battery: "36V 12.5Ah Detachable",
      range: "Up to 60 km",
      speed: "25 km/h",
      weight: "25 kg",
      wheelSize: "26 inch",
      foldable: true
    },
    description: "The DYU C6 combines style and functionality with its attractive design and powerful 12.5Ah battery, perfect for daily student commutes.",
    keyFeatures: [
      "Powerful 12.5Ah battery",
      "Front suspension fork",
      "Seat shock absorption",
      "Attractive modern design",
      "Enhanced safety features"
    ]
  },
  {
    id: 5,
    name: "DYU C9",
    slug: "dyu-c9-20-inch-long-range-ebike",
    originalPrice: 1699,
    salePrice: 899,
    discount: "47% OFF",
    image: "/images/C9/c9-main.png",
    features: ["Fat Tires", "80+ Mile Range", "Front Suspension", "Premium Build"],
    badge: "LONG RANGE",
    category: "Adventure",
    rating: 4.9,
    reviewCount: 89,
    specifications: {
      motor: "750W Peak Rear Hub Motor",
      battery: "48V 15Ah Removable",
      range: "80-100 miles",
      speed: "28 mph",
      weight: "65 lbs",
      wheelSize: "20 x 3.0 inch Fat Tires",
      foldable: true
    },
    description: "The DYU C9 is built for adventure with fat tires, exceptional range, and robust construction. Perfect for students who want to explore beyond campus.",
    keyFeatures: [
      "20x3.0 inch fat tires",
      "Front shock absorber",
      "Exceptional 80+ mile range",
      "All-terrain capability",
      "Balanced motor-battery design"
    ]
  },
  {
    id: 6,
    name: "DYU Stroll 1",
    slug: "dyu-stroll-1-700c-city-electric-bike",
    originalPrice: 1299,
    salePrice: 799,
    discount: "38% OFF",
    image: "/images/Stroll1/stroll1-main.png",
    features: ["700C Wheels", "67KM Range", "Aluminum Frame", "Hydraulic Brakes"],
    badge: "PREMIUM STYLE",
    category: "Urban",
    rating: 4.7,
    reviewCount: 127,
    specifications: {
      motor: "250W Mid-Drive Motor",
      battery: "36V 9Ah Removable",
      range: "Up to 67 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "700C",
      foldable: false
    },
    description: "The DYU Stroll 1 features a streamlined aluminum alloy frame and 700C wheels, designed for stylish urban commuting with premium components.",
    keyFeatures: [
      "Streamlined aluminum alloy frame",
      "700C wheels for smooth riding",
      "Dual hydraulic disc brakes",
      "Puncture-resistant tires",
      "Multiple riding modes (Eco, Normal, Sport)"
    ]
  }
];

// Utility functions
export const getProductBySlug = (slug: string): ProductCard | undefined => {
  return PRODUCTS_DATA.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): ProductCard[] => {
  if (category === 'All') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(product => product.category === category);
};

export const getRelatedProducts = (currentProductId: number, limit: number = 3): ProductCard[] => {
  return PRODUCTS_DATA
    .filter(product => product.id !== currentProductId)
    .slice(0, limit);
};

export const getAllProductSlugs = (): string[] => {
  return PRODUCTS_DATA.map(product => product.slug);
};