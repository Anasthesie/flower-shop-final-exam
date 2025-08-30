export default function Header() {
  return (
    <header className="flex justify-between items-center  px-6 py-4  bg-green text-white">
      <nav>
        <ul className="flex  gap-8">
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/guide">Guide</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/fertilizer">Fertilizer</a>
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
