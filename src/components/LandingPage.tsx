'use client';

import React from 'react';
import Link from 'next/link';
import { AddToCartButton } from './AddToCartButton';
import { PRODUCTS_DATA } from "@/lib/productData";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white mt-56 md:mt-24">
      
      {/* Hero Section */}
      <section className="flex justify-center items-center sm:m-0">
        <img
          src="/images/hero.png"
          alt="DYU E-Bikes"
          className="max-h-[600px] w-auto md:object-contain md:max-w-7xl md:px-4 sm:px-2"
        />
      </section>

      {/* Why Choose Us Section */}
      <section className="hidden md:block py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center text-gray-800 mb-12">Hvorfor velge Sykkellageret?</h2>
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
              <h3 className="text-xl text-gray-800 mb-3">2 års garanti</h3>
              <p className="text-gray-600">Full garanti på alle våre elektriske sykler</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Gratis frakt</h3>
              <p className="text-gray-600">Fri levering til hele Norge på alle bestillinger</p>
            </div>
          </div>
        </div>
      </section>

    {/* Featured Products */}
<section className="py-16 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
    Utvalgte produkter
  </h2>

  <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden">
    {PRODUCTS_DATA.map((product) => (
      <div
        key={product.id}
        className="group bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col"
      >
        {/* Product Image */}
        <Link href={`/products/${product.slug}`} className="relative">
          <img
            className="object-contain w-full h-64 sm:h-72 p-6"
            src={product.image}
            alt={product.name}
          />
        </Link>

        {/* Info */}
        <div className="px-6 pb-6 flex flex-col flex-grow">
          {/* Name */}
          <h3 className="text-lg text-gray-900 mb-1 group-hover:text-yellow-600">
            {product.name}
          </h3>

          {/* Category */}
          <p className="text-sm text-gray-500 mb-2">{product.category[1]}</p>

          {/* Pricing */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-semibold text-gray-900">
              {product.price} kr
            </span>
            {product.originalPrice && (
              <span className="text-sm line-through text-gray-400">
                {product.originalPrice} kr
              </span>
            )}
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features?.map((feature, i) => (
              <span
                key={i}
                className="text-xs border px-2 py-1 rounded-full text-gray-600"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Button pinned at bottom */}
          <div className="mt-auto">
            <AddToCartButton
              product={product}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              Add to Cart
            </AddToCartButton>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* What are E-bikes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-4">Hva er elektriske sykler?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Opplev fremtiden for sykling med våre innovative e-bikes som kombinerer tradisjonell sykling med moderne teknologi</p>
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
                    <span>Pendlere som vil spare tid</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Eldre som ønsker lettere sykling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Familier med barn og bagasje</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Miljøbevisste som vil gjøre en forskjell</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Alle som elsker å sykle</span>
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
              <p className="text-gray-600 mb-4">&quot;Elsker min nye e-bike! Gjør pendlingen så mye mer behagelig. Anbefaler DYU til alle.&quot;</p>
              <div className="text-sm text-gray-500">- Anne, Trondheim</div>
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
