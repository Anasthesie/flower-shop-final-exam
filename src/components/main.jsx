import { Link } from "react-router";
import Button from "./button";

export default function Main() {
  return (
    <div className="container mx-auto">
      <main className="flex flex-col md:flex-row  justify-between px-6 py-10  items-center md:items-start pt-28 pb-52">
        <div className=" flex-[0_0_40%] max-w-sm  space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-warmwhite">
            Happiness blooms from within
          </h1>
          <p className="text-base md:text-lg text-warmwhite max-w-md">
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>

          <Link to="/products">
            <Button
              text={"Shop now"}
              className="bg-warmwhite text-green  hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="flex flex-row gap-6">
          <div className="relative w-64 h-48">
            <img
              src="/public/stand1.png"
              alt="New Item"
              className="w-full h-auto rounded"
            />

            <Link to="/product-details/1">
              <span className="absolute top-4 left-4 bg-green text-warmwhite text-sm font-semibold px-3 py-1 rounded shadow cursor-pointer">
                New
              </span>
            </Link>
          </div>

          <div className="relative w-64 h-48 ">
            <img
              src="/public/stand3.png"
              alt="Popular Item"
              className="w-full h-auto rounded"
            />
            <Link to="/product-details/3">
              <span className="absolute top-4 left-4  bg-green text-warmwhite text-sm font-semibold px-3 py-1 rounded shadow">
                Popular
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
