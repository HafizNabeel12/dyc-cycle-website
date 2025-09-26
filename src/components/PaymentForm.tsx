// app/checkout/PaymentForm.tsx
'use client';

import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useCart } from "@/components/CartContext";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { items, clearCart } = useCart();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!stripe || !elements) {
      setErrorMsg("Stripe not loaded");
      return;
    }

    // Build payload: only send id+quantity to server
    const payload = {
      cartItems: items.map(i => ({ id: i.id, quantity: i.quantity })),
      customerEmail: "", // optionally pass user email
    };

    setLoading(true);

    // 1) Ask server to create PaymentIntent
    const createRes = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const createData = await createRes.json();

    if (!createRes.ok) {
      setErrorMsg(createData.error || "Failed to create payment intent");
      setLoading(false);
      return;
    }

    const clientSecret = createData.clientSecret;

    // 2) Confirm card payment using CardElement
    const card = elements.getElement(CardElement);
    if (!card) {
      setErrorMsg("Card element not found");
      setLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          // add name/email if you collect them
          name: "Customer Name",
        },
      },
    });

    if (error) {
      setErrorMsg(error.message || "Payment failed");
      setLoading(false);
      return;
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      // 3) Optional: notify server to save order
      await fetch("/api/process-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentIntentId: paymentIntent.id }),
      });

      // 4) Clear cart on client
      clearCart();

      setSuccess(true);
      setLoading(false);
    } else {
      setErrorMsg("Payment did not succeed");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div>
        <h3 className="text-green-600 font-bold">Payment successful 🎉</h3>
        <p>Thank you — your order is confirmed.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Card details</label>
        <div className="border rounded p-3">
          <CardElement options={{ hidePostalCode: true }} />
        </div>
      </div>

      {errorMsg && <div className="text-red-600">{errorMsg}</div>}

      <button
        type="submit"
        disabled={!stripe || loading || items.length === 0}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Processing…" : `Pay (${(items.reduce((s, i) => s + i.price * i.quantity, 0)).toFixed(2)} USD)`}
      </button>
    </form>
  );
}
