import { Link } from "react-router-dom";
import Featured from "../../components/featured";
import Button from "../../components/button";
import Social from "../../components/social";

const Login = () => {
  const inputBg =
    "w-full bg-gray-200 p-4 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary";

  return (
    <div className="h-screen flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="h-screen w-[90%] sm:w-[60%] xl:w-[30%] mt-8 md:mt-0 p-4 lg:p-12 flex flex-col text-black gap-8">
        <h3 className="text-3xl font-semibold mb-2">Log in</h3>

        <div className="flex flex-col gap-4">
          <p className="text-md">Log in with one of the following options:</p>
          <Social />
        </div>

        <form className="flex flex-col gap-6">
          <label htmlFor="email" className="text-sm">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@email.com"
              className={inputBg}
            />
          </label>

          <label htmlFor="password" className="text-sm">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Pick a strong password"
              className={inputBg}
            />
          </label>

          <Button to="/confirm-account" text="Log in" />

          <div className="text-center mt-4">
            <p className="text-black">
              Don{"'"}t have an account{" "}
              <Link className="text-primary font-bold" to="/register">
                Create account
              </Link>{" "}
              or Forgotten your password?{" "}
              <Link className="text-primary font-bold" to="/forgot-password">
                Click here
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Featured />
    </div>
  );
};

export default Login;
