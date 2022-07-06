import { ConfigurationServicePlaceholders } from "aws-sdk/lib/config_service_placeholders";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  console.log(req.headers)
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1LIBxYB4sCNLfk56XDFhlrSX',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.referer}`,
        cancel_url: `${req.headers.referer}`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}