import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { casePayment, storePaymentToServer } from "../../../services/cases";
import { Currency } from "lucide-react";
import { useSelector } from "react-redux";
// import caseV2 from '@/service/caseV2';

const StripeModal = ({ setshowStripeModal, onSuccess, userId }) => {
  const user = useSelector((state) => state.auth.user);
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState(user?.email || "");
  const [amount, setAmount] = useState(5000); // $50 in cents (Stripe expects cents)
  const [currency] = useState("USD");
  const [message, setMessage] = useState("");
  const [paymentIntentSecret, setPaymentIntentSecret] = useState(null);
  // Fetch PaymentIntent secret when modal opens or amount/currency changes
  useEffect(() => {
    const getPaymentIntent = async () => {
      try {
        const response = await casePayment({
          amount, // in cents
          currency, // use lowercase for consistency
        });
        if (response?.clientSecret) {
          setPaymentIntentSecret(response.clientSecret);
        } else {
          throw new Error("Failed to fetch PaymentIntent");
        }
      } catch (err) {
        setMessage(`Error: ${err.message}`);
      }
    };
    getPaymentIntent();
  }, [amount, currency]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      alert("Stripe.js has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      alert("Card element not found.");
      return;
    }

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        paymentIntentSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: { email },
          },
        }
      );
      console.log("asdfasdfsd ", paymentIntent);
      if (error) {
        console.error("Payment error:", error);
        setMessage(`Payment failed: ${error.message}`);
      } else if (paymentIntent?.status === "succeeded") {
        const model = {
          paymentIntentId: paymentIntent.id,
          userId: userId, 
        };
    
        storePaymentToServer(model)
          .then((response) => {
            console.log("payment save successfully:", response);
            onSuccess();
          })
          .catch((err) => {
            console.error("Error payment saving to server:", err);
          });

      }
    } catch (err) {
      setMessage(`Error processing payment: ${err.message}`);
    }
  };
  console.log("erro msg : ", message);
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        borderRadius: "8px",
        border: "1px solid lightgray",
        padding: "10px",
        margin: "20px 0",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <div>
      <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-[469px] p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Pay Now</h2>
            <button
              onClick={() => setshowStripeModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                    fill="#637381"
                  />
                  <path
                    d="M12.875 7.09375C12.5938 6.8125 12.1563 6.8125 11.875 7.09375L10 9L8.09375 7.09375C7.8125 6.8125 7.375 6.8125 7.09375 7.09375C6.8125 7.375 6.8125 7.8125 7.09375 8.09375L9 10L7.09375 11.9062C6.8125 12.1875 6.8125 12.625 7.09375 12.9062C7.21875 13.0312 7.40625 13.125 7.59375 13.125C7.78125 13.125 7.96875 13.0625 8.09375 12.9062L10 11L11.9062 12.9062C12.0312 13.0312 12.2188 13.125 12.4063 13.125C12.5938 13.125 12.7812 13.0625 12.9062 12.9062C13.1875 12.625 13.1875 12.1875 12.9062 11.9062L11 10L12.9062 8.09375C13.1562 7.8125 13.1563 7.375 12.875 7.09375Z"
                    fill="#637381"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <button
              type="submit"
              //   disabled={!stripe || !paymentIntentSecret}
              className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            >
              Pay now
            </button>
            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StripeModal;
