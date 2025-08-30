'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import Link from 'next/link';
import { useCart } from './CartContext';
import { CartIcon } from './CartIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, totalPrice } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/product' },
    // { label: 'Accessories', href: '/accessories' },
    // { label: 'Support', href: '/support' },
    { label: 'About us', href: '/about-us' },
    { label: 'Contact us', href: '/contact-us' }
  ];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-2xl' : 'bg-transparent'
    }`}>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm font-medium">
        🎓 Back to School Sale - Up to 50% OFF + Free Shipping! Limited Time Only
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-black">
              DYU<span className="text-yellow-500">CYCLE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-yellow-500 ${
                  isScrolled ? 'text-black' : 'text-black'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Search className={`w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors ${
              isScrolled ? 'text-black' : 'text-black'
            }`} />
            <User className={`w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors ${
              isScrolled ? 'text-black' : 'text-black'
            }`} /> */}
            <div className="relative">
              <Link href="/cart">
              <CartIcon/>
              </Link>
            </div>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-yellow-500 transition-colors`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-black hover:text-yellow-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t pt-3 mt-3">
              <button className="w-full bg-yellow-500 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;