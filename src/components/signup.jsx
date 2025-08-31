import Button from "./button";
import Input from "./input";

export default function SignUp() {
  return (
    <div className="pt-24">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-4xl text-green mb-6">SignUp</h2>
        <form>
          <div className="mb-4">
            <Input type="text" name="Email" label={"Email"} />
          </div>
          <div className="mb-6">
            <Input type="password" name="password" label={"Password"} />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              name="Confirm Password"
              label={"Confirm Password"}
            />
          </div>
          <Button
            text={"Sign Up"}
            className="w-full bg-green text-white hover:bg-green/80 mb-4"
          />
        </form>
      </div>
    </div>
  );
}
