# Stripe Setup Instructions

## To fix the checkout error, you need to configure Stripe:

### 1. Get Stripe API Keys
1. Go to https://dashboard.stripe.com/register (create account if needed)
2. Navigate to Developers > API keys
3. Copy your **Publishable key** (starts with `pk_test_`)
4. Copy your **Secret key** (starts with `sk_test_`)

### 2. Update Environment Variables
Open the `.env.local` file and replace the placeholder values:

```
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
```

### 3. Restart Development Server
After updating the environment variables:
```bash
npm run dev
```

### 4. Test Checkout
- Add items to cart
- Click checkout
- Should now work without the "Neither apiKey nor config.authenticator provided" error

## Test Card Numbers (for testing)
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- Use any future date for expiry and any 3-digit CVC

## Note
- Use test keys (pk_test_ and sk_test_) for development
- Switch to live keys (pk_live_ and sk_live_) for production