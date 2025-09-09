import { useState } from "react";
import Input from "./input";
import Button from "./button";
import Payment from "./payment";
export default function CheckOut() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPhoneValid = /^\d{9,15}$/.test(phone);
  const isZipValid = /^\d{4,10}$/.test(zip);
  const isFullNameValid = fullName.trim().length > 2;
  const isAddressValid = address.trim().length > 5;
  const isCityValid = city.trim().length > 1;

  const isFormValid =
    isFullNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isAddressValid &&
    isCityValid &&
    isZipValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMessage("Order submitted successfully!");
    }, 1000);
  };
  if (message) {
    return (
      <p className="text-center text-green font-bold pt-12 text-3xl">
        {message}
      </p>
    );
  }

  return (
    <div className="pt-24">
      <form
        className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-4xl text-green mb-6">
          Shipping Information
        </h2>

        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1 text-green">
            Full Name
          </label>
          <Input
            type="text"
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-green">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && email !== "" && (
            <p className="text-red-500 text-sm mb-2">Invalid email format</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 text-green">
            Phone Number
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          {!isPhoneValid && phone !== "" && (
            <p className="text-red-500 text-sm mb-2">Invalid phone number</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-1 text-green">
            Address
          </label>
          <Input
            type="text"
            id="address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          {!isAddressValid && address !== "" && (
            <p className="text-red-500 text-sm mb-2">Address is too short</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block mb-1 text-green">
            City
          </label>
          <Input
            type="text"
            id="city"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
          {!isCityValid && city !== "" && (
            <p className="text-red-500 text-sm mb-2">Enter a valid city</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block mb-1 text-green">
            ZIP Code
          </label>
          <Input
            type="text"
            id="zip"
            name="zip"
            onChange={(e) => setZip(e.target.value)}
          />
          {!isZipValid && zip !== "" && (
            <p className="text-red-500 text-sm mb-2">Invalid ZIP code</p>
          )}
        </div>

        <Button
          text={"Submit"}
          type="submit"
          disabled={!isFormValid}
          className="w-full bg-green text-white hover:bg-green/80 mb-4 "
        />
      </form>
      <Payment />
    </div>
  );
}
