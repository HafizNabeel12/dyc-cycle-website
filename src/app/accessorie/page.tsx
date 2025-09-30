'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { accessoriesProducts, } from '@/lib/accessoriesProducts';
import { AddToCartButton } from '@/components/AddToCartButton';

export default function AccessoriesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');


    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All'
        ? accessoriesProducts
        : accessoriesProducts.filter(product =>
            Array.isArray(product.category)
                ? product.category.includes(selectedCategory) // if category is an array, check if it contains the selectedCategory
                : product.category === selectedCategory // if category is a single string, compare directly
        );


    return (
        <div className="min-h-screen bg-white mt-32">
            {/* Breadcrumb */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="text-sm text-gray-600">
                        <Link href="/" className="hover:text-gray-900">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900">Accessories</span>
                    </nav>
                </div>
            </div>

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">
                    Accessories
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>




                {/* Products Grid */}
                <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-2 mb-16">

                    <ul
                        role="list"
                        className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden"
                    >
                        {filteredProducts.map((product) => (
                            <li
                                key={product.id}
                                className="group rounded-xl sm:rounded-2xl border border-gray-200 p-2 sm:p-3 transition hover:border-black"
                            >
                                {/* Product Image */}
                                <div className="relative mb-2 sm:mb-3">
                                    <Link href={`/accessories/${product.slug}`}>
                                        <img
                                            className="object-cover w-[85%] h-[85%] sm:w-full sm:h-full m-auto sm:m-0 rounded-lg sm:rounded-xl"
                                            src={product.images[0]}
                                            alt={product.name}
                                        />
                                        {!product.inStock && (
                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                                <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm">
                                                    Out of Stock
                                                </span>
                                            </div>
                                        )}

                                    </Link>
                                </div>

                                {/* Product Info */}
                                <div className="p-4">
                                    <Link href={`/accessories/${product.slug}`}>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-500 transition-colors line-clamp-2 min-h-[3.5rem]">
                                            {product.name}
                                        </h3>
                                    </Link>

                                    {/* Price */}
                                    <div className="mb-4">
                                        <span className="text-2xl font-bold text-gray-900">
                                            {product.currency}{product.price}
                                        </span>
                                    </div>

                                    {/* Category & Compatibility Tags */}

                                    <div className="flex  gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                            {product.category}
                                        </span>
                                        {product.compatibility.length === 1 && product.compatibility[0].includes('Universal') ? (
                                            <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-medium">
                                                Universal
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                                {product.compatibility.length} Compatible Models
                                            </span>
                                        )}
                                        {/* Add to Cart Button */}
                                        <div className="mt-2 sm:mt-0 sm:ml-2">
                                            <AddToCartButton
                                                product={product}
                                                className="w-full sm:w-auto rounded-full border border-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition sm:text-white sm:bg-black sm:hover:border-black sm:hover:bg-gray-50 sm:hover:text-black whitespace-nowrap"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        </div>

    );
}