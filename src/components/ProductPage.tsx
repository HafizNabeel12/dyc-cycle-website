"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { AddToCartButton } from "./AddToCartButton";

/**
 * ProductPage.tsx
 * Cycle "Product" Category Page clone of Anton Sport /sykkel layout.
 * - Theme: white, yellow (#facc15), black, gray
 * - All images replaced with gray placeholders
 * - Fully responsive
 * - Semantic HTML + accessible aria labels
 */



export const products = [
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


const SUBCATEGORIES = [
  "Elsykkel",
  "Terreng",
  "Landevei",
  "Gravel",
  "Hybrid/By",
  "Barn/Junior",
  "Deler",
  "Tilbehør",
];



const SORTS = [
  { value: "recommended", label: "Anbefalt" },
  { value: "new", label: "Nyheter" },
  { value: "price-asc", label: "Pris: Lav–Høy" },
  { value: "price-desc", label: "Pris: Høy–Lav" },
];

export default function ProductPage() {
  const [activeSub, setActiveSub] = useState("Elsykkel");
  const [sort, setSort] = useState(SORTS[0].value);
  const [page, setPage] = useState(1);

  const perPage = 24;
  const total = products.length;

  const product = useMemo(() => {
    let arr = [...products];
    if (sort === "price-asc") arr.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
    if (sort === "new") arr.reverse();
    return arr.slice((page - 1) * perPage, page * perPage);
  }, [sort, page]);

  return (
    <main className="bg-white text-gray-900 mt-52 md:mt-36">     
          {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-2 py-3 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-black transition">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li className="text-black font-medium">Sykkel</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-2 pt-6">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-center">
          <div>
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black text-center sm:text-left">Sykkel</h1>
          </div>
        </header>
      </section>

      {/* Product grid */}
      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-2">
        {/* Toolbar */}
        <div className="mb-2 flex items-center justify-between text-sm text-gray-700">
          <div className="text-xs sm:text-sm">{total} produkter</div>
          <div className="flex items-center gap-2">
            {/* Sort functionality commented out as in original */}
          </div>
        </div>

        {/* Grid - Mobile: 2 columns, Desktop: 3 columns */}
        <ul role="list" className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden">
          {products.map((product) => (
            <li key={product.id} className="group rounded-xl sm:rounded-2xl border border-gray-200 p-2 sm:p-3 transition hover:border-black">
              <div className="relative mb-2 sm:mb-3">
                <div className="w-full rounded-lg sm:rounded-xl bg-white" />
                <Link href={`/products/${product.slug}`}>
                  <img 
                    className='object-cover w-[85%] h-[85%] sm:w-full sm:h-full m-auto sm:m-0 rounded-lg sm:rounded-xl'
                    src={product.image} 
                    alt={product.name} 
                  />
                </Link>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-medium text-black group-hover:underline leading-tight">
                  <Link href="#" className="break-words">{product.name}</Link>
                </h3>
              </div>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <div className="flex-1 min-w-0">
                  {product.price < product.originalPrice ? (
                    <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                      <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                        {formatCurrency(product.price)}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 line-through whitespace-nowrap">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                      {formatCurrency(product.price)}
                    </span>
                  )}

                  {product.features?.length && (
                    <ul className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-gray-700">
                      {product.features.slice(0, 2).map((f, i) => (
                        <li key={i} className="rounded-md border border-gray-200 px-1.5 sm:px-2 py-0.5 whitespace-nowrap">
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Add to Cart Button - Always visible on mobile, hover on desktop */}
                <div className="mt-2 sm:mt-0 sm:ml-2 flex-shrink-0">
                  <AddToCartButton 
                    product={product}  
                    className="w-full sm:w-auto rounded-full border border-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition sm:text-white sm:bg-black sm:hover:border-black sm:hover:bg-gray-50 sm:hover:text-black whitespace-nowrap"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* SEO text */}
        <section className="mt-8 sm:mt-10 rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-black">Velg riktig sykkel</h2>
          <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700">
            Utforsk vårt utvalg av elsykler, terreng- og landeveissykler. Vi hjelper deg å finne en sykkel som passer ditt behov—til jobb, trening eller tur.
          </p>
          <ul className="mt-3 list-disc pl-4 sm:pl-5 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700 space-y-1">
            <li>Fri frakt over 1000 kr</li>
            <li>Click &amp; Collect i butikk</li>
            <li>Medlemspriser med bonus</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

/* ---------- Helpers ---------- */
function SortSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen((o) => !o)} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm text-black hover:border-black transition">
        {SORTS.find((s) => s.value === value)?.label ?? "Sorter"}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          {SORTS.map((s) => (
            <li key={s.value}>
              <button onClick={() => { onChange(s.value); setOpen(false); }} className={`block w-full px-3 py-2 text-left text-sm transition hover:bg-gray-50 ${s.value === value ? "bg-gray-50 font-medium" : ""}`}>
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("nb-NO", { style: "currency", currency: "NOK", maximumFractionDigits: 0 }).format(n);
}