import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51KxlrkKewyYOe5zZcKpOmfE05cfzc5KWHHo9mP2bzJ16sc0bqCaOC2UbFJUfm5KzwUq2zYXSueKMatddKijeHlfG00u7A2Aepy"
);

const CheckOutForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    const orderData = {};

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });

    if (error) {
      setIsProcessing(false);

      return toast.error(error.message || "something went wrong");
    }
    if (paymentIntent?.status === "succeeded") {
      toast.success("Payment Successful");
      navigate("/orders");
    }
    setIsProcessing(false);
  };
  return (
    <div className="checkout-container">
      <form onSubmit={submitHandler}>
        <PaymentElement />
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};
export default function CheckOut() {
  const location = useLocation();
  const clientSecret: string | undefined = location.state;

  if (!clientSecret) <Navigate to={"/shipping"} />;

  return (
    <Elements
      options={{
        clientSecret,
      }}
      stripe={stripePromise}
    >
      <CheckOutForm />
    </Elements>
  );
}
