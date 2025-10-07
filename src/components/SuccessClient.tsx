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
  const [paymentIntent, setPaymentIntent] = useState<any>(null);

  useEffect(() => {
    if (!paymentIntentId) {
      setLoading(false);
      setError('No payment_intent found in URL. Make sure return_url contains ?payment_intent={PAYMENT_INTENT_ID}');
      return;
    }

    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/payment-status?payment_intent=${encodeURIComponent(paymentIntentId)}`, {
          method: 'GET',
          signal: controller.signal,
        });

        const data = await res.json();
        console.log('GET /api/payment-intent response:', res.status, data);

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
        console.error('Fetch /api/payment-intent failed:', err);
        setError(err?.message || 'Network error while fetching payment');
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [paymentIntentId]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-b-transparent mb-4" />
        <p className="text-gray-600">Processing your order...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">Could not load order details</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <div className="space-x-2">
          <button onClick={() => router.push('/')} className="px-4 py-2 bg-gray-100 rounded-md">Back to shop</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-6 mt-32">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold mb-2 text-black">Payment Successful</h1>
        <p className="text-gray-600 mb-4">Thank you for your purchase.</p>

        {paymentIntent ? (
          <div className="text-left mb-4 text-black">
            <p><strong>Payment ID:</strong> {paymentIntent.id}</p>
            <p><strong>Status:</strong> {paymentIntent.status}</p>
            <p><strong>Amount:</strong> 
              {paymentIntent.amount ? `$${(paymentIntent.amount / 100).toFixed(2)}` : '—'}
            </p>
            <p><strong>Receipt Email:</strong> {paymentIntent.receipt_email || '—'}</p>
          </div>
        ) : (
          <p className="text-gray-500">Payment details are not available.</p>
        )}

        <div className="mt-6">
          <button onClick={() => router.push('/')} className="px-6 py-2 bg-blue-600 text-white rounded-md">Continue shopping</button>
        </div>
      </div>
    </div>
  );
}
