import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItem: any;
};

export default function CartItem({ cartItem }: CartItemProps) {
  return (
    <div className="cart-item">
      <img src={cartItem.photo} alt="name" />
      <article>
        <Link to={`/product/${cartItem.productId}`}>{cartItem.name}</Link>
        <span>${cartItem.price}</span>
      </article>
      <div className="">
        <button>-</button>
        <p>{cartItem.quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
}
