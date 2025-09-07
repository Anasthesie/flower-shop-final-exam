import { Link } from "react-router";
import Button from "./button";
export default function Guide() {
  return (
    <div className="container mx-auto px-6 py-20 text-green">
      <h1 className="text-4xl font-bold mb-10 text-green">Flower Pot Guide</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🪴 When to Change Pots</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Most indoor plants need repotting every 12–18 months. Signs it's time
          include roots growing out the bottom, slow growth, or soil drying too
          quickly. Spring is the best season to repot.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          📏 Choosing the Right Size
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Pick a pot that’s 2–4 cm larger in diameter than your current one.
          Oversized pots can hold too much water and lead to root rot, while
          small ones can restrict growth.
          <Link
            to="/products"
            className="text-green underline hover:text-green-dark"
          >
            See our products →
          </Link>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🌿 Pot Materials</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>
            <strong>Terracotta:</strong> Breathable, classic, great for cacti
            and succulents.
          </li>
          <li>
            <strong>Ceramic:</strong> Stylish and sturdy, often glazed.
          </li>
          <li>
            <strong>Plastic:</strong> Lightweight and affordable.
          </li>
          <li>
            <strong>Concrete:</strong> Modern, heavy, good for larger plants.
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">💡 Pro Tips</h2>
        <p className="text-lg text-gray-700">
          Mix pot sizes and colors for an organic look. Use stands or shelves to
          create height variation. Place pots where they match your plant’s
          light needs — near windows, on balconies, or shaded corners.
        </p>
      </section>

      <div className="mt-16">
        <Link to="/products">
          <Button
            text={"Browse Flower Pots"}
            className="bg-green text-white px-6 py-3 rounded hover:-translate-y-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
