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
    <section className="bg-gray-200">
    

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

        
    </section>
  );
};

export default CallToAction;