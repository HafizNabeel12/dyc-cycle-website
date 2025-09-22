"use client";

import { getStripe } from "@/lib/stripeClient";

export default function CheckoutButton({ cartItems }: { cartItems: any[] }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });

    const { url } = await res.json();
    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId: url });
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
      Checkout
    </button>
  );
}
