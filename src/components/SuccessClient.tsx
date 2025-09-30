// app/success/SuccessClient.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from './CartContext';
import { Check } from 'lucide-react';

export default function SuccessClient() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const paymentIntentId = searchParams?.get('payment_intent');

  const [loading, setLoading] = useState<boolean>(!!paymentIntentId);
  const [error, setError] = useState<string | null>(null);
  const [paymentIntent, setPaymentIntent] = useState<any>(null);

  useEffect(() => {
    if (!paymentIntentId) {
      setLoading(false);
      setError('Ingen betaling funnet. Prøv igjen.');
      return;
    }

    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `/api/payment-status?payment_intent=${encodeURIComponent(paymentIntentId)}`,
          { method: 'GET', signal: controller.signal }
        );

        const data = await res.json();

        if (!res.ok) {
          setError(data?.error || `Server returned ${res.status}`);
          return;
        }

        if (data.status === 'succeeded') {
          clearCart();
        }

        setPaymentIntent(data);
      } catch (err: any) {
        if (err.name === 'AbortError') return;
        setError(err?.message || 'Nettverksfeil ved lasting av betaling');
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [paymentIntentId]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Behandler bestillingen din...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            Kunne ikke laste ordre
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-gray-100 rounded-md"
          >
            Tilbake til butikk
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        {/* Green check */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center">
            <Check className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Betaling gjennomført
        </h1>

        {/* Order card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left mb-6">
          <p className="font-medium text-gray-900">Ordre</p>
          <p className="text-gray-800 mb-4">{paymentIntent?.id || '123456'}</p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-800">Beløp</span>
              <span className="text-gray-900 font-medium">
                {paymentIntent?.amount
                  ? `${(paymentIntent.amount / 100).toFixed(2)} kr`
                  : '899,00 kr'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Betalingsmåte</span>
              <span className="text-gray-900">Visa</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Dato</span>
              <span className="text-gray-900">
                {new Date().toLocaleDateString('no-NO', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={() => router.push('/')}
          className="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
        >
          Fortsett å handle
        </button>

        {/* Receipt link */}
        <p className="mt-4 text-sm text-gray-600 underline cursor-pointer">
          Last ned kvittering
        </p>
      </div>
    </div>
  );
}
