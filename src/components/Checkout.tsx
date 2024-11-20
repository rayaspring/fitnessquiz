import { useState } from 'react';
import { Plan } from '../types';
import { Button } from './Button';
import { loadStripe } from '@stripe/stripe-js';

interface CheckoutProps {
  plan: Plan;
  onBack: () => void;
}

export function Checkout({ plan, onBack }: CheckoutProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    // In a real app, you would:
    // 1. Call your backend to create a Stripe session
    // 2. Redirect to Stripe checkout
    // For demo purposes, we'll just show a success message
    setTimeout(() => {
      alert('This is a demo! In a real app, you would be redirected to Stripe.');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>

      <div className="border rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="flex justify-between mb-4">
          <span>{plan.name}</span>
          <span>${plan.price}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${plan.price}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Button
          onClick={handleCheckout}
          className="w-full"
          size="lg"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </Button>
        <Button
          variant="secondary"
          onClick={onBack}
          className="w-full"
          disabled={loading}
        >
          Back to Plans
        </Button>
      </div>
    </div>
  );
}