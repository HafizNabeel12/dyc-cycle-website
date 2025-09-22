'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/components/CartContext'; // Adjust path as needed
import { CartSummary } from '../components/CartSummary'; // Adjust path as needed
import { ArrowLeft, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
// import CheckoutButton from '@/components/CheckoutButton'; // ✅ Import the Stripe button

const CartPage: React.FC = () => {
  const { items, totalItems, clearCart, isLoading, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push('/'); // Adjust route as needed
  };

  const handleStartFresh = () => {
    if (confirm('This will clear your current cart. Are you sure?')) {
      clearCart();
    }
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-3 text-gray-600 text-sm">Loading your cart...</span>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-8 mt-52 md:mt-36">
          {/* MOBILE EMPTY CART */}
          <div className="lg:hidden">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Discover amazing products and add them to your cart to get started.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={handleContinueShopping}
                  className="w-full bg-yellow-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition-all duration-200 flex items-center gap-2 justify-center text-sm shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Start Shopping
                </button>
              </div>
            </div>
          </div>

          {/* DESKTOP EMPTY CART - UNCHANGED */}
          <div className="hidden lg:block ">
            <div className=" p-16 text-center max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleContinueShopping}
                  className="bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-all duration-200 flex items-center gap-2 justify-center shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8 mt-48">
        {/* MOBILE LAYOUT */}
        <div className="lg:hidden">
          <div className="bg-white p-6 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Shopping Cart</h1>
                <p className="text-sm text-gray-500 mt-1">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
                      {item.image ? (
                        <Image 
                          src={item.image} 
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">No image</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h3>
                        <p className="text-xs text-gray-500 mt-1">Category: {item.category || 'General'}</p>
                      </div>
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="h-3 w-3 text-gray-800" />
                        </button>
                        <span className="text-sm font-semibold min-w-[24px] text-center text-black">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="h-3 w-3 text-gray-800" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-bold text-yellow-500">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-xs text-gray-500">${item.price} each</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cart Summary */}
          <div className="bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
            <CartSummary className="mb-3" />
            {/* ✅ Replaced old button with CheckoutButton */}
            {/* <CheckoutButton cartItems={items} /> */}
            
            <button
              onClick={handleContinueShopping}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2 text-sm mt-3"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </button>
          </div>
          <div className="h-32"></div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-500 mt-1">
                {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6">
                  <div className="space-y-6">
                    {items.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-center gap-6">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
                              {item.image ? (
                                <Image 
                                  src={item.image} 
                                  alt={item.name}
                                  width={96}
                                  height={96}
                                  className="w-full h-full "
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-gray-400 text-sm">No image</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-500">Category: {item.category || 'General'}</p>
                            
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-600">Qty:</span>
                                <div className="flex items-center gap-3">
                                  <button 
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                  >
                                    <Minus className="h-4 w-4 text-gray-600" />
                                  </button>
                                  <span className="text-base font-semibold min-w-[32px] text-center text-black">{item.quantity}</span>
                                  <button 
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                  >
                                    <Plus className="h-4 w-4 text-gray-600" />
                                  </button>
                                </div>
                              </div>
                              
                              <div className="text-right">
                                <p className="text-2xl font-bold text-yellow-600">${(item.price * item.quantity).toFixed(2)}</p>
                                <p className="text-sm text-gray-500">${item.price} each</p>
                              </div>
                            </div>
                          </div>

                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        {index < items.length - 1 && <hr className="border-gray-100 mt-6" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <CartSummary />
                {/* ✅ Replaced old button with CheckoutButton */}
                {/* <CheckoutButton cartItems={items} /> */}
                
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <button
                    onClick={handleContinueShopping}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </button>
                  
                  <div className="text-center mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-2">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      Secure checkout with SSL encryption
                    </div>
                    <p className="text-xs text-gray-400">
                      Your cart is automatically saved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
