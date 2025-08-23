'use client';

import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Zap, Bike, Battery } from 'lucide-react';

const ProductShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  const products = [
    {
      id: '1',
      name: 'DYU King',
      price: '$899',
      originalPrice: '$1,299',
      image: '/* Replace with actual product image */',
      features: ['30+ Miles Range', '25 MPH Top Speed', 'Foldable Design'],
      description: 'The flagship model with exceptional performance and range.',
      badge: 'BESTSELLER',
      category: 'premium',
      rating: 4.9,
      reviews: 324
    },
    {
      id: '2',
      name: 'DYU D3F',
      price: '$299',
      originalPrice: '$499',
      image: '/* Replace with actual product image */',
      features: ['20 Miles Range', '15 MPH Speed', 'Lightweight'],
      description: 'Perfect entry-level e-bike for students and city commuting.',
      badge: 'STUDENT FAVORITE',
      category: 'budget',
      rating: 4.7,
      reviews: 156
    },
    {
      id: '3',
      name: 'DYU A1F',
      price: '$599',
      originalPrice: '$799',
      image: '/* Replace with actual product image */',
      features: ['25 Miles Range', '20 MPH Speed', 'Compact'],
      description: 'Mid-range option with excellent value and performance.',
      badge: 'MOST POPULAR',
      category: 'mid-range',
      rating: 4.8,
      reviews: 289
    },
    {
      id: '4',
      name: 'DYU C6',
      price: '$1,199',
      originalPrice: '$1,599',
      image: '/* Replace with actual product image */',
      features: ['40+ Miles Range', '28 MPH Speed', 'Premium Build'],
      description: 'Professional grade e-bike with premium features.',
      badge: 'PRO CHOICE',
      category: 'premium',
      rating: 5.0,
      reviews: 92
    },
    {
      id: '5',
      name: 'DYU T1',
      price: '$399',
      originalPrice: '$599',
      image: '/* Replace with actual product image */',
      features: ['22 Miles Range', '18 MPH Speed', 'Urban Design'],
      description: 'Stylish urban commuter with modern aesthetics.',
      badge: 'NEW',
      category: 'budget',
      rating: 4.6,
      reviews: 78
    },
    {
      id: '6',
      name: 'DYU S2',
      price: '$799',
      originalPrice: '$1,099',
      image: '/* Replace with actual product image */',
      features: ['35 Miles Range', '23 MPH Speed', 'All-Terrain'],
      description: 'Versatile e-bike suitable for various terrains.',
      badge: 'VERSATILE',
      category: 'mid-range',
      rating: 4.8,
      reviews: 167
    }
  ];

  const filters = [
    { key: 'all', label: 'All Bikes' },
    { key: 'budget', label: 'Budget ($199-$499)' },
    { key: 'mid-range', label: 'Mid-Range ($500-$899)' },
    { key: 'premium', label: 'Premium ($900+)' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Bike className="w-4 h-4" />
            Featured E-Bikes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Choose Your Perfect
            <span className="block text-yellow-500">Study Companion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From budget-friendly options to premium performance bikes, find the perfect e-bike for your campus lifestyle.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-yellow-500 text-black shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                {/* Replace with actual product image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Bike className="w-24 h-24" />
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {product.badge}
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(product.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      {index === 0 && <Battery className="w-4 h-4 text-yellow-500" />}
                      {index === 1 && <Zap className="w-4 h-4 text-gray-600" />}
                      {index === 2 && <Bike className="w-4 h-4 text-black" />}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-black">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can't decide? Get personalized recommendations!</p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Find My Perfect E-Bike
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;