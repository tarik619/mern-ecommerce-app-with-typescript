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
          photo="https://img.freepik.com/free-psd/digital-device-mockup_53876-91374.jpg?w=996&t=st=1705252431~exp=1705253031~hmac=7e961433d73e42ee1d971394bb304ee0d6374fc9bb615e80593f9e520b1fb6b0"
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
}
