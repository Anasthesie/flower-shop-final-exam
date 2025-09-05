import ProducItem from "./product-item";
import products from "../data/products";

export default function ProductList() {
  return (
    <div className="bg-lightgreen ">
      <h2 className="text-5xl text-green pt-12 pl-12">flower pots</h2>

      <div className="flex flex-wrap gap-6  justify-center pt-12 pb-12 ">
        {products.map((product, index) => (
          <div key={index} className="w-full  md:w-1/4 flex justify-center">
            <ProducItem
              src={product.src}
              price={product.price}
              title={product.title}
              id={product.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
