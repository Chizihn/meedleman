import { Link } from "react-router-dom";
import Navigator from "../../components/navigator";
import Featured from "../../components/featured";

const ForgotPassword = () => {
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="h-screen w-[90%] sm:w-[50%] xl:w-[30%] mt-8 md:mt-0 p-4 lg:p-12 flex flex-col text-black gap-8">
        <div className="flex items-center">
          <Navigator />
          <h3 className="text-3xl font-semibold ml-2">Forgot Password</h3>
        </div>

        <p className="text-md">
          Enter your email and we will send you an OTP code to reset your
          password.
        </p>

        <form className="flex flex-col gap-6">
          <label htmlFor="email" className="text-sm">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@email.com"
              className="w-full bg-gray-200 p-4 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
            />
          </label>

          <Link
            className="bg-primary text-white text-center p-4 rounded-lg mt-4"
            to="/forgot-password/otp"
          >
            Reset Password
          </Link>

          <div className="text-center mt-4">
            <p className="text-black">
              Return to{" "}
              <Link className="text-primary font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Featured />
    </div>
  );
};

export default ForgotPassword;
