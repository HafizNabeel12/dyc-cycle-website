'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Truck, Shield, Clock, ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import { AddToCartButton } from './AddToCartButton';
import { PRODUCTS_DATA } from "@/lib/productData"; 

const LandingPage = () => {
   


    
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
        <div className="min-h-screen bg-white mt-56 md:mt-24 ">
            {/* Hero Section */}
            <section className="flex justify-center items-center sm:m-0">
                {/* Background image */}
                <img
                    src="/images/hero.png"
                    alt="DYU E-Bikes"
                    className="max-h-[600px] w-auto md:object-contain md:max-w-7xl md:px-4 sm:px-2 "
                />
            </section>

            {/* Header Section */}
            <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-center mt-6 mb-8 px-4 sm:px-0">
                <div>
                    <h1 className="md:text-2xl sm:text-xl font-semibold tracking-tight text-black underline text-center sm:text-left">
                        Explore Our Ebikes
                    </h1>
                </div>
            </header>

            {/* Featured Products Section */}
            <section className="mb-24 px-4 sm:px-2">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile: Single column grid, Desktop: Multi-column grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {PRODUCTS_DATA.map((product) => (
                            <div key={product.id} className="group bg-white hover:shadow-sm transition-shadow duration-200 cursor-pointer">
                                {/* Product Image Container */}
                                <div className="relative aspect-square bg-white overflow-hidden">
                                    <Link href={`/products/${product.slug}`}>
                                        <img 
                                            className='object-cover sm:w-full sm:h-full w-[80%] h-[80%] m-auto sm:m-0'
                                            src={product.image} 
                                            alt={product.name} 
                                        />
                                    </Link>

                                    {/* Quick Add Button - appears on hover for desktop, always visible on mobile */}
                                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <AddToCartButton 
                                            product={product} 
                                            className='w-full bg-yellow-500 text-black py-2 sm:py-2 text-sm font-medium hover:bg-yellow-600 transition-colors items-center'
                                        />
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="pt-3 pb-4 sm:pt-3 sm:pb-4">
                                    {/* Brand and Product Name */}
                                    <div className="mb-2">
                                        <div className="text-lg sm:text-xl text-gray-900 font-semibold mb-1 leading-tight">
                                            {product.name}
                                        </div>
                                        <div className="text-sm sm:text-lg text-gray-600">
                                            {product.category[1]}
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="space-y-1">
                                        {/* Regular/Sale Price */}
                                        <div className="flex items-center gap-2 text-base sm:text-lg">
                                            <span className="text-base sm:text-lg font-medium text-gray-900">
                                                {product.price},-
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-yellow-500 line-through">
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