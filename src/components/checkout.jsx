import Input from "./input";
import Button from "./button";
export default function CheckOut() {
  return (
    <div className="pt-24">
      <form className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-4xl text-green mb-6">
          Shipping Information
        </h2>

        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1 text-green">
            Full Name
          </label>
          <Input type="text" name="fullName" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-green">
            Email
          </label>
          <Input type="email" id="email" name="email" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 text-green">
            Phone Number
          </label>
          <Input type="tel" id="phone" name="phone" />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-1 text-green">
            Address
          </label>
          <Input type="text" id="address" name="address" />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block mb-1 text-green">
            City
          </label>
          <Input type="text" id="city" name="city" />
        </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block mb-1 text-green">
            ZIP Code
          </label>
          <Input type="text" id="zip" name="zip" />
        </div>

        <Button
          text={"Submit"}
          type="submit"
          className="w-full bg-green text-white hover:bg-green/80 mb-4 "
        />
      </form>
    </div>
  );
}
