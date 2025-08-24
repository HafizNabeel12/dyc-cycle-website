// src/app/back-to-school/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Users, 
  Shield, 
  Truck, 
  Gift, 
  Star, 
  ArrowRight, 
  Check,
  MapPin,
  Clock,
  Battery,
  Zap,
  ShoppingCart,
  Play,
  Award,
  Target,
  Percent,
  Eye,
  Heart,
  PlayCircle
} from 'lucide-react';

// Updated Types with real product data structure
interface ProductCard {
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

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  university: string;
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
    image: "/images/Stroll1/strool1-main.png",
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

// Hero Section Component - Enhanced
const HeroSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="relative bg-white text-black mt-16 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold animate-bounce">
                <BookOpen className="w-4 h-4 mr-2" />
                BACK TO SCHOOL SPECIAL - LIMITED TIME
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Ride Smart,
                <br />
                <span className="text-yellow-400 relative">
                  Study Hard
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 opacity-30"></div>
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Transform your campus commute with DYU&apos;s premium electric bikes. 
                Lightweight, foldable, and designed for the modern student lifestyle.
              </p>
            </div>
            
            {/* Enhanced Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">80+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Miles Range</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">28</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">MPH Speed</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">50%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Off Today</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#products"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Shop Student Deals
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => setVideoPlaying(true)}
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2 text-yellow-400" />
                2-Year Warranty
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="w-4 h-4 mr-2 text-yellow-400" />
                Free Shipping
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                Award Winning
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-2xl group hover:shadow-3xl transition-all duration-500 cursor-pointer">
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black" />
                  </div>
                  <p className="text-gray-600 font-medium">Hero Bike Video</p>
                  <p className="text-gray-500 text-sm">Click to play</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            {/* <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
              50% OFF
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Free Shipping
            </div>
            <div className="absolute top-1/2 -left-8 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold rotate-90 shadow-lg">
              Popular
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Promotional Banner
const PromoBanner: React.FC = () => {
  const offers = [
    { icon: Gift, text: "FREE Accessories Worth $200+" },
    { icon: Truck, text: "FREE Express Shipping" },
    { icon: Shield, text: "2-Year Warranty" },
    { icon: Award, text: "Award-Winning Design" }
  ];

  return (
    <section className="bg-yellow-400 text-black py-4 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 text-sm font-semibold">
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <div key={index} className="flex items-center hover:scale-105 transition-transform cursor-pointer">
                <IconComponent className="w-4 h-4 mr-2" />
                {offer.text}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute animate-ping w-4 h-4 bg-black rounded-full top-2 left-1/4"></div>
        <div className="absolute animate-ping w-3 h-3 bg-black rounded-full bottom-2 right-1/4 delay-1000"></div>
      </div>
    </section>
  );
};

// Enhanced Featured Products Section with Real Data
const FeaturedProducts: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Mini', 'Smart', 'City', 'Adventure', 'Urban'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            Our <span className="text-yellow-400">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Exclusive back-to-school pricing on our most popular e-bikes. 
            Limited time offers for students ready to upgrade their commute.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 text-black">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border-2 transition-colors text-sm font-medium ${
                  selectedCategory === category 
                    ? 'border-yellow-400 bg-yellow-400 text-black' 
                    : 'border-gray-200 hover:border-yellow-400 hover:bg-yellow-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Enhanced Badges */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
                  {product.badge}
                </div>
              )}
              
              {/* Enhanced Discount Badge */}
              {/* <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg animate-pulse">
                {product.discount}
              </div> */}

              {/* Quick Actions Overlay */}
              {/* <div className={`absolute top-16 right-4 flex flex-col space-y-2 z-10 transition-all duration-300 ${
                hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <button className="bg-white p-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div> */}

              {/* Product Image */}
              <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                <div className="text-center group-hover:scale-110 transition-transform duration-500">
                  <div className=" h-96  bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                   <img className='object-cover group-hover:scale-110 transition-transform duration-500' 
                   src={product.image} alt={product.name} />
                  </div>
                
                </div>
                
                {/* Hover Overlay */}
                {/* <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white">
                    <PlayCircle className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Quick View</p>
                  </div>
                </div> */}
              </div>

              {/* Enhanced Product Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-black group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">({product.reviewCount})</p>
                  </div>
                </div>
                
                {/* Enhanced Pricing */}
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-black">${product.salePrice}</span>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="text-sm text-green-600 font-semibold">
                    Save ${product.originalPrice - product.salePrice}
                  </span>
                </div>

                {/* Enhanced Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 text-sm">
                      <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Enhanced Action Buttons */}
                <div className="space-y-3 pt-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full bg-black text-yellow-400 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all group-hover:bg-yellow-400 group-hover:text-black flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Details
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button className="w-full border-2 border-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Add
                  </button> 
                </div>
              </div>

              {/* Stock Indicator */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <div className="h-full bg-yellow-500 w-3/4"></div>
              </div> */}
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        {/* <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

// Enhanced Why Choose Section
const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Perfect for Students",
      description: "Lightweight, foldable design fits in dorm rooms and apartments. Easy to carry upstairs.",
      color: "bg-blue-500"
    },
    {
      icon: Battery,
      title: "Long-Lasting Battery",
      description: "Up to 80+ miles on a single charge. Get to class and back without worry.",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Premium components with 2-year warranty. Investment in your daily commute.",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Award-Winning Design",
      description: "Recognized globally for innovation and style. Ride with confidence.",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="border border-yellow-400"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Why Students Choose <span className="text-yellow-400">DYU</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            More than just transportation - it&apos;s your freedom to explore campus and beyond.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">10K+</div>
              <div className="text-sm text-gray-400">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-gray-400">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.8★</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">2M+</div>
              <div className="text-sm text-gray-400">Miles Traveled</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 group cursor-pointer">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Student Testimonials
const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Computer Science Major",
      university: "Stanford University",
      content: "My DYU bike has been a game-changer for getting around campus. I can fold it up and bring it to my dorm room, and the battery lasts all week! No more being late for classes.",
      rating: 5,
      avatar: ""
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Business Student",
      university: "NYU Stern",
      content: "Love how fast I can get to class now. No more being late because of parking issues. Plus it's actually fun to ride! My friends are all getting one now.",
      rating: 5,
      avatar: ""
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Art Major",
      university: "RISD",
      content: "The design is so sleek and modern. I get compliments everywhere I go. Perfect for a style-conscious student like me. Worth every penny!",
      rating: 5,
      avatar: ""
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            Student <span className="text-yellow-400">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hear from students who&apos;ve transformed their campus experience
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-yellow-400" />
              10,000+ Student Customers
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              4.8/5 Average Rating
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-yellow-400" />
              #1 Campus E-bike
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-800 mb-6 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-yellow-600 text-xs font-semibold">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join thousands of students already riding DYU</p>
          <Link
            href="#products"
            className="inline-flex items-center bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Find Your Perfect Bike
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Enhanced Final CTA Section
const FinalCTASection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 34,
    seconds: 56
  });

  return (
    <section className="bg-yellow-400 text-black py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black rounded-full animate-float"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 20 + 's',
                animationDuration: (Math.random() * 10 + 10) + 's'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🔥 LIMITED TIME OFFER
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold">
              Ready to Upgrade Your Commute?
            </h2>
            <p className="text-xl font-semibold">
              Save up to 50% + Free shipping + Free accessories worth $200+
            </p>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-black text-yellow-400 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-sm font-semibold mb-4">OFFER ENDS IN:</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-75">DAYS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-75">HOURS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-75">MINS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-75">SECS</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#products"
              className="bg-black text-yellow-400 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center shadow-2xl hover:shadow-3xl"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              Shop Now - 50% Off
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/products"
              className="border-2 border-black text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-black hover:text-yellow-400 transition-all shadow-lg hover:shadow-xl"
            >
              Browse All Models
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm">
            <div className="flex items-center justify-center bg-black/10 rounded-lg py-4 px-6">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-semibold">Offer ends September 30th</span>
            </div>
            <div className="flex items-center justify-center bg-black/10 rounded-lg py-4 px-6">
              <Truck className="w-4 h-4 mr-2" />
              <span className="font-semibold">Free express shipping</span>
            </div>
            <div className="flex items-center justify-center bg-black/10 rounded-lg py-4 px-6">
              <Shield className="w-4 h-4 mr-2" />
              <span className="font-semibold">30-day money-back guarantee</span>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-black/10 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-6">What You Get With Every Purchase:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-3 text-green-600" />
                <span>Premium bike helmet ($89 value)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-3 text-green-600" />
                <span>Professional assembly ($75 value)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-3 text-green-600" />
                <span>Phone mount & accessories ($45 value)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-3 text-green-600" />
                <span>1-year premium support ($99 value)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Newsletter Signup Section
const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated on <span className="text-yellow-400">Student Deals</span>
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Get exclusive student discounts, new product launches, and campus riding tips delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your .edu email address"
              className="flex-1 px-6 py-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              disabled={isSubscribed}
            >
              {isSubscribed ? '✓ Subscribed!' : 'Get Deals'}
            </button>
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            📧 Student verification required. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Page Component with Enhanced Structure
export default function BackToSchoolPage(): React.JSX.Element {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PromoBanner />
      <FeaturedProducts />
      <WhyChooseSection />
      <TestimonialsSection />
      <FinalCTASection />
      <NewsletterSection />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <Link
          href="#products"
          className="bg-yellow-400 text-black p-4 rounded-full shadow-2xl hover:bg-yellow-300 transition-all transform hover:scale-110 flex items-center justify-center"
        >
          <ShoppingCart className="w-6 h-6" />
        </Link>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 bg-black text-yellow-400 p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all opacity-75 hover:opacity-100 hidden lg:block"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
      </button>
    </main>
  );
}