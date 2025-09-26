// app/checkout/CheckoutClient.tsx
'use client';

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe-client";
import PaymentForm from "@/components/PaymentForm";

export default function CheckoutClient() {
  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <PaymentForm />
      </div>
    </Elements>
  );
}
