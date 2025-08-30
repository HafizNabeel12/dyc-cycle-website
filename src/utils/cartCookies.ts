// utils/cartCookies.ts
import Cookies from 'js-cookie';
import { CartItem, CartState } from '../types/cart';

const CART_COOKIE_KEY = 'shopping_cart';
const CART_COOKIE_OPTIONS = {
  expires: 30, // 30 days
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
};

export const saveCartToCookies = (items: CartItem[]): void => {
  try {
    const cartData = JSON.stringify(items);
    Cookies.set(CART_COOKIE_KEY, cartData, CART_COOKIE_OPTIONS);
  } catch (error) {
    console.error('Failed to save cart to cookies:', error);
  }
};

export const getCartFromCookies = (): CartItem[] => {
  try {
    const cartData = Cookies.get(CART_COOKIE_KEY);
    if (!cartData) return [];
    
    const parsedData = JSON.parse(cartData);
    
    // Validate the data structure
    if (Array.isArray(parsedData)) {
      return parsedData.filter(item => 
        item && 
        typeof item.id === 'string' &&
        typeof item.name === 'string' &&
        typeof item.price === 'number' &&
        typeof item.quantity === 'number' &&
        item.quantity > 0
      );
    }
    
    return [];
  } catch (error) {
    console.error('Failed to retrieve cart from cookies:', error);
    // Clear corrupted cookie data
    clearCartCookies();
    return [];
  }
};

export const clearCartCookies = (): void => {
  try {
    Cookies.remove(CART_COOKIE_KEY);
  } catch (error) {
    console.error('Failed to clear cart cookies:', error);
  }
};

export const calculateCartTotals = (items: CartItem[]): Pick<CartState, 'totalItems' | 'totalPrice'> => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return {
    totalItems,
    totalPrice: Math.round(totalPrice * 100) / 100, // Round to 2 decimal places
  };
};