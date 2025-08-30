'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface CartHeaderProps {
  className?: string;
}

const CartHeader: React.FC<CartHeaderProps> = ({ className = '' }) => {
  const { totalItems, totalPrice } = useCart();

  return (
    <div className={`relative ${className}`}>
      <Link href="/cart">
        <Button
          variant="outline"
          size="sm"
          className="relative border-gray-300 hover:bg-gray-50 text-gray-700"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Cart</span>
          
          {/* Cart Count Badge */}
          {totalItems > 0 && (
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems > 99 ? '99+' : totalItems}
            </div>
          )}
        </Button>
      </Link>
      
      {/* Mini Cart Summary (Optional - for larger screens) */}
      {totalItems > 0 && (
        <div className="hidden xl:block absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[200px] z-50">
          <div className="text-sm text-gray-600 mb-1">
            {totalItems} item{totalItems !== 1 ? 's' : ''} in cart
          </div>
          <div className="text-lg font-semibold text-black">
            ${totalPrice.toFixed(2)}
          </div>
          <Link href="/cart">
            <Button 
              size="sm" 
              className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
            >
              View Cart
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartHeader;