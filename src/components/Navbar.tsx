'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, User, MapPin, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Merker', href: '/brands' },
    { name: 'Medlemstilbud', href: '/member-deals' },
    { name: 'Klær', href: '/clothing' },
    { name: 'Sko', href: '/shoes' },
    { name: 'Ski', href: '/ski' },
    { name: 'Sykkel', href: '/bikes' },
    { name: 'Trening', href: '/training' },
    { name: 'Turutstyr', href: '/hiking-gear' },
    { name: 'Outlet', href: '/outlet' },
    { name: 'Idrettslag & Klubb', href: '/clubs' },
  ];

  const toggleDropdown = (index: React.SetStateAction<null>) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white'
    }`}>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="font-medium">Gratis frakt over 599,-</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/customer-service" className="hover:text-yellow-400 transition-colors">
              Kundeservice
            </Link>
            <Link href="/stores" className="hover:text-yellow-400 transition-colors flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Finn butikk
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl  text-yellow-500">
               Skykellageret
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Hva leter du etter?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-black transition-colors">
                <User className="w-5 h-5" />
                <span>Logg inn / Bli medlem</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:block">
            <div className="flex space-x-8 py-4 overflow-x-auto">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="whitespace-nowrap text-gray-700 hover:text-black font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          {/* Mobile Search */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Hva leter du etter?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Navigation Items */}
          <div className="px-4 py-2">
            <Link
              href="/login"
              className="flex items-center space-x-2 py-3 text-gray-700 border-b border-gray-100"
            >
              <User className="w-5 h-5" />
              <span>Logg inn / Bli medlem</span>
            </Link>
            
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-black transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;