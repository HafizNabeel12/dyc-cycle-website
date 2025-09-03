'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Truck, Shield, Clock, ChevronRight, Heart } from 'lucide-react';

const LandingPage = () => {
    const featuredProducts = [
        {
            id: 1,
            name: 'Electric Mountain Bike Pro',
            category: 'Unisex',
            price: '24,999',
            originalPrice: '29,999',
    
          
            image: '/images/d3f/d3f-main.png'
        },
        {
            id: 2,
            name: 'Urban Commuter E-Bike',
            category: 'Unisex',
            price: '18,999',
            isNew: true,
        
            image: '/images/T1/t1-main.png'
        },
        {
            id: 3,
            name: 'Performance Road E-Bike',
            category: 'Unisex',
            price: '32,999',
            originalPrice: '39,999',
          
            
            image: '/images/Stroll1/stroll1-main.png'
        },
        {
            id: 4,
            name: 'City Cruiser Electric',
            category: 'Dame',
            price: '15,999',
            isNew: true,
            image: '/images/C9/c9-main.png'
        },
        {
            id: 5,
            name: 'City Cruiser Electric',
            category: 'Dame',
            price: '15,999',
            isNew: true,
            image: '/images/C1/c1-main.png'
        },
        {
            id: 6,
            name: 'City Cruiser Electric',
            category: 'Dame',
            price: '15,999',
            isNew: true,
            image: '/images/C6/c6-main.png'
        },
    ];
    
    const categories = [
        { name: 'ELEKTRISKE SYKLER', count: '200+', image: '⚡', href: '/electric-bikes' },
        { name: 'MOUNTAIN BIKES', count: '150+', image: '⛰️', href: '/mountain-bikes' },
        { name: 'RACERSYKLER', count: '100+', image: '🏁', href: '/road-bikes' },
        { name: 'BARNESYKLER', count: '80+', image: '🧒', href: '/kids-bikes' }
    ];

    const brands = [
        { name: 'DYC', featured: true },
        { name: 'SPECIALIZED', featured: false },
        { name: 'TREK', featured: false },
        { name: 'GIANT', featured: false },
        { name: 'CANNONDALE', featured: true },
        { name: 'SCOTT', featured: false }
    ];

    return (
        <div className="min-h-screen bg-white mt-24">
            {/* Hero Section */}
            <section className="relative min-h-screen w-full sm:m-0">
                {/* Spacer for navbar */}
                <div className="h-32 md:h-24"></div>

                {/* Background image */}
                <img
                    src="/images/hero.png"
                    alt="DYU E-Bikes"
                    className="w-full h-full object-cover"
                />




            </section>

            {/* Featured Products Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                  

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="group bg-white hover:shadow-sm transition-shadow duration-200 cursor-pointer">
                                {/* Product Image Container */}
                                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                                    <img className='object-cover ' 
                   src={product.image} alt={product.name} />
                                    {/* New Badge */}
                                    {product.isNew && (
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className="bg-black text-white text-xs px-2 py-1 font-medium">
                                                Ny
                                            </span>
                                        </div>
                                    )}

                                  

                                 

                                    {/* Product Image */}
                                    <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-gray-50 to-gray-100">
                                        {product.image}
                                    </div>

                                    {/* Quick Add Button - appears on hover */}
                                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <button className="w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                                            Legg til i kurv
                                        </button>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="pt-3 pb-4">
                                    {/* Brand and Product Name */}
                                    <div className="mb-2">
                                        <div className="text-sm text-gray-900 font-medium mb-1">
                                            – {product.name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {product.category}
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="space-y-1">
                                        {/* Regular/Sale Price */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-medium text-gray-900">
                                                {product.price},-
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    {product.originalPrice},-
                                                </span>
                                            )}
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            

            
            </section>
        </div>
    );
};

export default LandingPage;