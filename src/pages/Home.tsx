import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
export default function Home() {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="1"
          name="Product 1"
          price={100}
          stock={10}
          photo="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Ezvxd+uiL._AC_UF894,1000_QL80_.jpg"
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
}
