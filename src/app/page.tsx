import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import LandingPage from '@/components/LandingPage';

export default function HomePage() {
  return (
    <main className="min-h-screen">

      <LandingPage/>
      
      {/* <Hero /> */}
      {/* <ProductShowcase /> */}
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <CallToAction /> */}
      
    </main>
  );
}