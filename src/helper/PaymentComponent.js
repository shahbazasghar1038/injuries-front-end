import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

// Load Stripe public key
const stripePromise = loadStripe("your-publishable-key");

const PaymentComponent = ({ selectedContact, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      setIsProcessing(true);
      setError(null);

      try {
        // Create payment intent on the backend
        const { data } = await axios.post(
          "/api/payment/create-payment-intent",
          {
            amount: 1099, // Amount in cents (for $10.99)
            currency: "usd",
          }
        );

        // Confirm the payment using the client secret
        const { error, paymentIntent } = await stripe.confirmCardPayment(
          data.clientSecret,
          {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: selectedContact.fullName,
              },
            },
          }
        );

        if (error) {
          setError(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
          // Payment was successful, update the user's case count
          await axios.post("/api/payment/payment-success", {
            paymentIntentId: paymentIntent.id,
            userId: selectedContact.userId,
          });
          alert("Payment successful!");
          onClose(); // Close the payment modal
        }
      } catch (err) {
        setError("Payment failed. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="payment-modal">
      <h2>Complete Payment for {selectedContact.fullName}</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

const StripePayment = ({ selectedContact }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentComponent
        selectedContact={selectedContact}
        onClose={() => console.log("Modal Closed")}
      />
    </Elements>
  );
};

export default StripePayment;
