import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

// const server = "dsadsdsd";

export default function ProductCard({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductProps) {
  return (
    <div key={productId} className="productcard">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <p>{stock}</p>
      <span>${price}</span>
      <div className="">
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
