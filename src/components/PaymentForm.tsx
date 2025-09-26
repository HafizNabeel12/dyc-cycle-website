'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { useCart } from '@/components/CartContext';

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState('PKR');
  const { items: cartItems, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: 'United States'
  });
  const [saveInfo, setSaveInfo] = useState(false);

  // 🧮 Calculate totals from cart
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const saved = 0;
  const taxId = 0;
  const total = subtotal - saved + taxId;

  // 💱 Currency options
  const currencies = [
    { code: 'PKR', rate: 280, symbol: '₨' },
    { code: 'USD', rate: 1, symbol: '$' }
  ];

  const currentCurrency = currencies.find(c => c.code === selectedCurrency) || currencies[0];
  const convertPrice = (price: number) => price * currentCurrency.rate;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?payment_intent={payment_intent}`,
        receipt_email: email,
        shipping: {
          name: shippingInfo.fullName,
          address: {
            line1: shippingInfo.addressLine1,
            line2: shippingInfo.addressLine2,
            city: shippingInfo.city,
            state: shippingInfo.state,
            country:
              shippingInfo.country === "United States"
                ? "US"
                : shippingInfo.country,
          },
        },
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message || "An error occurred");
      } else {
        setMessage("An unexpected error occurred.");
      }
    } else {
      // ✅ Clear the cart after successful payment
      clearCart();
    }

    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Order Summary */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium mb-6 text-black">Choose a currency:</h2>
        
        {/* Currency Selection */}
        <div className="flex gap-3 mb-6 text-black">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelectedCurrency(currency.code)}
              className={`px-4 py-2 rounded border ${
                selectedCurrency === currency.code
                  ? 'border-black bg-white'
                  : 'border-gray-300 bg-gray-50'
              }`}
            >
              {currency.symbol} {currency.code}
            </button>
          ))}
        </div>

        {/* 🛒 Dynamic Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded" />
                ) : (
                  <span className="text-blue-600 text-sm">📦</span>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm text-black">{item.name}</p>
                <p className="text-sm font-medium text-black">
                  {currentCurrency.symbol} {convertPrice(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <p className="text-sm text-black">x{item.quantity}</p>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-3 border-t pt-4">
          <div className="flex justify-between text-sm text-black">
            <span>Subtotal</span>
            <span>{currentCurrency.symbol} {convertPrice(subtotal).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-green-600">
            <span> SAVED</span>
            <span>{currentCurrency.symbol} {convertPrice(saved).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-black">
            <span>Tax ID</span>
            <span className="text-black">Does not show for calculation</span>
          </div>
          <div className="flex justify-between font-medium text-lg border-t pt-3 text-black">
            <span>Total due</span>
            <span>{currentCurrency.symbol} {convertPrice(total).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Right Column - Payment Form */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit}>
         
          

          {/* Shipping Information */}
          <div className="mb-6">
            <h3 className="font-medium mb-4 text-black">Shipping information</h3>
            
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                placeholder="mail@example.com"
                required
              />
            </div>

          
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="font-medium mb-4 text-black">Payment method</h3>
            <p className="text-sm text-gray-600 mb-4">Card information</p>
            
            <div className="border border-gray-300 rounded p-4 mb-4">
              <PaymentElement 
                options={{
                  layout: {
                    type: 'tabs',
                    defaultCollapsed: false,
                  }
                }}
              />
            </div>
          </div>

          {message && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
              {message}
            </div>
          )}

          {/* Pay Button */}
          <button
            type="submit"
            disabled={isLoading || !stripe || !elements}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Pay'}
          </button>
        </form>
      </div>
    </div>
  );
}
