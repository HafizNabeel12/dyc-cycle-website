// app/success/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams?.get('session_id');

  const [loading, setLoading] = useState<boolean>(!!sessionId);
  const [error, setError] = useState<string | null>(null);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      setError('No session_id found in URL. Make sure success_url contains ?session_id={CHECKOUT_SESSION_ID}');
      return;
    }

    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`, {
          method: 'GET',
          signal: controller.signal,
        });

        const data = await res.json();
        console.log('GET /api/checkout-session response:', res.status, data);

        if (!res.ok) {
          setError(data?.error || `Server returned ${res.status}`);
          return;
        }

        setSession(data);
      } catch (err: any) {
        if (err.name === 'AbortError') return;
        console.error('Fetch /api/checkout-session failed:', err);
        setError(err?.message || 'Network error while fetching session');
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [sessionId]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-b-transparent mb-4"></div>
          <p className="text-gray-600">Processing your order...</p>
          <p className="text-xs text-gray-400 mt-2">Fetching confirmation details from server.</p>
        </div>
      </div>
    );
  }

  // Error state (shows helpful instructions)
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">Could not load order details</h2>
          <p className="text-gray-600 mb-4">{error}</p>

          <div className="space-x-2">
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-gray-100 rounded-md"
            >
              Back to shop
            </button>
            <button
              onClick={() => {
                // open dev console instructions
                alert('Open browser DevTools → Network tab → look for GET /api/checkout-session and inspect response JSON.');
              }}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md"
            >
              Debug instructions
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Success UI
  return (
    <div className="min-h-screen flex items-center justify-center p-6 mt-32">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold mb-2 text-black">Payment Successful</h1>
        <p className="text-gray-600 mb-4">Thank you for your purchase.</p>

        {session ? (
          <>
            <div className="text-left mb-4 text-black">
              <p><strong>Order ID:</strong> {session.id}</p>
              <p><strong>Customer:</strong> {session.customer_details?.email || '—'}</p>
              <p><strong>Amount:</strong> {session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : '—'}</p>
              <p className="mt-2"><strong>Payment status:</strong> {session.payment_status}</p>
            </div>

            <div className="text-left">
              <h3 className="font-semibold mb-2">Items</h3>
              {session.line_items?.data?.length ? (
                <ul className="text-sm text-gray-700 space-y-2">
                  {session.line_items.data.map((li: any) => (
                    <li key={li.id} className="flex justify-between">
                      <span>{li.description || li.price?.product || li.price?.nickname || 'Item'}</span>
                      <span>{li.quantity} × ${(li.amount_subtotal / 100 / li.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No line items available.</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500">Order details are not available.</p>
        )}

        <div className="mt-6">
          <button onClick={() => router.push('/')} className="px-6 py-2 bg-blue-600 text-white rounded-md">Continue shopping</button>
        </div>
      </div>
    </div>
  );
}
