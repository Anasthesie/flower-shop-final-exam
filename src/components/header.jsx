import { Link } from "react-router";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center  px-6 py-4  bg-green text-white">
      <nav>
        <ul className="flex  gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/guide">Guide</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-8">
        <Link to="/log-in">Log in</Link>
        <Link to="/sign-up">Sign up</Link>
        <Link
          to="/profile"
          className="text-white text-2xl hover:text-warmwhite transition"
        >
          <FaUserCircle />
        </Link>
        <Link
          to="/cart"
          className="text-white text-2xl hover:text-warmwhite transition"
        >
          <FaShoppingCart />
        </Link>
      </div>
    </header>
  );
}
