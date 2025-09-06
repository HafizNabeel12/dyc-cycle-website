"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductCard } from "@/lib/productData";
import Link from "next/link";
import { AddToCartButton } from "./AddToCartButton";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductDetails({ product }: { product: ProductCard }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="mt-40 md:mt-20 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-0 sm:px-4 py-3 text-sm">
          <li>
            <Link href="/cycle" className="text-gray-600 hover:text-black transition">
              Sykkel
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li className="text-black font-medium truncate">{product.name}</li>
        </ol>
      </nav>

      {/* MOBILE LAYOUT (sm and below) */}
      <div className="lg:hidden">
        {/* MOBILE IMAGE SECTION */}
        <div className="mt-6">
          {/* Main Image */}
          <div className="mb-4">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Mobile Thumbnails - Arrow Navigation */}
          <div className="relative">
            <div 
              id="thumbnailContainer"
              className="flex gap-3 overflow-x-hidden pb-2 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`flex-shrink-0 border rounded-md p-1 ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={product.name}
                    width={60}
                    height={60}
                    className="object-contain w-[60px] h-[60px]"
                  />
                </button>
              ))}
            </div>
            
            {/* Left Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('thumbnailContainer');
                if (container) container.scrollBy({ left: -150, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-300 rounded-full p-2 shadow-md z-10"
            >
              <ChevronLeft size={16} className="text-gray-700" />
            </button>
            
            {/* Right Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('thumbnailContainer');
                if (container) container.scrollBy({ left: 150, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-300 rounded-full p-2 shadow-md z-10"
            >
              <ChevronRight size={16} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* MOBILE PRODUCT INFO */}
        <div className="mt-6 space-y-4">
          <h1 className="text-xl font-bold text-black">{product.name}</h1>
          
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-red-600">${product.price}</span>
            <span className="line-through text-gray-500 text-sm">${product.originalPrice}</span>
            <span className="text-green-600 text-sm">{product.discount}</span>
          </div>

          {/* Mobile Add to Cart Button */}
          <div className="mt-4">
            <AddToCartButton 
              product={product} 
              className="w-full bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600" 
            />
          </div>

          {/* Mobile Description */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3 text-black">About the Product</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Mobile Key Features */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-black">Key Features:</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
              {product.keyFeatures.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Mobile Accordion */}
          <div className="mt-6 bg-white border border-gray-200 rounded-lg text-black">
            {/* Specs */}
            <div className="border-b border-gray-100">
              <button 
                onClick={() => toggleAccordion("specs")} 
                className="w-full px-4 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium">Specs</span>
                {openAccordion === "specs" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openAccordion === "specs" && (
                <div className="px-4 pb-4 text-sm text-gray-700">
                  <ul className="space-y-2">
                    <li><strong>Motor:</strong> {product.specifications.motor}</li>
                    <li><strong>Battery:</strong> {product.specifications.battery}</li>
                    <li><strong>Range:</strong> {product.specifications.range}</li>
                    <li><strong>Top speed:</strong> {product.specifications.speed}</li>
                    <li><strong>Weight:</strong> {product.specifications.weight}</li>
                    <li><strong>Wheel size:</strong> {product.specifications.wheelSize}</li>
                    {product.specifications.brakes && <li><strong>Brakes:</strong> {product.specifications.brakes}</li>}
                    {product.specifications.frame && <li><strong>Frame:</strong> {product.specifications.frame}</li>}
                  </ul>
                </div>
              )}
            </div>

            {/* Size */}
            <div className="border-b border-gray-100">
              <button 
                onClick={() => toggleAccordion("size")} 
                className="w-full px-4 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium">Size</span>
                {openAccordion === "size" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openAccordion === "size" && (
                <div className="px-4 pb-4 text-sm text-gray-700">
                  {product.availableSizes.length === 0 ? (
                    <p>One-size / folding model</p>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {product.availableSizes.map((s) => (
                        <div key={s} className="p-2 border rounded text-sm">{s}</div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* What's in the Box */}
            <div>
              <button 
                onClick={() => toggleAccordion("box")} 
                className="w-full px-4 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium">What&apos;s in the Box</span>
                {openAccordion === "box" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openAccordion === "box" && (
                <div className="px-4 pb-4 text-sm text-gray-700">
                  <ul className="list-disc ml-5 space-y-1">
                    {product.whatsInTheBox.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT (lg and above) - UNCHANGED */}
      <div className="hidden lg:block">
        {/* IMAGE + THUMBNAILS */}
        <div className="flex justify-center">
          <div className="grid grid-cols-[4fr_1fr] gap-6 w-full max-w-5xl items-start">
            {/* MAIN IMAGE */}
            <div>
              <Image
                src={selectedImage}
                alt={product.name}
                width={1000}
                height={800}
                className="w-full max-h-[600px] object-contain"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="grid grid-cols-2 gap-3 justify-items-end">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`border rounded-md p-1 ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="object-contain w-[90px] h-[90px]"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="mt-10 space-y-6">
          <h1 className="text-2xl font-bold text-black">{product.name}</h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-red-600">${product.price}</span>
            <span className="line-through text-gray-500">${product.originalPrice}</span>
            <span className="text-green-600">{product.discount}</span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 mt-4">
            <AddToCartButton product={product} className="w-44 bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600" />
          </div>

          {/* DESCRIPTION */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2 text-black">About the Product</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* KEY FEATURES */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-black">Key Features:</h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              {product.keyFeatures.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* SPECIFICATIONS */}
          <div className="bg-white border border-gray-200 rounded-lg text-black">
            {/* Specs */}
            <div className="border-b border-gray-100">
              <button onClick={() => toggleAccordion("specs")} className="w-full px-6 py-4 flex items-center justify-between text-left">
                <span className="font-medium">Specs</span>
                {openAccordion === "specs" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openAccordion === "specs" && (
                <div className="px-6 pb-4 text-sm text-gray-700">
                  <ul className="space-y-2">
                    <li><strong>Motor:</strong> {product.specifications.motor}</li>
                    <li><strong>Battery:</strong> {product.specifications.battery}</li>
                    <li><strong>Range:</strong> {product.specifications.range}</li>
                    <li><strong>Top speed:</strong> {product.specifications.speed}</li>
                    <li><strong>Weight:</strong> {product.specifications.weight}</li>
                    <li><strong>Wheel size:</strong> {product.specifications.wheelSize}</li>
                    {product.specifications.brakes && <li><strong>Brakes:</strong> {product.specifications.brakes}</li>}
                    {product.specifications.frame && <li><strong>Frame:</strong> {product.specifications.frame}</li>}
                  </ul>
                </div>
              )}
            </div>

            {/* Size */}
            <div className="border-b border-gray-100">
              <button onClick={() => toggleAccordion("size")} className="w-full px-6 py-4 flex items-center justify-between text-left">
                <span className="font-medium">Size</span>
                {openAccordion === "size" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openAccordion === "size" && (
                <div className="px-6 pb-4 text-sm text-gray-700">
                  {product.availableSizes.length === 0 ? (
                    <p>One-size / folding model</p>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {product.availableSizes.map((s) => (
                        <div key={s} className="p-2 border rounded text-sm">{s}</div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* What's in the Box */}
            <div>
              <button onClick={() => toggleAccordion("box")} className="w-full px-6 py-4 flex items-center justify-between text-left">
                <span className="font-medium">What&apos;s in the Box</span>
                {openAccordion === "box" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openAccordion === "box" && (
                <div className="px-6 pb-6 text-sm text-gray-700">
                  <ul className="list-disc ml-5 space-y-1">
                    {product.whatsInTheBox.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}