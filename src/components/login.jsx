import Button from "./button";
import Input from "./input";
export default function Login() {
  return (
    <div className="pt-24">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-4xl text-green mb-6">LogIn</h2>
        <form>
          <div className="mb-4">
            <Input type="text" name="email" label={"Email"} />
          </div>
          <div className="mb-6">
            <Input type="password" name="password" label={"Password"} />
          </div>
          <Button
            text={"Log In"}
            className="w-full bg-green text-white hover:bg-green/80 mb-4"
          />
        </form>
        <Button
          text={"Continue With Google"}
          className="w-full bg-gray-500 text-white hover:bg-gray-500/80"
        />
      </div>
    </div>
  );
}
