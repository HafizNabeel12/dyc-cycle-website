'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '@/components/CartContext'; // Import your CartContext
import PaymentForm from '@/components/PaymentForm';

// Replace with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string[];
}

export default function CheckoutClient() {
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Use CartContext - this is the ONLY source of cart data
  const { items: cartItems, totalItems, isLoading: cartLoading } = useCart();

  console.log('=== CHECKOUT CLIENT DEBUG ===');
  console.log('Cart items from context:', cartItems);
  console.log('Total items from context:', totalItems);
  console.log('Cart loading:', cartLoading);

  useEffect(() => {
    console.log('=== CHECKOUT USEEFFECT ===');
    console.log('Cart loading state:', cartLoading);
    console.log('Cart items:', cartItems);
    
    // Wait for cart to load first
    if (cartLoading) {
      console.log('Still loading cart, waiting...');
      setLoading(true);
      return;
    }
    
    // Now check cart contents
    console.log('Cart loaded. Items count:', cartItems.length);
    console.log('Cart items detail:', cartItems);
    
    // Check if cart is empty
    if (!cartItems || cartItems.length === 0) {
      console.log('Cart is empty');
      setError('Your cart is empty. Please add some products to your cart before checkout.');
      setLoading(false);
      return;
    }
    
    // Cart has items, create payment intent
    console.log('Creating payment intent for items:', cartItems);
    createPaymentIntent(cartItems);
    
  }, [cartItems, cartLoading, totalItems]); // React to changes in cart

  const createPaymentIntent = async (items: CartItem[]) => {
    console.log('=== CREATING PAYMENT INTENT ===');
    console.log('Items to process:', items);
    
    setLoading(true);
    setError(null);
    
    try {
      const requestBody = {
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          category: item.category || 'general'
        }))
      };
      
      console.log('Sending to API:', requestBody);
      
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('API response data:', data);
      
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        console.log('✅ Client secret set successfully');
      } else {
        throw new Error('No client secret received');
      }
      
    } catch (err: any) {
      console.error('❌ Payment intent creation failed:', err);
      setError(`Payment setup failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Show loading state
  if (cartLoading) {
    return (
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Loading your cart...</h3>
          <div className="flex items-center gap-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <p className="text-sm text-blue-700">Please wait while we load your cart items</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Debug Panel - Disabled */}
      {false && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">✅ Cart Status (CartContext Only)</h3>
          <div className="text-sm text-green-700 space-y-1">
            <p>Cart Items: {cartItems.length}</p>
            <p>Total Items: {totalItems}</p>
            <p>Loading: {cartLoading ? 'Yes' : 'No'}</p>
            <p>Client Secret: {clientSecret ? '✅ Ready' : '❌ Not set'}</p>
            {error && <p className="text-red-600">Error: {error}</p>}
            
            {cartItems.length > 0 && (
              <div className="mt-2 p-2 bg-green-100 rounded">
                <p className="font-semibold">Cart Contents:</p>
                {cartItems.map((item, i) => (
                  <p key={i} className="text-xs">
                    • {item.name} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </p>
                ))}
                <p className="text-xs font-semibold mt-1">
                  Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Setup Error</h3>
              <p className="mt-1 text-sm text-red-700">{error}</p>
              <div className="mt-3 space-x-3">
                <button
                  onClick={() => window.history.back()}
                  className="text-sm text-red-800 underline hover:text-red-600"
                >
                  ← Go back to cart
                </button>
                <button
                  onClick={() => {
                    setError(null);
                    if (cartItems.length > 0) {
                      createPaymentIntent(cartItems);
                    }
                  }}
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && cartItems.length > 0 && (
        <div className="bg-white p-8 rounded-lg border text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4">Setting up your payment...</p>
        </div>
      )}

      {/* Payment Form - Only show when we have items and client secret */}
      {!loading && !error && cartItems.length > 0 && (
        <div className="bg-white rounded-lg border shadow-sm">
          {clientSecret && stripePromise ? (
            <Elements 
              options={{
                clientSecret,
                appearance: {
                  theme: 'stripe' as const,
                  variables: {
                    colorPrimary: '#2563eb',
                    colorBackground: '#ffffff',
                    colorText: '#374151',
                    colorDanger: '#dc2626',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    spacingUnit: '4px',
                    borderRadius: '6px',
                    fontSizeBase: '14px',
                  },
                },
              }} 
              stripe={stripePromise}
            >
              <PaymentForm  />
            </Elements>
          ) : (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Complete Your Order ({cartItems.length} items)</h2>
              <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded">
                <p className="text-gray-600 mb-4">
                  {clientSecret ? 'Loading payment form...' : 'Setting up payment...'}
                </p>
                <div className="text-sm text-gray-500">
                  <p>Cart Items: {cartItems.length}</p>
                  <p>Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}