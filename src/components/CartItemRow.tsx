'use client';

import React from 'react';
import { useCart, CartItem } from '@/components/CartContext'; // Adjust path as needed
import { Plus, Minus, Trash2 } from 'lucide-react';
import { formatCurrency } from '@/utils/currency';

interface CartItemRowProps {
  item: CartItem;
  className?: string;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({ item, className = '' }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className={`flex items-center gap-4 p-4 border rounded-lg ${className}`}>
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        {item.category && (
          <p className="text-sm text-gray-600">Category: {item.category}</p>
        )}
        <p className="text-lg font-bold text-yellow-500">{formatCurrency(item.price)}</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Quantity Controls */}
        <div className="flex items-center border rounded-lg text-black">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="p-2 hover:bg-gray-100 transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          
          <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
            {item.quantity}
          </span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Remove item"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="text-right">
        <p className="font-semibold text-gray-900">
          {formatCurrency(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
};