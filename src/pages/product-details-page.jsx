import { useParams } from "react-router";
import products from "../data/products";
import ProductDetails from "../components/product-details";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-red-500 text-center mt-10">Product not found</p>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
