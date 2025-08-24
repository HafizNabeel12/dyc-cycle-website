// src/app/back-to-school/page.tsx
'use client';

import { useState } from 'react';
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
  Percent
} from 'lucide-react';

// Types
interface ProductCard {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: string;
  image: string;
  features: string[];
  badge?: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white text-black mt-16 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold">
                <BookOpen className="w-4 h-4 mr-2" />
                BACK TO SCHOOL SPECIAL
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Ride Smart,
                <br />
                <span className="text-yellow-400">Study Hard</span>
              </h1>
              
              <p className="text-xl text-black leading-relaxed max-w-lg">
                Transform your campus commute with DYU&apos;s premium electric bikes. 
                Lightweight, foldable, and designed for the modern student lifestyle.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">30+</div>
                <div className="text-sm text-black uppercase tracking-wider">Miles Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25</div>
                <div className="text-sm text-black uppercase tracking-wider">MPH Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50%</div>
                <div className="text-sm text-black uppercase tracking-wider">Off Today</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center group">
                Shop Student Deals
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Replace with actual bike image */}
              <div className="w-full h-96 bg-gray-800 rounded-2xl flex items-center justify-center">
                <p className="text-gray-400">Hero Bike Image Here</p>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              50% OFF
            </div>
            <div className="absolute -bottom-4 -left-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
              Free Shipping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Promotional Banner Component
const PromoBanner: React.FC = () => {
  return (
    <section className="bg-yellow-400 text-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 text-sm font-semibold">
          <div className="flex items-center">
            <Gift className="w-4 h-4 mr-2" />
            FREE Accessories Worth $200+
          </div>
          <div className="flex items-center">
            <Truck className="w-4 h-4 mr-2" />
            FREE Express Shipping
          </div>
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-2" />
            2-Year Warranty
          </div>
        </div>
      </div>
    </section>
  );
};

// Featured Products Section
const FeaturedProducts: React.FC = () => {
  const products: ProductCard[] = [
    {
      id: 1,
      name: "DYU King",
      originalPrice: 1299,
      salePrice: 649,
      discount: "50% OFF",
      image: "",
      features: ["30+ Mile Range", "25 MPH", "Foldable Design", "App Control"],
      badge: "BESTSELLER"
    },
    {
      id: 2,
      name: "DYU D3F",
      originalPrice: 899,
      salePrice: 499,
      discount: "44% OFF",
      image: "",
      features: ["20+ Mile Range", "15 MPH", "Ultra Lightweight", "Quick Fold"],
      badge: "STUDENT FAVORITE"
    },
    {
      id: 3,
      name: "DYU C6",
      originalPrice: 1099,
      salePrice: 599,
      discount: "45% OFF",
      image: "",
      features: ["25+ Mile Range", "20 MPH", "Cargo Capacity", "LED Display"]
    },
    {
      id: 4,
      name: "DYU C9",
      originalPrice: 1699,
      salePrice: 899,
      discount: "45% OFF",
      image: "",
      features: ["25+ Mile Range", "20 MPH", "Cargo Capacity", "LED Display"]
    } ,
    {
      id: 5,
      name: "DYU C6",
      originalPrice: 1099,
      salePrice: 599,
      discount: "45% OFF",
      image: "",
      features: ["25+ Mile Range", "20 MPH", "Cargo Capacity", "LED Display"]
    },
    {
      id: 6,
      name: "DYU C6",
      originalPrice: 1099,
      salePrice: 599,
      discount: "45% OFF",
      image: "",
      features: ["25+ Mile Range", "20 MPH", "Cargo Capacity", "LED Display"]
    }
    
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            Our <span className="text-yellow-400">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exclusive back-to-school pricing on our most popular e-bikes. 
            Limited time offers for students ready to upgrade their commute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                  {product.badge}
                </div>
              )}
              
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-bold z-10">
                {product.discount}
              </div>

              {/* Product Image */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500"> {product.name} Image</p>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-black">{product.name}</h3>
                
                {/* Pricing */}
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-black">${product.salePrice}</span>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-black text-yellow-400 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all group-hover:bg-yellow-400 group-hover:text-black">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose DYU Section
const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Perfect for Students",
      description: "Lightweight, foldable design fits in dorm rooms and apartments. Easy to carry upstairs."
    },
    {
      icon: Battery,
      title: "Long-Lasting Battery",
      description: "Up to 30+ miles on a single charge. Get to class and back without worry."
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Premium components with 2-year warranty. Investment in your daily commute."
    },
    {
      icon: Award,
      title: "Award-Winning Design",
      description: "Recognized globally for innovation and style. Ride with confidence."
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Why Students Choose <span className="text-yellow-400">DYU</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            More than just transportation - it&apos;s your freedom to explore campus and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Student Testimonials
const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Computer Science Major",
      content: "My DYU bike has been a game-changer for getting around campus. I can fold it up and bring it to my dorm room, and the battery lasts all week!",
      rating: 5,
      avatar: ""
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Business Student",
      content: "Love how fast I can get to class now. No more being late because of parking issues. Plus it's actually fun to ride!",
      rating: 5,
      avatar: ""
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Art Major",
      content: "The design is so sleek and modern. I get compliments everywhere I go. Perfect for a style-conscious student like me.",
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
          <p className="text-xl text-gray-600">
            Hear from students who&apos;ve transformed their campus experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg">
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-800 mb-6 italic">{testimonial.content}</p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Avatar</span>
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-yellow-400 text-black py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Ready to Upgrade Your Commute?
          </h2>
          
          <p className="text-xl font-semibold">
            Limited time offer - Save up to 50% + Free shipping + Free accessories
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-yellow-400 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center">
              <ShoppingCart className="w-6 h-6 mr-2" />
              Shop Now - 50% Off
            </button>
            <button className="border-2 border-black text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-black hover:text-yellow-400 transition-all">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm">
            <div className="flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Offer ends September 30th</span>
            </div>
            <div className="flex items-center justify-center">
              <Truck className="w-4 h-4 mr-2" />
              <span>Free express shipping</span>
            </div>
            <div className="flex items-center justify-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function BackToSchoolPage(): React.JSX.Element {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PromoBanner />
      <FeaturedProducts />
      <WhyChooseSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
}