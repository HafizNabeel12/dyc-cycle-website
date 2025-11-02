'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AddToCartButton } from './AddToCartButton';
import { PRODUCTS_DATA } from "@/lib/productData";
import { formatCurrency } from '@/utils/currency';
import EbikeCalculator from './EbikeFinder/EbikeCalculator';
import { Minus, Plus } from 'lucide-react';

const LandingPage = () => {

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantities(prev => ({ ...prev, [productId]: newQuantity }));
  };

  const getQuantity = (productId: string) => quantities[productId] || 1;
  
  return (
    <div className="min-h-screen bg-white mt-32 md:mt-24">

      {/* Hero Section */}
      <section className="flex justify-center items-center sm:m-0">
        <img
          src="/images/hero.png"
          alt="DYU E-Bikes"
          className="max-h-[600px] w-auto md:object-contain md:max-w-7xl md:px-4 sm:px-2"
        />
      </section>

        {/* ===== Popular Categories Section ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black mb-8">
            POPULÆRE KATEGORIER
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center text-center">
            {/* Pendler */}
            <Link href="/category/Pendler">
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/lyon/lyon-1.png"
                  alt="Pendler"
                  width={200}
                  height={200}
                  priority
                  className="mx-auto w-48 h-48 object-contain"
                />
                <div className="mt-3 flex justify-center items-center gap-1 text-black font-medium text-base">
                  <span>Pendler</span>
                  <span className="text-yellow-500">➜</span>
                </div>
              </div>
            </Link>

            {/* Fatbike */}
            <Link href="/category/Fatbike">
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/mover/mover-1.png"
                  alt="Fatbike"
                  width={200}
                  height={200}
                  priority
                  className="mx-auto w-48 h-48 object-contain"
                />
                <div className="mt-3 flex justify-center items-center gap-1 text-black font-medium text-base">
                  <span>Fatbike</span>
                  <span className="text-yellow-500">➜</span>
                </div>
              </div>
            </Link>

            {/* Sammenleggbar */}
            <Link href="/category/Sammenleggbar">
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/eddy-x/eddy-1.png"
                  alt="Sammenleggbar"
                  width={200}
                  height={200}
                  priority
                  className="mx-auto w-48 h-48 object-contain"
                />
                <div className="mt-3 flex justify-center items-center gap-1 text-black font-medium text-base">
                  <span>Sammenleggbar</span>
                  <span className="text-yellow-500">➜</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* View All E-bikes Button */}
          <div className="flex justify-center mt-12">
            <Link href="/cycle">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-lg">Se alle el-sykler</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

     

       {/* Featured Products */}
      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-2 mb-16">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
            Bestselgere
          </h2>
        </div>

        <ul
          role="list"
          className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden"
        >
          {PRODUCTS_DATA.slice(0, 6).map((product) => (
            <li
              key={product.id}
              className="group rounded-xl sm:rounded-2xl border border-gray-200 p-2 sm:p-3 transition hover:border-black"
            >
              <div className="relative mb-2 sm:mb-3">
                <Link href={`/products/${product.slug}`}>
                  <img
                    className="object-cover w-[85%] h-[85%] sm:w-full sm:h-full m-auto sm:m-0 rounded-lg sm:rounded-xl"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-medium text-black group-hover:underline leading-tight">
                  <Link href={`/products/${product.slug}`} className="break-words">
                    {product.name}
                  </Link>
                </h3>
              </div>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <div className="flex-1 min-w-0">
                  {product.price < product.originalPrice ? (
                    <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                      <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                        {formatCurrency(product.price)}
                      </span>
                      {/* <span className="text-xs sm:text-sm text-gray-500 line-through whitespace-nowrap">
                        {formatCurrency(product.originalPrice)}
                      </span> */}
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                      {formatCurrency(product.price)}
                    </span>
                  )}
                </div>

                {/* Quantity + Add to Cart */}
                <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-2">
                  {/* Compact Quantity Selector */}
                  <div className="flex items-center border border-gray-200 rounded-md w-fit">
                    <button
                      onClick={() => handleQuantityChange(product.id, getQuantity(product.id) - 1)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="h-3 w-3 text-gray-600" />
                    </button>
                    <span className="text-xs font-semibold min-w-[16px] text-center text-black px-1">
                      {getQuantity(product.id)}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(product.id, getQuantity(product.id) + 1)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="h-3 w-3 text-gray-600" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <AddToCartButton
                    product={product}
                    quantity={getQuantity(product.id)}
                    className="w-full sm:flex-1 rounded-full border border-gray-300 px-1 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-white bg-[#12b190] hover:bg-[#12b190] transition sm:bg-black sm:hover:border-black sm:hover:bg-gray-50 sm:hover:text-black whitespace-nowrap"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* View All E-bikes Button */}
          <div className="flex justify-center mt-12">
            <Link href="/cycle">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-lg">Se alle el-sykler</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
      </section>


       <section>

        <EbikeCalculator products={PRODUCTS_DATA} />
      </section>



      {/* What are E-bikes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4">Sykkellageret – spesialisten på el-sykler i Norge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Oppdag el-sykler som kombinerer sykkelglede med smart teknologi. Hos Sykkellageret får du kvalitet, service og trygg handel – derfor velger flere oss.
</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 mb-2">Miljøvennlig transport</h3>
                  <p className="text-gray-600">Reduser karbonavtrykket ditt med null utslipp og bidra til en renere fremtid</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 mb-2">Spar tid og penger</h3>
                  <p className="text-gray-600">Unngå trafikk, parkeringsavgifter og drivstoffkostnader med smart pendling</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 mb-2">Bedre helse og kondisjon</h3>
                  <p className="text-gray-600">Få mosjon mens du pendler - perfekt balanse mellom trening og transport</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 mb-2">Kraftig assistanse</h3>
                  <p className="text-gray-600">Elektrisk motor gir deg ekstra kraft på bakker og lange turer</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black">
                <h3 className="text-2xl mb-6">Perfekt for alle</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span><strong>Pendlere</strong> som vil spare tid og komme raskere frem.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span><strong>Deg</strong> som ønsker en lettere og mer behagelig sykkeltur</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span><strong>Familier</strong> med barn og bagasje som trenger ekstra kraft.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span><strong>Miljøbevisste</strong> som vil gjøre en grønn forskjell i hverdagen.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span><strong>Sykkelentusiaster</strong> som bare elsker friheten på to hjul.</span>
                  </div>
                   <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span><strong>Eventyrlystne</strong> som vil på tur og utforske naturen.</span>
                  </div>
                   <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span><strong>Byutforskere</strong> som vil oppdage nye steder på en enkel og morsom måte.</span>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center text-gray-800 mb-12">Hva kundene sier</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">&quot;Fantastisk sykkel! Perfekt for daglige turer til jobb. Batteriet holder lenge og sykkelen er lett å håndtere.&quot;</p>
              <div className="text-sm text-gray-500">- Maria, Oslo</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">&quot;Kjøpte DYU for 6 måneder siden. Fortsatt like fornøyd! Kvaliteten er topp og kundeservicen er utmerket.&quot;</p>
              <div className="text-sm text-gray-500">- Lars, Bergen</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">&quot;Elsker min nye el-sykkel! Gjør pendlingen så mye mer behagelig. Anbefaler DYU til alle.&quot;</p>
              <div className="text-sm text-gray-500">- Anne, Trondheim</div>
            </div>
          </div>
        </div>
      </section>

 <section className="hidden md:block py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center text-gray-800 mb-12">Sykkellageret – valgt av kunder over hele Norge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Kraftig ytelse</h3>
              <p className="text-gray-600">Opptil 60km rekkevidde med våre avanserte batterier</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Angrerett</h3>
              <p className="text-gray-600">14 dager etter levering</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Gratis frakt</h3>
              <p className="text-gray-600">Fri levering til hele Norge på alle bestillinger</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-yellow-500 mb-2">5000+</div>
              <div className="text-gray-300">Fornøyde kunder</div>
            </div>
            <div>
              <div className="text-4xl text-yellow-500 mb-2">opp til 60km</div>
              <div className="text-gray-300">Maks rekkevidde</div>
            </div>
            <div>
              <div className="text-4xl text-yellow-500 mb-2">2 år</div>
              <div className="text-gray-300">Garanti</div>
            </div>
            <div>
              <div className="text-4xl text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-300">Kundesupport</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



export default LandingPage;
