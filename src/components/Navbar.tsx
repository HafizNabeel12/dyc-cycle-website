'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  MapPin,
  ChevronDown,
  EllipsisVertical,
  X,
  ChevronRight,
} from 'lucide-react';
import { CartIcon } from './CartIcon';
import { searchProducts } from '@/lib/productData'; // <-- adjust path if needed

export default function Navbar() {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<null | number>(null);

  // Search state
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Mobile e-bikes accordion
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Refs to detect outside click for search dropdown (desktop + mobile)
  const desktopSearchRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Debounced search: wait 250ms after user stops typing
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const id = setTimeout(() => {
      try {
        const found = searchProducts(query);
        setResults(found || []);
        setShowResults(true);
      } catch (err) {
        console.error('searchProducts error', err);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 250);

    return () => clearTimeout(id);
  }, [query]);

  // Close search dropdown and mobile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = desktopSearchRef.current?.contains(target);
      const insideMobile = mobileSearchRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setShowResults(false);
      }
      
      // Close mobile dropdown if clicking outside
      const mobileNavElement = document.querySelector('.mobile-nav-container');
      if (mobileNavElement && !mobileNavElement.contains(target)) {
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard: Escape closes results, Enter performs a full search page redirect
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setShowResults(false);
    } else if (e.key === 'Enter') {
      // Go to search page with query
      if (query.trim()) {
        router.push(`/search?query=${encodeURIComponent(query.trim())}`);
        setShowResults(false);
      }
    }
  };

  const navItems = [
    { name: 'E-Sykler', href: '', dropdown: true, mobileHref: '#products' },
    { name: 'Sykkelutstyr', href: '/accessorie' },
    { name: 'Kontakt oss', href: '/contact' },
  ];

  const categories = [
    {
      name: 'By og Pendler',
      slug: 'by-pendler',
      image: '/images/Stroll1/stroll1-main.png',
    },
    {
      name: 'Terreng',
      slug: 'terreng',
      image: '/images/dyno/dyno-1.png',
    },
    {
      name: 'Hybrid',
      slug: 'hybrid',
      image: '/images/lyon/lyon-1.png',
    },
    {
      name: 'Sammenleggbar',
      slug: 'sammenleggbar',
      image: '/images/d3f/d3f-main.png',
    },
    {
      name: 'Lastesykkel',
      slug: 'lastesykkel',
      image: '/images/transer/transer-1.png',
    },
    {
      name: 'Fatbike',
      slug: 'fatbike',
      image: '/images/C9/c9-main.png',
    },
  ];

  const moreMenuItems = [
    { name: 'Vilkår for tjeneste', href: '/terms' },
    { name: 'Kontakt oss', href: '/contact' },
  ];

  const toggleDropdown = (index: number) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const toggleMobileDropdown = () =>
    setMobileDropdownOpen((s) => !s);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        {/* MOBILE */}
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
                aria-label="Mer meny"
              >
                <EllipsisVertical className="w-5 h-5 text-gray-700 hover:text-black transition-colors" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="px-4 py-3 border-b border-gray-200" ref={mobileSearchRef}>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => { if (results.length) setShowResults(true); }}
                type="text"
                placeholder="Hva leter du etter?"
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400"
              />

              {/* Mobile search results (expand under input) */}
              {showResults && results.length > 0 && (
                <div className="mt-2 bg-white border border-gray-200 rounded-md shadow max-h-64 overflow-y-auto">
                  {results.slice(0, 8).map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="flex items-center justify-between px-3 py-2 hover:bg-gray-50"
                      onClick={() => {
                        setShowResults(false);
                        setQuery('');
                      }}
                    >
                      <div className="text-left">
                        <div className="text-sm font-medium text-black">{product.name}</div>
                        {product.price !== undefined && (
                          <div className="text-xs text-gray-500 mt-1">
                            {typeof product.price === 'number' ? `${product.price} kr` : product.price}
                          </div>
                        )}
                      </div>
                      <img
                        src={product.image || '/images/placeholder.png'}
                        alt={product.name}
                        className="w-12 h-12 object-contain rounded-md border border-gray-200 ml-2"
                      />
                    </Link>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* Mobile nav (horizontal layout) */}
          <div className="px-2 py-3 mobile-nav-container relative">
            <div className="flex gap-1 overflow-x-auto">
              {navItems.map((item) => (
                <div key={item.name} className="flex-shrink-0">
                  {item.dropdown ? (
                    <button
                      onClick={toggleMobileDropdown}
                      className="px-2 py-2 text-xs text-gray-800 rounded-md hover:bg-gray-100 transition whitespace-nowrap flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className={`w-3 h-3 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <a
                      href={item.mobileHref || item.href}
                      className="px-2 py-2 text-xs text-gray-800 rounded-md hover:bg-gray-100 transition whitespace-nowrap"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile dropdown outside overflow container */}
            {mobileDropdownOpen && (
              <div className="absolute top-full left-2 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-[60]">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="block px-3 py-2 text-xs text-gray-800 hover:bg-gray-100 transition"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
            <div className="px-8 py-4 border-t border-gray-200 text-center flex-shrink-0">
                          <Link
                            href="/cycle"
                            className="inline-flex items-center gap-2 text-xs text-yellow-500 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All E-Bikes
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <img src="/images/logo.jpg" alt="Logo" className="w-36" />
              </Link>

              {/* Desktop Search (with results dropdown) */}
              <div className="hidden md:flex flex-1 max-w-lg mx-8 relative" ref={desktopSearchRef}>
                <div className="relative w-full">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => { if (results.length) setShowResults(true); }}
                    type="text"
                    placeholder="Hva leter du etter?"
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                  <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>

                {/* Desktop results dropdown */}
                {showResults && results.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-50 max-h-72 overflow-y-auto">
                    {results.slice(0, 8).map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setShowResults(false);
                          setQuery('');
                        }}
                      >
                        <div className="text-left">
                          <div className="text-sm font-medium text-black">{product.name}</div>
                          {product.price !== undefined && (
                            <div className="text-xs text-gray-500 mt-1">
                              {typeof product.price === 'number' ? `${product.price} kr` : product.price}
                            </div>
                          )}
                        </div>

                        <img
                          src={product.image || '/images/placeholder.png'}
                          alt={product.name}
                          className="w-12 h-12 object-contain rounded-md border border-gray-200 ml-2"
                        />
                      </Link>
                    ))}
                  </div>
                  
                )}
                 
              </div>

              {/* Right side icons */}
              <div className="flex items-center space-x-4 relative">
                <Link href="/" className="text-black hover:text-yellow-400 transition-colors flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Norge
                </Link>
                <Link href="/cart">
                  <CartIcon className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-black transition-colors" />
                </Link>

                {/* More menu button */}
                <button onClick={toggleMoreMenu} className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors p-2">
                  <EllipsisVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Desktop nav: hover dropdown for E-Bikes */}
            <div className="relative">
              <div className="flex space-x-8 py-4 text-lg">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => item.dropdown && toggleDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      {item.dropdown && <ChevronDown className="w-4 h-4 text-gray-500" />}
                    </Link>

                    {/* Improved dropdown for E-Bikes on desktop */}
                    {item.dropdown && activeDropdown === index && (
                      <div className="absolute left-0 top-full w-[700px] bg-white shadow-2xl rounded-xl border border-gray-100 p-6 z-50">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Velg din perfekte e-sykkel</h3>
                          <p className="text-gray-600">Utforsk vårt utvalg av høykvalitets elektriske sykler</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/category/${cat.slug}`}
                              className="group hover:bg-gray-50 p-4 rounded-xl transition-all border border-gray-100 hover:border-yellow-300 hover:shadow-md"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex flex-col items-center text-center">
                                {/* <img src={cat.image} alt={cat.name} className="w-16 h-16 object-contain rounded-lg border border-gray-200 group-hover:scale-105 transition-transform mb-2" /> */}
                                <div>
                                  <h4 className="text-black font-semibold text-sm group-hover:text-yellow-600 transition-colors">{cat.name}</h4>
                                </div>
                              </div>
                            </Link>
                          ))}

                        </div>
                          <div className="px-8 py-4 border-t border-gray-200 text-center flex-shrink-0">
                          <Link
                            href="/cycle"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All E-Bikes
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Right-side drawer for More Menu */}
      {isMoreMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-30">
          <div className="w-80 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-700">Flere alternativer</h2>
              <button onClick={toggleMoreMenu}>
                <X className="w-5 h-5 text-gray-600 hover:text-black" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {moreMenuItems.map((item) => (
                <Link key={item.name} href={item.href} className="block text-gray-700 hover:text-black" onClick={toggleMoreMenu}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 w-full p-4 border-t text-center text-sm text-gray-500">Trenger du hjelp? Kontakt vårt supportteam</div>
          </div>
        </div>
      )}
    </>
  );
}
