import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItemCard from "../components/CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartReducerIntialState } from "../types/reducer.types";
import { CartItem } from "../types/types";
import {
  addToCart,
  calculatePrice,
  removeCartItem,
} from "../redux/reducer/cartReducer";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, subtotal, tax, total, shippingCharges, discount } =
    useSelector(
      (state: { cartReducer: CartReducerIntialState }) => state.cartReducer
    );
  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  const incrementHandler = (cartItem: CartItem) => {
    if (cartItem.quantity >= cartItem.stock) return;
    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
  };
  const decrementHandler = (cartItem: CartItem) => {
    if (cartItem.quantity <= 1) return;

    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
  };
  const removetHandler = (productId: string) => {
    dispatch(removeCartItem(productId));
  };

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

  useEffect(() => {
    dispatch(calculatePrice());
  }, [cartItems]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItemCard
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removetHandler={removetHandler}
              key={idx}
              cartItem={i}
            />
          ))
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
