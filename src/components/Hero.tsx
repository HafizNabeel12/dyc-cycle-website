'use client';

import React from 'react';
import { ArrowRight, Star, Zap, Bike } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center  ">

      {/* Background Pattern */}

      <div className='z-30'>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 mt-40 ml-8 leading-tight ">
          End of Summer Sale
          <span className="block text-yellow-500">
            Upto 30% OFF
          </span>
        </h1>

          <div className="flex flex-col sm:flex-row ml-8">
          <button className="group bg-yellow-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-2xl">
            Shop  Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
        </div>

        </div>
      <div className="absolute ">
        <div className="w-full h-full">

        {/* Add actual background image here with overlay */}
        <img src="/images/hero.png" alt="DYU E-Bikes" className="w-full h-full object-cover mt-72 " />


        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div> */}
      </div>

      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gray-400 rounded-full opacity-10 animate-bounce delay-75"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-gray-500 rounded-full opacity-10 animate-bounce delay-300"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Badge */}
        {/* <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-6 py-3 mb-8">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="text-white text-sm font-medium">Back to School Special</span>
          <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">SAVE 50%</div>
        </div> */}

        {/* Main Heading */}
        {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 mt-40 leading-tight">
          Ride Into The
          <span className="block text-yellow-500">
            New School Year
          </span>
        </h1> */}

        {/* Subheading */}
        {/* <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
          Premium electric bikes designed for students. Lightweight, foldable, and perfect for campus commuting. 
          Starting at just <span className="font-bold text-yellow-500">$299</span>
        </p> */}

        {/* Feature Pills */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-white text-sm">30+ Miles Range</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-2">
            <Bike className="w-4 h-4 text-yellow-500" />
            <span className="text-white text-sm">Lightweight Design</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-white text-sm">Premium Quality</span>
          </div>
        </div> */}

        {/* CTA Buttons */}
      

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-10 pt-16 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">50K+</div>
            <div className="text-gray-400 text-sm">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">30+</div>
            <div className="text-gray-400 text-sm">Miles Range</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">4.9★</div>
            <div className="text-gray-400 text-sm">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-yellow-500 rounded-full"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;