"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductCard } from "@/lib/productData";
import Link from "next/link";
import { AddToCartButton } from "./AddToCartButton";

export default function ProductDetails({ product }: { product: ProductCard }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0]);

  return (
    <div className="mt-20">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm">
          <li>
            <Link href="/cycle" className="text-gray-600 hover:text-black transition">
              Sykkel
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li className="text-black font-medium">{product.name}</li>
        </ol>
      </nav>
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
                className={`border rounded-md p-1 ${selectedImage === img ? "border-black" : "border-gray-300"
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

        {/* COLOR SELECTOR */}
        {/* <div>
          <h3 className="font-semibold text-black">Select Color:</h3>
          <div className="flex gap-3 mt-2">
            {product.availableColors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 border rounded-md ${
                  selectedColor === color ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div> */}

        {/* SIZE SELECTOR */}
        {/* <div>
          <h3 className="font-semibold text-black">Choose Size:</h3>
          <div className="flex gap-3 mt-2">
            {product.availableSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 flex items-center justify-center border rounded-md ${
                  selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div> */}

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 mt-4">
          
            <AddToCartButton product={product} className="w-44 bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600"/>
        
          {/* <button className="border border-orange-600 text-orange-600 px-6 py-3 rounded-md font-semibold hover:bg-orange-100">
            Reserve in Store
          </button> */}
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
        <div className="mt-6">
          <h3 className="font-semibold mb-2 text-black">Specifications:</h3>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li><strong>Motor:</strong> {product.specifications.motor}</li>
            <li><strong>Battery:</strong> {product.specifications.battery}</li>
            <li><strong>Range:</strong> {product.specifications.range}</li>
            <li><strong>Speed:</strong> {product.specifications.speed}</li>
            <li><strong>Weight:</strong> {product.specifications.weight}</li>
            <li><strong>Wheel Size:</strong> {product.specifications.wheelSize}</li>
            <li><strong>Foldable: </strong>{product.specifications.foldable ? "Yes" : "No"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
