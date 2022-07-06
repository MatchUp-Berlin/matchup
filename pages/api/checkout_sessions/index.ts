// @ts-nocheck
import { getStripe } from '../../../utils/get-stripe'

const Stripe = getStripe();

// Partial of ./pages/api/checkout_sessions/index.ts
// ...
// Create Checkout Sessions from body params.
const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: 'book',
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Custom amount donation',
        amount: formatAmountForStripe(5, EUR),
        currency: EUR,
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  };
  const checkoutSession: Stripe.Checkout.Session = async () =>
    await stripe.checkout.sessions.create(params);
  // ...
