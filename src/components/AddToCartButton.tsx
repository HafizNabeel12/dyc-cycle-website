'use client';

import React, { useState } from 'react';
import { useCart, CartItem } from '@/components/CartContext'; // Adjust path as needed
import { ShoppingCart, Check } from 'lucide-react';

interface AddToCartButtonProps {
  product: Omit< CartItem, 'quantity'>;
  className?: string;
  children?: React.ReactNode;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className = '',
  children,
}) => {
  const { addToCart, } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdding) return;

    setIsAdding(true);
    addToCart(product);
    
    // Show success state
    setJustAdded(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(false);
    }, 2000);
  };

  const defaultClasses = 'bg-black text-black px-6 py-2 transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={` ${defaultClasses} ${className}`}
    >
      {justAdded ? (
        <>
          <Check className="h-4 w-4" />
          Added to Cart!
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" />
          {children || 'Add to Cart'}
        </>
      )}
    </button>
  );
};