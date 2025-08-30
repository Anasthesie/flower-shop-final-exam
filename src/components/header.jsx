import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex justify-between items-center  px-6 py-4  bg-green text-white">
      <nav>
        <ul className="flex  gap-8">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/guide">Guide</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/fertilizer">Fertilizer</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-8">
        <a href="/login"> Log in</a>
        <a href="/sign in">Sign in</a>
      </div>
    </header>
  );
}
