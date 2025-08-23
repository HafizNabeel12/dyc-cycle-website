'use client';

import React from 'react';
import { ArrowRight, Star, Zap, Bike } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-8">
      {/* Background Image - Replace with actual hero image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
        {/* Add actual background image here */}
        {/* <img src="/hero-bg.jpg" alt="DYU E-Bikes" className="w-full h-full object-cover" /> */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-bounce delay-75"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-indigo-400 rounded-full opacity-20 animate-bounce delay-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Badge */}
        {/* <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white border-opacity-30">
          <Star className="w-5 h-5 text-yellow-300" />
          <span className="text-white text-sm font-medium">Back to School Special</span>
          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">SAVE 50%</div>
        </div> */}

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight mt-32">
          Ride Into The
          <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            New School Year
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Premium electric bikes designed for students. Lightweight, foldable, and perfect for campus commuting. 
          Starting at just <span className="font-bold text-yellow-400">$299</span>
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm">30+ Miles Range</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
            <Bike className="w-4 h-4 text-green-300" />
            <span className="text-white text-sm">Lightweight Design</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-blue-300" />
            <span className="text-white text-sm">Premium Quality</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Shop E-Bikes Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            Watch Demo Video
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white border-opacity-20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-300 text-sm">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-gray-300 text-sm">Miles Range</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9★</div>
            <div className="text-gray-300 text-sm">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-white bg-opacity-60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;