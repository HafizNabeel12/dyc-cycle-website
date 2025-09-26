import { Suspense } from 'react';
import CheckoutClient from './CheckoutClient';

export default function CheckoutPage() {
  console.log('CheckoutPage component rendering');
  
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Always visible header for debugging */}
        <div className="bg-white p-4 rounded mb-4 border">
          <h1 className="text-xl font-bold">Checkout Page Loaded</h1>
          <p className="text-sm text-gray-600">
            If you can see this, the page is working. Time: {new Date().toLocaleTimeString()}
          </p>
        </div>

        <Suspense fallback={
          <div className="bg-white p-8 rounded border text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4">Loading checkout...</p>
          </div>
        }>
          <CheckoutClient />
        </Suspense>
      </div>
    </div>
  );
}