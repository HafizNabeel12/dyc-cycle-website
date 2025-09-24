import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID required' },
        { status: 400 }
      );
    }

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'customer_details'],
    });

    // Check if payment was successful
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    // Extract order information
    const orderData = {
      sessionId: session.id,
      paymentIntentId: session.payment_intent,
      customerEmail: session.customer_details?.email,
      customerName: session.customer_details?.name,
      customerPhone: session.customer_details?.phone,
      
      amount: session.amount_total,
      currency: session.currency,
      productId: session.metadata?.productId,
      productName: session.metadata?.productName,
      lineItems: session.line_items?.data,
      createdAt: new Date(session.created * 1000).toISOString(),
    };

    // Here you would typically:
    // 1. Save order to your database
    // 2. Send confirmation email
    // 3. Update inventory
    // 4. Log the order for fulfillment

    console.log('Processing order:', orderData);

    // For now, we'll just return the order data
    // In a real app, you'd save this to your database
    return NextResponse.json({ 
      success: true, 
      order: orderData,
      message: 'Order processed successfully' 
    });

  } catch (error) {
    console.error('Order processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    );
  }
}