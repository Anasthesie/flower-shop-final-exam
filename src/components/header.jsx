import { Link } from "react-router";

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
          <li>
            <Link to="/fertilizer">Fertilizer</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-8">
        <Link to="/log-in">Log in</Link>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </header>
  );
}
