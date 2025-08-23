// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  description: string;
  badge?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  verified?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}