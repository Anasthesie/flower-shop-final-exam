import ProducItem from "./product-item";

const products = [
  {
    id: 1,
    src: "/public/stand1.png",
    price: "20.99€",
    title: "The Classic Pedestal",
  },
  {
    id: 2,
    src: "/public/stand2.png",
    price: "28.99€",
    title: "The Boho Macramé",
  },
  { id: 3, src: "/public/stand3.png", price: "30.99€", title: "The Geometric" },
  {
    id: 4,
    src: "/public/stand4.png",
    price: "50.99€",
    title: "The Elevated Trio",
  },
  {
    id: 5,
    src: "/public/stand5.png",
    price: "75.99€",
    title: "The Rustic Charm",
  },
  {
    id: 6,
    src: "/public/stand6.png",
    price: "45.99€",
    title: "The Minimalist",
  },
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
              id={product.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
