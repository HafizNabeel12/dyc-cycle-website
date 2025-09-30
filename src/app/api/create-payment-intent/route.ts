import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY is not configured in environment variables');
}

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-08-27.basil',
    })
  : null;

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        {
          error: 'Payment system not configured. Please contact support.',
          code: 'STRIPE_NOT_CONFIGURED',
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('📩 Payment intent API received:', body);

    const { items = [] } = body;

    // ✅ Calculate amount from cart items (real-time data)
    const calculateOrderAmount = (items: any[]) => {
      if (!items || items.length === 0) {
        throw new Error('No items in cart');
      }

      const total = items.reduce((sum, item) => {
        const price = item.price ? Math.round(item.price * 100) : 0; // Stripe needs amount in cents
        const quantity = item.quantity || 1;
        return sum + price * quantity;
      }, 0);

      console.log('✅ Calculated total amount:', total);
      return total;
    };

    const amount = calculateOrderAmount(items);

    if (amount <= 0) {
      throw new Error('Invalid amount calculated');
    }

    console.log('💳 Creating Stripe payment intent with amount:', amount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'nok',
      automatic_payment_methods: { enabled: true },
      metadata: {
        order_id: `order_${Date.now()}`,
        items: JSON.stringify(items),
      },
    });

    console.log('✅ Payment intent created:', paymentIntent.id);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: amount,
    });
  } catch (error: any) {
    console.error('❌ Error creating payment intent:', error);
    return NextResponse.json(
      {
        error: error.message || 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Payment Intent API is working',
    timestamp: new Date().toISOString(),
  });
}
