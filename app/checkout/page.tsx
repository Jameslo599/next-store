'use client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import LoadingContainer from '@/components/global/LoadingContainer';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function SearchParamsComponent({
  onParamsLoaded,
}: {
  onParamsLoaded: (params: {
    orderId: string | null;
    cartId: string | null;
  }) => void;
}) {
  const searchParams = useSearchParams();

  const orderId = searchParams.get('orderId');
  const cartId = searchParams.get('cartId');

  onParamsLoaded({ orderId, cartId });
  return null;
}

export default function CheckoutPage() {
  const [params, setParams] = React.useState<{
    orderId: string | null;
    cartId: string | null;
  } | null>(null);

  const fetchClientSecret = useCallback(async () => {
    if (!params) return null; //Wait until params are loaded
    const { orderId, cartId } = params;

    // Create a Checkout Session
    const response = await axios.post('/api/payment', {
      orderId: orderId,
      cartId: cartId,
    });
    return response.data.clientSecret;
  }, [params]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <Suspense fallback={<LoadingContainer />}>
        <SearchParamsComponent onParamsLoaded={setParams} />
      </Suspense>

      {params && (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}
