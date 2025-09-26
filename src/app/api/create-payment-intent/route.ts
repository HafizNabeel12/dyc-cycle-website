// app/api/create-payment-intent/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProductById } from "@/lib/productData"; // your server-side product list

export async function POST(req: Request) {
  try {
    const { cartItems, customerEmail, shipping } = await req.json();
    // cartItems: [{ id, quantity }] -- only id + quantity from client

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    // Server-side calculate amount (in cents)
    let amount = 0;
    const line_items: any[] = [];

    for (const ci of cartItems) {
      const product = getProductById(ci.id);
      if (!product) {
        return NextResponse.json({ error: `Product ${ci.id} not found` }, { status: 400 });
      }
      const qty = Number(ci.quantity) || 1;
      const unitAmount = Math.round(product.price * 100); // price in dollars -> cents
      amount += unitAmount * qty;

      line_items.push({
        name: product.name,
        unit_amount: unitAmount,
        quantity: qty,
      });
    }

    // optional: add shipping cost or tax calculation here
    // e.g., amount += shippingCostInCents;

    // Create PaymentIntent
    const pi = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true }, // simplifies method handling
      receipt_email: customerEmail || undefined,
      metadata: {
        // optionally include order metadata (e.g., product ids)
        items: JSON.stringify(cartItems),
      },
    });

    return NextResponse.json({ clientSecret: pi.client_secret, paymentIntentId: pi.id });
  } catch (err: any) {
    console.error("create-payment-intent error:", err);
    return NextResponse.json({ error: err.message || "Internal error" }, { status: 500 });
  }
}
