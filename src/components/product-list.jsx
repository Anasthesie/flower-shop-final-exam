import ProducItem from "./product-item";

const products = [
  { src: "/public/stand1.png", price: "20.99€", title: "The Classic Pedestal" },
  { src: "/public/stand2.png", price: "28.99€", title: "The Boho Macramé" },
  { src: "/public/stand3.png", price: "30.99€", title: "The Geometric" },
  { src: "/public/stand4.png", price: "50.99€", title: "The Elevated Trio" },
  { src: "/public/stand5.png", price: "75.99€", title: "The Rustic Charm" },
  { src: "/public/stand6.png", price: "45.99€", title: "The Minimalist" },
];

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
            />
          </div>
        ))}
      </div>
    </div>
  );
}
