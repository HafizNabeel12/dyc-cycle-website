// app/api/checkout-session/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const session_id = url.searchParams.get('session_id');

    if (!session_id) {
      return NextResponse.json({ error: 'Missing session_id query param' }, { status: 400 });
    }

    // Expand common objects so client can display useful info
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items', 'payment_intent', 'customer_details'],
    });

    return NextResponse.json(session);
  } catch (err: any) {
    console.error('checkout-session error:', err);
    return NextResponse.json({ error: err?.message || 'Failed to retrieve session' }, { status: 500 });
  }
}
