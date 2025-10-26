// app/success/SuccessClient.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from './CartContext';

export default function SuccessClient() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const paymentIntentId = searchParams?.get('payment_intent');

  const [loading, setLoading] = useState<boolean>(!!paymentIntentId);
  const [error, setError] = useState<string | null>(null);
  const [cardType, setCardType] = useState<string>('Kort');

  useEffect(() => {
    clearCart();
    
    if (paymentIntentId) {
      fetchCardType();
    } else {
      setLoading(false);
    }
  }, [clearCart, paymentIntentId]);

  const fetchCardType = async () => {
    try {
      const response = await fetch(`/api/payment-status?payment_intent=${paymentIntentId}`);
      if (response.ok) {
        const data = await response.json();
        if (data?.payment_method?.card?.brand) {
          const brand = data.payment_method.card.brand;
          setCardType(brand.charAt(0).toUpperCase() + brand.slice(1));
        }
      } else {
        console.error('API returned:', response.status);
      }
    } catch (err) {
      console.error('Failed to fetch card type:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent mb-4 mx-auto" />
        <p className="text-gray-700 text-lg font-medium">Behandler bestillingen din...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 mb-3">Kunne ikke laste bestillingsdetaljer</h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">{error}</p>
        <button 
          onClick={() => router.push('/')} 
          className="w-full py-3 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Tilbake til butikk
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 mt-32 md:mt-20">
      <div className="w-72 md:w-80 bg-white rounded-2xl shadow-xl p-6 text-center">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-100 mx-auto mb-6 shadow-inner">
          <svg className="w-10 h-10 md:w-12 md:h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Betaling vellykket!</h1>
        <p className="text-gray-600 mb-6 text-xs md:text-sm leading-relaxed">
          Takk for ditt kjøp. Du vil motta en e-post med ordrebekreftelse og sporingsinformasjon.
        </p>

        {/* Order Info */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
          <div className="space-y-2 text-xs md:text-sm">
            {paymentIntentId && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Ordre-ID:</span>
                <span className="text-gray-900 font-semibold font-mono text-xs">{paymentIntentId}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Korttype:</span>
              <span className="text-gray-900 font-semibold">{cardType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Status:</span>
              <span className="text-green-600 font-semibold">Fullført</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => window.location.href = '/'} 
          className="w-full py-3 bg-yellow-500 text-white rounded-xl font-semibold text-sm md:text-base hover:bg-yellow-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Fortsett å handle
        </button>
      </div>
    </div>
  );
}
