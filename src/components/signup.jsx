import { useState } from "react";
import Button from "./button";
import Input from "./input";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.length >= 6;
  const PasswordsMatch = password === confirmPassword;
  const isButtonDisabled = !isEmailValid || !isPasswordValid || !PasswordsMatch;

  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setWelcomeMessage("Welcome!");
    }, 1000);
  };

  if (welcomeMessage) {
    return (
      <p className="text-center  text-green  font-bold  text-3xl pt-12">
        {welcomeMessage}
      </p>
    );
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

          <div className="mb-2 text-red-500 text-sm">
            {!isEmailValid && email !== "" && <p>Invalid email format</p>}
            {!isPasswordValid && password !== "" && (
              <p>Password must be at least 6 characters</p>
            )}
            {!PasswordsMatch && confirmPassword !== "" && (
              <p>Passwords do not match</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isButtonDisabled}
            text={"Sign Up"}
            className="w-full bg-green text-white hover:bg-green/80 mb-4 disabled:bg-green/80 disabled:cursor-not-allowed"
          />
        </form>
      </div>
    </div>
  );
}
