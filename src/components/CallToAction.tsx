'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Gift, 
  Clock, 
  Truck, 
  Shield, 
  Mail,
  Phone,
  MessageCircle,
  Star,
  CheckCircle
} from 'lucide-react';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const offers = [
    {
      icon: <Gift className="w-6 h-6 text-yellow-500" />,
      title: 'Back to School Special',
      description: 'Up to 50% OFF + Free Accessories Worth $150',
      highlight: 'Limited Time'
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: 'Free Express Shipping',
      description: 'Get your e-bike delivered in 3-7 business days',
      highlight: 'No Extra Cost'
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      title: '2-Year Warranty',
      description: 'Complete coverage + 14-day money-back guarantee',
      highlight: 'Peace of Mind'
    }
  ];

  const urgencyFactors = [
    'Only 48 hours left for Back to School pricing',
    'Limited stock available - 73% of models already sold out',
    'Over 500 students joined this week',
    'Free shipping ends midnight Sunday'
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute top-40 right-40 w-60 h-60 border border-yellow-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 border border-gray-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Clock className="w-4 h-4" />
            Limited Time Offer - Ends Soon!
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Don't Miss Out on the
            <span className="block text-yellow-500">
              Biggest Sale of the Year!
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join over 50,000 students who've already transformed their campus experience with DYU e-bikes.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-yellow-500 text-black font-bold px-10 py-4 rounded-full text-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl">
              Shop E-Bikes Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white font-bold px-10 py-4 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Chat with Expert
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gray-300" />
              <span className="text-sm">2-Year Warranty</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-gray-300" />
              <span className="text-sm">Free Shipping</span>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-black rounded-xl p-3 border border-gray-700">
                  {offer.icon}
                </div>
                <div>
                  <div className="text-yellow-500 text-sm font-medium mb-1">{offer.highlight}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-gray-300 text-sm">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Factors */}
        <div className="bg-yellow-500 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            🔥 Why You Need to Act Now
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {urgencyFactors.map((factor, index) => (
              <div key={index} className="flex items-center gap-3 text-black">
                <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                <span className="font-medium">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 mb-16 border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Exclusive Deals & Updates
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Join our newsletter and be the first to know about new models, special discounts, and student offers.
              </p>
              <div className="flex items-center gap-4 text-gray-300">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
                <span>Exclusive student discounts</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
                <span>Early access to new models</span>
              </div>
            </div>
            
            <div>
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your student email"
                      className="flex-1 px-6 py-4 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-30"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">
                    * We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="bg-yellow-500 bg-opacity-20 rounded-2xl p-6 text-center border border-yellow-500">
                  <CheckCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Successfully Subscribed!</h4>
                  <p className="text-yellow-300">Check your email for your welcome discount code.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Call Us</h4>
            <p className="text-gray-300 mb-4">Speak with our e-bike experts</p>
            <a href="tel:1-800-DYU-BIKE" className="text-yellow-500 hover:text-yellow-400 font-medium">
              1-800-DYU-BIKE
            </a>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-800 border border-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Live Chat</h4>
            <p className="text-gray-300 mb-4">Get instant answers 24/7</p>
            <button className="text-yellow-500 hover:text-yellow-400 font-medium">
              Start Chat Now
            </button>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-800 border border-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Email Support</h4>
            <p className="text-gray-300 mb-4">Detailed help & guidance</p>
            <a href="mailto:support@dyucycle.com" className="text-yellow-500 hover:text-yellow-400 font-medium">
              support@dyucycle.com
            </a>
          </div>
        </div>

        {/* Final Push */}
        <div className="text-center">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🎓 Still Have Questions?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our student success team is here to help you choose the perfect e-bike for your campus lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Get Free Consultation
              </button>
              
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300">
                Download Buyer's Guide
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">No pressure consultation</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Expert recommendations</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Student-focused advice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;