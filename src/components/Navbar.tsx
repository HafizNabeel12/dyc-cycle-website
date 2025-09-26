'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, User, MapPin, ChevronDown, ShoppingBag, EllipsisVertical  } from 'lucide-react';
import { CartIcon } from './CartIcon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMoreMenuOpen) {
        const drawer = document.getElementById('more-menu-drawer');
        const moreButton = document.getElementById('more-menu-button');
        
        if (drawer && moreButton && !drawer.contains(event.target as Node) && !moreButton.contains(event.target as Node)) {
          setIsMoreMenuOpen(false);
        }
      }
    };

    if (isMoreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMoreMenuOpen]);

  // const navItems = [
  //   { name: 'Sykkel', href: '/cycle' },
  // ];

  const categories = [
    { name: "DYU Bikes", slug: "dyu" },
    { name: "JOBO Bikes", slug: "jobo" },
    { name: "YATDIM Bikes", slug: "yatdim" }
    
  ];

  const moreMenuItems = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const toggleDropdown = (index: React.SetStateAction<null>) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMoreMenu = () => {
    setIsMoreMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300  ${isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white'
        }`}>
        {/* Mobile Version */}
        <div className="md:hidden bg-white">
          {/* Top Row - Logo, User Icon, Cart */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            {/* Logo */}
            <Link href="/">
              <img src="/images/logo.jpg" alt="Logo" className='h-20 w-auto' />
            </Link>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Link href="/cart">
                <CartIcon className='text-gray-700' />
              </Link>

              {/* More Menu Button */}
              <button
                id="more-menu-button"
                onClick={toggleMoreMenu}
                className="flex-shrink-0 p-1"
                aria-label="More menu"
              >
                <EllipsisVertical  className="w-5 h-5 text-gray-700 hover:text-black transition-colors" />
              </button>
            </div>
          </div>

          {/* Menu + Search Row */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Hva leter du etter?"
                  className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>
          </div>

          {/* Navigation Items - Two Rows */}
          <div className="px-2 py-2 overflow-hidden">
            {/* First Row */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-2 items-center justify-center">
              {/* {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-black whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))} */}

              {/* Category Links */}
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="whitespace-nowrap text-gray-700 hover:text-black transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm items-center justify-center">
              {/* {navItems.slice(6).map((item, index) => (
                <Link
                  key={index + 5}
                  href={item.href}
                  className="text-gray-700 hover:text-black whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))} */}
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/">
                <img src="/images/logo.jpg" alt="" className='w-36 items-start' />
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
                <Link href="/" className="text-black hover:text-yellow-400 transition-colors flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Norge
                </Link>
                <Link href="/cart">
                  <CartIcon className='hidden md:flex items-center space-x-2 text-gray-700 hover:text-black transition-colors' />
                </Link>

                {/* More Menu Button - Desktop */}
                <button
                  id="more-menu-button"
                  onClick={toggleMoreMenu}
                  className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors p-2"
                  aria-label="More menu"
                >
                  <EllipsisVertical  className="w-5 h-5" />
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
            <div className="md:block">
              <div className="sm:grid sm:grid-cols-2 md:flex space-x-8 py-4 overflow-x-auto text-xl">
                {/* {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="whitespace-nowrap text-gray-700 hover:text-black transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
                  >
                    {item.name}
                  </Link>
                ))} */}

                {/* Category Links */}
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="whitespace-nowrap text-gray-700 hover:text-black transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - Optional additional menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 max-h-screen overflow-y-auto">
            <div className="px-4 py-2">
              <Link
                href="/login"
                className="flex items-center space-x-3 py-4 text-gray-700 border-b border-gray-100 text-base"
              >
                <User className="w-5 h-5" />
                <span>Logg inn / Bli medlem</span>
              </Link>

              <Link
                href="/"
                className="flex items-center space-x-3 py-4 text-gray-700 border-b border-gray-100 text-base"
              >
                <MapPin className="w-5 h-5" />
                <span>Norge</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* More Menu Drawer/Sheet */}
      {isMoreMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-25 z-50 transition-opacity duration-300" />
          
          {/* Drawer */}
          <div
            id="more-menu-drawer"
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
              isMoreMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">More Options</h2>
              <button
                onClick={closeMoreMenu}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col p-4 space-y-2">
              {moreMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeMoreMenu}
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
                >
                  <span className="text-base font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-500 text-center">
                Need help? Contact our support team
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;