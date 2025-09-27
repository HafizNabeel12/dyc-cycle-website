import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const payment_intent = searchParams.get('payment_intent');

  if (!payment_intent) {
    return NextResponse.json({ error: 'Missing payment_intent param' }, { status: 400 });
  }

  try {
    const intent = await stripe.paymentIntents.retrieve(payment_intent, {
      expand: ['latest_charge'],
    });

    return NextResponse.json(intent);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
