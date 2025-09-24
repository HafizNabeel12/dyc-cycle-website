'use client';

import { useState } from 'react';
import { stripePromise } from '@/lib/stripe-client';

interface BuyNowButtonProps {
  productId: string;
  productName?: string;
  price?: number;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export default function BuyNowButton({ 
  productId,
  productName,
  price,
  className = '', 
  children,
  disabled = false
}: BuyNowButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (disabled) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe not loaded');
      }

      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });

      if (error) {
        console.error('Stripe redirect error:', error);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const defaultChildren = children || `Buy Now${price ? ` - $${price}` : ''}`;

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading || disabled}
      className={`${className} ${
        isLoading || disabled
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:opacity-90 cursor-pointer'
      } transition-all duration-200 relative`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </div>
      ) : (
        defaultChildren
      )}
    </button>
  );
}