'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Check } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string[];
  description?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isInCart = items.some(item => item.id === product.id);
  const cartQuantity = items.find(item => item.id === product.id)?.quantity || 0;

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        
    });

    // Show success state
    setJustAdded(true);
    
    // Reset states after animation
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(false);
    }, 2000);
  };

  return (
    <Card className={`group hover:shadow-lg transition-shadow duration-300 border border-gray-200 ${className}`}>
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-white rounded-t-lg">
          <div className="aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/api/placeholder/400/400';
              }}
            />
          </div>
          
          {/* Quick Add Button Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="bg-white text-black hover:bg-yellow-400 hover:text-black font-semibold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              {isAdding ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2" />
                  Adding...
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Quick Add
                </>
              )}
            </Button>
          </div>

          {/* In Cart Badge */}
          {isInCart && (
            <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
              {cartQuantity} in cart
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4">
          {product.category && (
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.category}
            </p>
          )}
          
          <h3 className="font-semibold text-lg text-black mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-black">
              ${product.price.toFixed(2)}
            </div>
            
            <Button
              onClick={handleAddToCart}
              disabled={isAdding}
              size="sm"
              className={`
                transition-all duration-300 font-semibold
                ${justAdded 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                }
              `}
            >
              {isAdding ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2" />
                  Adding...
                </>
              ) : justAdded ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Added!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;