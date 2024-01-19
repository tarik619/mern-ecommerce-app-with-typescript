import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type CartItemProps = {
  cartItem: CartItem;
  incrementHandler: (cartItem: CartItem) => void;
  decrementHandler: (cartItem: CartItem) => void;
  removetHandler: (id: string) => void;
};

export default function CartItem({
  cartItem,
  incrementHandler,
  decrementHandler,
  removetHandler,
}: CartItemProps) {
  return (
    <div className="cart-item">
      <img src={`${server}/${cartItem.photo}`} alt="name" />
      <article>
        <Link to={`/product/${cartItem.productId}`}>{cartItem.name}</Link>
        <span>${cartItem.price}</span>
      </article>
      <div className="">
        <button onClick={() => decrementHandler(cartItem)}>-</button>
        <p>{cartItem.quantity}</p>
        <button onClick={() => incrementHandler(cartItem)}>+</button>
      </div>
      <button onClick={() => removetHandler(cartItem.productId)}>
        <FaTrash />
      </button>
    </div>
  );
}
