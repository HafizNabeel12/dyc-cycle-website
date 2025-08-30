'use client';

import React from 'react';
import { 
  Battery, 
  Zap, 
  Bike, 
  Shield, 
  Award, 
  Wrench, 
  Truck, 
  Clock,
  CheckCircle,
  Users
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      id: '1',
      icon: <Battery className="w-12 h-12 text-yellow-500" />,
      title: 'Long-Lasting Battery',
      description: 'Up to 40+ miles on a single charge with our advanced lithium-ion battery technology.',
      stats: '40+ Miles Range',
      bgColor: 'bg-black'
    },
    {
      id: '2',
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Reach speeds up to 28 MPH with our powerful electric motor system.',
      stats: '28 MPH Top Speed',
      bgColor: 'bg-gray-800'
    },
    {
      id: '3',
      icon: <Bike className="w-12 h-12 text-yellow-500" />,
      title: 'Ultra Portable',
      description: 'Foldable design that fits in tight spaces - perfect for dorms and apartments.',
      stats: 'Compact & Foldable',
      bgColor: 'bg-black'
    },
    {
      id: '4',
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: 'Safety First',
      description: 'Advanced braking system, LED lights, and reflective materials for maximum safety.',
      stats: '360° Safety Features',
      bgColor: 'bg-gray-800'
    }
  ];

  const additionalFeatures = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Premium Quality',
      description: 'Made with aircraft-grade aluminum and premium components.'
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: 'Easy Assembly',
      description: '10-20 minutes setup with included tools and video guide.'
    },
    {
      icon: <Truck className="w-8 h-8 text-yellow-500" />,
      title: 'Free Shipping',
      description: 'Fast delivery within 7 business days, completely free.'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support.'
    }
  ];

  const whyChooseUs = [
    'Over 50,000 satisfied students worldwide',
    '4.9/5 average customer rating',
    '2-year comprehensive warranty',
    '14-day money-back guarantee',
    'Eco-friendly transportation solution',
    'Save $1000+ annually on transportation'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            Why Choose DYU
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Built For
            <span className="block text-yellow-500">Student Life</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every DYU e-bike is engineered with students in mind - combining performance, portability, and affordability.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 ">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative bg-gray-50 border border-gray-200 p-8 rounded-3xl text-black transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              style={{
                animationDelay: `${index * 100}ms`
              }} 
            >
              {/* Background Pattern */}
              {/* <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-yellow-500 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
              </div> */}
              
              <div className="relative z-10 ">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-black mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-yellow-500 text-black rounded-full px-4 py-2 inline-block">
                  <span className="text-sm font-bold">{feature.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="  rounded-3xl p-8 md:p-12 mb-20 ">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Everything You Need
            </h3>
            <p className="text-lg text-gray-600">
              We&apos;ve thought of every detail to make your e-bike experience perfect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-black mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Trusted by Students
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Join Thousands of Happy Students
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              DYU e-bikes have become the preferred choice for students across the globe. 
              Here&apos;s why they trust us with their daily commute.
            </p>
            
            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Right Side - Visual */}
          {/* <div className="relative">
            <div className="bg-black rounded-3xl p-8 text-white">
              
              <div className="bg-gray-800 rounded-2xl p-8 mb-6">
                <div className="text-center">
                  <Bike className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
                  <div className="text-3xl font-bold mb-2 text-yellow-500">50,000+</div>
                  <div className="text-gray-300">Happy Students</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1 text-yellow-500">4.9★</div>
                  <div className="text-sm text-gray-300">Rating</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">40+</div>
                  <div className="text-sm text-gray-300">Miles Range</div>
                </div>
              </div>
            </div> */}
            
            {/* Floating Elements */}
            {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-10 h-10 text-black" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div> */}
      </div>

       
       
    </section>
  );
};

export default Features;