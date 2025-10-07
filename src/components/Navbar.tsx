'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  ChevronDown,
  EllipsisVertical,
  X,
} from 'lucide-react';
import { CartIcon } from './CartIcon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<null | number>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'E-Bikes', href: '/', dropdown: true },
    { name: 'Accessories', href: '/accessorie' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const categories = [
    {
      name: 'DYU Bikes',
      slug: 'dyu',
      tagline: 'Smart Compact Mobility',
      image: '/images/d3f/d3f-main.png',
    },
    {
      name: 'JOBO Bikes',
      slug: 'jobo',
      tagline: 'Adventure with Power',
      image: '/images/lyon/lyon-1.png',
    },
  ];

  const moreMenuItems = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        {/* Mobile Version */}
        <div className="md:hidden bg-white">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <Link href="/">
              <img src="/images/logo.jpg" alt="Logo" className="h-20 w-auto" />
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <CartIcon className="text-gray-700" />
              </Link>

              <button
                id="more-menu-button"
                onClick={toggleMoreMenu}
                className="flex-shrink-0 p-1"
                aria-label="More menu"
              >
                <EllipsisVertical className="w-5 h-5 text-gray-700 hover:text-black transition-colors" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Hva leter du etter?"
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400"
              />
            </div>
          </div>

          {/* Mobile Nav Items */}
          <div className="px-2 py-3 space-y-1">
            {/* E-Bikes with expandable dropdown */}
            <button
              onClick={toggleMobileDropdown}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-800 font-medium rounded-md hover:bg-gray-100 transition"
            >
              <span>E-Bikes</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileDropdownOpen && (
              <div className="ml-6 mt-2 space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <div>
                      <p className="text-gray-800 font-medium">{cat.name}</p>
                      <p className="text-xs text-gray-600">{cat.tagline}</p>
                    </div>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-12 h-12 object-contain rounded border border-gray-200"
                    />
                  </Link>
                ))}
              </div>
            )}

            {/* Other nav items */}
            {navItems
              .filter((item) => item.name !== 'E-Bikes')
              .map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-100 transition"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <img src="/images/logo.jpg" alt="Logo" className="w-36" />
              </Link>

              {/* Search Bar */}
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

              {/* Right Side */}
              <div className="flex items-center space-x-4 relative">
                <Link
                  href="/"
                  className="text-black hover:text-yellow-400 transition-colors flex items-center"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Norge
                </Link>
                <Link href="/cart">
                  <CartIcon className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-black transition-colors" />
                </Link>

                {/* More Menu Button */}
                <button
                  onClick={toggleMoreMenu}
                  className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors p-2"
                >
                  <EllipsisVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="relative">
              <div className="flex space-x-8 py-4 text-lg">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => toggleDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200 ${
                        item.dropdown ? 'cursor-pointer' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </button>

                    {/* Dropdown for Categories */}
                    {item.dropdown && activeDropdown === index && (
                      <div className="absolute left-0 top-full w-[550px] bg-white shadow-xl rounded-xl border border-gray-100 p-6 grid grid-cols-2 gap-6 z-50">
                        {categories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/category/${cat.slug}`}
                            className="flex items-center justify-between group hover:bg-gray-50 p-3 rounded-lg transition-all"
                          >
                            <div>
                              <h3 className="text-black font-semibold text-base">
                                {cat.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {cat.tagline}
                              </p>
                            </div>
                            <img
                              src={cat.image}
                              alt={cat.name}
                              className="w-20 h-20 object-contain rounded-md border border-gray-200"
                            />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Right-Side Drawer for More Menu */}
      {isMoreMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-30">
          <div className="w-80 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-700">More Options</h2>
              <button onClick={toggleMoreMenu}>
                <X className="w-5 h-5 text-gray-600 hover:text-black" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {moreMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-black"
                  onClick={toggleMoreMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="absolute bottom-0 w-full p-4 border-t text-center text-sm text-gray-500">
              Need help? Contact our support team
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
