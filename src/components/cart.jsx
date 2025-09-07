import { useCart } from "../providers/cart-provider";
import Button from "./button";
export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-6 py-20 ">
      <h1 className="text-3xl font-bold mb-8 text-green">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-red text-center">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-4 p-4 rounded shadow-md bg-white"
            >
              <div>
                <img
                  src={item.src}
                  className="w-20 h-20 object-cover rounded"
                />
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p>{item.price}</p>
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => removeFromCart(item.id)}
                  text={"Delete"}
                  className="bg-green hover:bg-green-800 text-white px-4 py-2 rounded text-sm"
                />

                <Button
                  text={"Buy Now"}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
