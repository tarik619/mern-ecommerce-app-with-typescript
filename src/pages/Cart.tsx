import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

const cartItems = [
  {
    productId: "sdadsasd",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Ezvxd+uiL._AC_UF894,1000_QL80_.jpg",
    name: "macbook",
    price: 4000,
    quantity: 1,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.1);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

export default function Cart() {
  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No items in cart</h1>
        )}
      </main>
      <aside>
        <p>SubTotal: $ {subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>tax: ${tax}</p>
        <p>
          Discount: <em> - ${discount}</em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="Enter coupon code"
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ${discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid coupon code <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to={"/shipping"}>CheckOut</Link>}
      </aside>
    </div>
  );
}
