import { useState } from "react";
import Button from "./button";
import Input from "./input";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password, confirmPassword });
  };
  if (isEmailValid) {
    console.log("Form submitted with:", email);
  }

  return (
    <div className="pt-24">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-4xl text-green mb-6">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              name="Email"
              label={"Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmailValid && email && (
              <p style={{ color: "red" }}>Invalid email format</p>
            )}
          </div>
          <div className="mb-6">
            <Input
              type="password"
              name="password"
              label={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              name="Confirm Password"
              label={"Confirm Password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            disabled={!isEmailValid && email !== ""}
            text={"Sign Up"}
            className="w-full bg-green text-white hover:bg-green/80 mb-4 disabled:bg-green/80 disabled:cursor-not-allowed"
          />
        </form>
      </div>
    </div>
  );
}
