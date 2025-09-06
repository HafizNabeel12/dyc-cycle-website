// app/cart/page.tsx or pages/cart.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/CartContext'; // Adjust path as needed
import { CartItemRow  } from '@/components/CartItemRow'; // Adjust path as needed
import { CartSummary } from '../components/CartSummary'; // Adjust path as needed
import { ArrowLeft, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, totalItems, clearCart, isLoading } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    // Your checkout logic here
    clearCart();
    alert('Order placed successfully! Cart has been cleared.');
    // Optionally redirect to success page
    // router.push('/checkout/success');
  };

  const handleContinueShopping = () => {
    // Navigate back to products or home page
    router.push('/'); // Adjust route as needed
  };

  const handleStartFresh = () => {
    if (confirm('This will clear your current cart. Are you sure?')) {
      clearCart();
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          <span className="ml-4 text-gray-600">Loading your cart...</span>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-40 md:mt-16">
        <div className="text-center py-16">
          <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContinueShopping}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-black transition-colors flex items-center gap-2 justify-center"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </button>
            
            <button
              onClick={handleStartFresh}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Start Fresh Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        {/* <div className="flex gap-4">
          <button
            onClick={handleContinueShopping}
            className="text-yellow-500 hover:text-black flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </button>
          
          <button
            onClick={handleStartFresh}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Start Fresh
          </button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-black">
                Cart Items ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </h2>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItemRow 
                    key={item.id} 
                    item={item} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <CartSummary 
            showCheckoutButton={true}
            onCheckout={handleCheckout}
            className="sticky top-6"
          />
          
          {/* Additional Actions */}
          <div className="mt-6 space-y-3">
            <button
              onClick={handleContinueShopping}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </button>
            
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                🛡️ Secure checkout with SSL encryption
              </p>
              <p className="text-xs text-gray-400">
                Your cart is automatically saved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;