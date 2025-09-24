      import { NextResponse } from 'next/server';
import { syncProductsWithStripe } from '@/lib/stripe-sync';

export async function POST() {
  try {
    await syncProductsWithStripe();
    return NextResponse.json({ success: true, message: 'Products synced successfully' });
  } catch (error) {
    console.error('Sync error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to sync products' },
      { status: 500 }
    );
  }
}