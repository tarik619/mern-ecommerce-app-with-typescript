import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51KxlrkKewyYOe5zZcKpOmfE05cfzc5KWHHo9mP2bzJ16sc0bqCaOC2UbFJUfm5KzwUq2zYXSueKMatddKijeHlfG00u7A2Aepy"
);

const CheckOutForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const submitHandler = () => {};
  return (
    <div className="checkout-container">
      <form onSubmit={submitHandler}>
        <PaymentElement />
        <button>{isProcessing ? "Processing..." : "Pay"}</button>
      </form>
    </div>
  );
};
export default function CheckOut() {
  return (
    <Elements
      options={{
        clientSecret:
          "pi_3Ob2UQKewyYOe5zZ008tD45Z_secret_SdBzb3992sWqrDxWMsXIsOJOy",
      }}
      stripe={stripePromise}
    >
      <CheckOutForm />
    </Elements>
  );
}
