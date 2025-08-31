import { useState } from "react";
import Button from "./button";
import Input from "./input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.length >= 6;
  const isButtonDisabled = !isEmailValid || !isPasswordValid;

  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleGoogleLogin = (e) => {
    setTimeout(() => {
      setWelcomeMessage("Logged In Via Google!");
    }, 1000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setWelcomeMessage("You Logged In!");
    }, 1000);
    button.disabled = true;
  };

  if (welcomeMessage) {
    return (
      <p className="text-center  text-green  font-bold pt-12  text-3xl  ">
        {welcomeMessage}
      </p>
    );
  }

  return (
    <div className="pt-24">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-4xl text-green mb-6">LogIn</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              type="text"
              name="email"
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
          <Button
            text={"Log In"}
            className="w-full bg-green text-white hover:bg-green/80 mb-4  disabled:cursor-not-allowed"
            type="submit"
            disabled={isButtonDisabled}
          />
        </form>
        <Button
          text={"Continue With Google"}
          className="w-full bg-gray-500 text-white hover:bg-gray-500/80"
          onClick={handleGoogleLogin}
        />
      </div>
    </div>
  );
}
