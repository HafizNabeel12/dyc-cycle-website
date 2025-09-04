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
  };
  description: string;
  keyFeatures: string[];
  availableColors: string[];
  availableSizes: string[];
}

// Real Product Data
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
      foldable: true,
    },
    description:
      "The DYU D3F is a compact, lightweight electric bike perfect for students. Its 14-inch wheels make it incredibly portable and easy to store in dorm rooms.",
    keyFeatures: [
      "Ultra-compact 14-inch design",
      "Foldable for easy storage",
      "Perfect for short commutes",
      "Lightweight and portable",
      "Budget-friendly option",
    ],
    availableColors: ["Black", "White", "Red"],
    availableSizes: ["S", "M", "L"],
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
      "/images/T1/t1-7.png",
    ],
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
      foldable: true,
    },
    description:
      "The DYU T1 features advanced torque sensor technology and premium magnesium alloy frame. Perfect for students who want the latest in e-bike technology.",
    keyFeatures: [
      "Torque sensor for natural pedal assist",
      "Magnesium alloy frame",
      "Shimano derailleur system",
      "Advanced smart features",
      "Premium build quality",
    ],
    availableColors: ["Gray", "Blue"],
    availableSizes: ["M", "L"],
  },
  // repeat same pattern for C1, C6, C9, Stroll1
];

// Utility functions remain same
export const getProductBySlug = (slug: string): ProductCard | undefined => {
  return PRODUCTS_DATA.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category: string): ProductCard[] => {
  if (category === "All") return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter((product) => product.category === category);
};

export const getRelatedProducts = (
  currentProductId: number,
  limit: number = 3
): ProductCard[] => {
  return PRODUCTS_DATA.slice(0, limit);
};

export const getAllProductSlugs = (): string[] => {
  return PRODUCTS_DATA.map((product) => product.slug);
};
