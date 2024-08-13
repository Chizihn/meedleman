import { Link } from "react-router-dom";
import Featured from "../../components/featured";
import Button from "../../components/button";
import Social from "../../components/social";

const Register = () => {
  const inputBg =
    "w-full bg-gray-200 p-4 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary";

  return (
    <div className="h-screen flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="h-screen w-[90%] sm:w-[50%] xl:w-[30%] mt-8 md:mt-0 p-4 lg:p-12 flex flex-col text-black gap-6">
        <h3 className="text-3xl font-semibold mb-2">Create Account</h3>
        <div className="flex flex-col gap-4">
          <p className="text-md">Sign up with one of the following options:</p>
          <Social />
        </div>

        <form className="flex flex-col gap-6">
          <label htmlFor="name" className="text-sm">
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className={inputBg}
            />
          </label>

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

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
            />
            <p className="text-sm">
              I agree to the{" "}
              <Link to="/" className="font-bold">
                terms and use
              </Link>{" "}
              of Meddleman
            </p>
          </div>

          <Button to="/confirm-account" text="Create account" />

          <div className="text-center mt-4">
            <p className="text-black">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Featured />
    </div>
  );
};

export default Register;
