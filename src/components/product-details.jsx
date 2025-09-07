import { Link } from "react-router";
import { useCart } from "../providers/cart-provider";
import Button from "./button";

export default function ProductDetails({ product }) {
  const { addToCart, isInCart } = useCart();
  const alreadyAdded = isInCart(product.id);

  return (
    <div className="bg-lightgreen min-h-screen">
      <div className="max-w-lg mx-auto p-6">
        <img
          src={product.src}
          alt={product.title}
          className="w-full rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold mb-2 text-green">{product.title}</h1>
        <p className="text-green mb-2">Price: {product.price}</p>
        <p className="text-gray-700 mt-2">{product.description}</p>
        {product.inStock ? (
          <p className="text-green pt-12 font-bold">In Stock!</p>
        ) : (
          <p className="text-red-500  pt-12 font-bold">Out of Stock!</p>
        )}
        <Link to="/products">
          <Button
            text={"Back to Shop"}
            className="bg-green text-white hover:bg-green/80 mb-4 mt-7"
          />
        </Link>
        <Button
          text={alreadyAdded ? "Already Added" : "Add to cart"}
          onClick={() => {
            if (!alreadyAdded) addToCart(product);
          }}
          disabled={!product.inStock}
          className="bg-green text-white hover:bg-green/80 mb-4 "
        />
      </div>
    </div>
  );
}
