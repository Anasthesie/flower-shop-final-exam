import { Link } from "react-router";

export default function ProducItem({ src, price, title, id }) {
  return (
    <Link to={`/product-details/${id}`}>
      <div className="pt-20">
        <img src={src} className="rounded-sm cursor-pointer w-80 h-90"></img>
        <p className="text-green">{title}</p>
        <p className="text-green"> {price}</p>
      </div>
    </Link>
  );
}
