'use client';

import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  CreditCard,
  Shield,
  Truck,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const paymentMethods = [
    'Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay', 'Google Pay'
  ];

  return (
    <footer className="bg-black text-white ">
      {/* Features Row */}
      <div className="border-t border-gray-800 pt-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-56 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
            <div className="p-3 rounded-full">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold">Free Shipping</h4>
              <p className="text-gray-400 text-sm">On all orders over $299</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
            <div className="p-3 rounded-full">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold">2-Year Warranty</h4>
              <p className="text-gray-400 text-sm">Comprehensive coverage</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
            <div className="p-3 rounded-full">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold">Secure Payment</h4>
              <p className="text-gray-400 text-sm">256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 pt-8 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Payment Methods */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-3">We Accept</h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-gray-800 px-3 py-2 rounded text-sm text-gray-300"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-8 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="text-gray-400 text-sm">
          © 2024 DYU Cycle. All rights reserved. | 
          <a href="/privacy" className="hover:text-white ml-1">Privacy Policy</a> | 
          <a href="/terms" className="hover:text-white ml-1">Terms of Service</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-400 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
