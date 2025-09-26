import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Payment intent API received:', body);
    
    const { items = [] } = body;

    // Calculate order amount based on items
    const calculateOrderAmount = (items: any[]) => {
      console.log('Calculating amount for items:', items);
      
      // If no items or empty array, use default amount
      if (!items || items.length === 0) {
        console.log('No items provided, using default amount');
        return 335697; // Default amount in cents (PKR 3356.97)
      }

      // Example product prices (in cents for PKR)
      const prices: { [key: string]: number } = {
        'pure-glow-cream': 335697, // 3356.97 PKR in cents
        'default': 335697,
      };

      const total = items.reduce((sum, item) => {
        // Use provided price if available, otherwise lookup by ID
        const price = item.price ? Math.round(item.price * 100) : (prices[item.id] || prices['default']);
        const quantity = item.quantity || 1;
        console.log(`Item: ${item.id}, Price: ${price}, Quantity: ${quantity}`);
        return sum + (price * quantity);
      }, 0);

      console.log('Calculated total amount:', total);
      return total;
    };

    const amount = calculateOrderAmount(items);

    if (amount <= 0) {
      throw new Error('Invalid amount calculated');
    }

    console.log('Creating Stripe payment intent with amount:', amount);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'pkr', // Pakistani Rupee
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        order_id: `order_${Date.now()}`,
        items: JSON.stringify(items),
      },
    });

    console.log('Payment intent created successfully:', paymentIntent.id);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: amount,
    });

  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Payment Intent API is working',
    timestamp: new Date().toISOString()
  });
}