'use client';

import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Shop E-Bikes',
      links: [
        { name: 'All E-Bikes', href: '/e-bikes' },
        { name: 'Student Specials', href: '/student-deals' },
        { name: 'Budget Models', href: '/budget-bikes' },
        { name: 'Premium Series', href: '/premium-bikes' },
        { name: 'Accessories', href: '/accessories' },
        { name: 'Replacement Parts', href: '/parts' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Assembly Guide', href: '/assembly' },
        { name: 'Warranty Info', href: '/warranty' },
        { name: 'Returns & Exchanges', href: '/returns' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Contact Support', href: '/contact' }
      ]
    },
    {
      title: 'About DYU',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Student Program', href: '/students' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Press', href: '/press' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'E-Bike Buyer\'s Guide', href: '/buyers-guide' },
        { name: 'Maintenance Tips', href: '/maintenance' },
        { name: 'Safety Guidelines', href: '/safety' },
        { name: 'Campus Regulations', href: '/regulations' },
        { name: 'Blog', href: '/blog' },
        { name: 'Community', href: '/community' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/dyucycle', name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/dyucycle', name: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/dyucycle', name: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/dyucycle', name: 'YouTube' }
  ];

  const paymentMethods = [
    'Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay', 'Google Pay'
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="text-3xl font-bold mb-6">
              DYU<span className="text-blue-400">CYCLE</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students with premium, affordable e-bikes designed for campus life. 
              Join over 50,000 students who've made DYU their trusted campus companion.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>1-800-DYU-BIKE (398-2453)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>support@dyucycle.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span>123 Innovation Drive<br />Tech City, TC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Features Row */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-gray-400 text-sm">On all orders over $299</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">2-Year Warranty</h4>
                <p className="text-gray-400 text-sm">Comprehensive coverage</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-purple-600 p-3 rounded-full">
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
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Payment Methods */}
            <div>
              <h4 className="font-semibold mb-3">We Accept</h4>
              <div className="flex flex-wrap gap-3">
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

            {/* Newsletter Signup */}
            <div className="text-center lg:text-right">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-3">Get the latest deals and updates</p>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 DYU Cycle. All rights reserved. | 
            <a href="/privacy" className="hover:text-white ml-1">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-white ml-1">Terms of Service</a>
          </div>
          
          <div className="text-gray-400 text-sm">
            Made with ❤️ for students worldwide
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
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