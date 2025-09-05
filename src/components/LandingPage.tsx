'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Truck, Shield, Clock, ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import { AddToCartButton } from './AddToCartButton';

const LandingPage = () => {
    const products = [
        {
            id: "1",
            name: "DYU D3F",
            slug: "dyu-d3f-mini-folding-electric-bike",
            originalPrice: 899,
            price: 449,
            discount: "50% OFF",
            image: "/images/d3f/d3f-main.png",
            images: [ // Add this new array
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
            id: "2",
            name: "DYU T1",
            slug: "dyu-t1-torque-sensor-electric-bike",
            originalPrice: 1299,
            price: 649,
            discount: "50% OFF",
            image: "/images/T1/t1-main.png",
            images: [ // Add this new array
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
            id: "3",
            name: "DYU C1",
            slug: "dyu-c1-26-inch-city-electric-bike",
            originalPrice: 1099,
            price: 599,
            discount: "45% OFF",
            image: "/images/C1/c1-main.png",
            images: [ // Add this new array
                "/images/C1/c1-main.png",
                "/images/C1/c1-1.png",
                "/images/C1/c1-2.png",
                "/images/C1/c1-3.png",
                "/images/C1/c1-4.png",
                "/images/C1/c1-5.png",
                "/images/C1/c1-6.png",
                "/images/C1/c1-7.png",

            ],
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
            id: "4",
            name: "DYU C6",
            slug: "dyu-c6-26-inch-city-electric-bike",
            originalPrice: 1199,
            price: 699,
            discount: "42% OFF",
            image: "/images/C6/c6-main.png",
            images: [ // Add this new array
                "/images/C6/c6-main.png",
                "/images/C6/c6-1.png",
                "/images/C6/c6-2.png",
                "/images/C6/c6-3.png",
                "/images/C6/c6-4.png",
                "/images/C6/c6-5.png",
                "/images/C6/c6-6.png",
                "/images/C6/c6-7.png",

            ],
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
            id: "5",
            name: "DYU C9",
            slug: "dyu-c9-20-inch-long-range-ebike",
            originalPrice: 1699,
            price: 899,
            discount: "47% OFF",
            image: "/images/C9/c9-main.png",
            images: [ // Add this new array
                "/images/C9/c9-main.png",
                "/images/C9/c9-1.png",
                "/images/C9/c9-2.png",
                "/images/C9/c9-3.png",
                "/images/C9/c9-4.png",
                "/images/C9/c9-5.png",
                "/images/C9/c9-6.png",
                "/images/C9/c9-7.png",

            ],
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
            id: "6",
            name: "DYU Stroll 1",
            slug: "dyu-stroll-1-700c-city-electric-bike",
            originalPrice: 1299,
            price: 799,
            discount: "38% OFF",
            image: "/images/Stroll1/stroll1-main.png",
            images: [ // Add this new array
                "/images/Stroll1/stroll1-main.png",
                "/images/Stroll1/stroll-1.png",
                "/images/Stroll1/stroll-2.png",
                "/images/Stroll1/stroll-3.png",
                "/images/Stroll1/stroll-4.png",
                "/images/Stroll1/stroll-5.png",
                "/images/Stroll1/stroll-6.png",
                "/images/Stroll1/stroll-7.png",

            ],
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
        <div className="min-h-screen bg-white mt-20 ">
            {/* Hero Section */}

            <section className="flex min-h-screen justify-center items-center  ">
                {/* Spacer for navbar */}
                {/* <div className="h-32 md:h-24"></div> */}

                {/* Background image */}
                <img
                    src="/images/hero.png"
                    alt="DYU E-Bikes"
                    className="max-h-[600px] w-auto object-contain max-w-7xl px-4"
                />
            </section>


            {/* Featured Products Section */}
            <section className="mb-24 px-4">
                <div className="max-w-7xl mx-auto">


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="group bg-white hover:shadow-sm transition-shadow duration-200 cursor-pointer">
                                {/* Product Image Container */}
                                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                                    <Link href={`/products/${product.slug}`}>
                                        <img className='object-cover '
                                            src={product.image} alt={product.name} />
                                    </Link>


                                    {/* Quick Add Button - appears on hover */}
                                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        
                                            <AddToCartButton product={product} className='w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors items-center'/>
                                        
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