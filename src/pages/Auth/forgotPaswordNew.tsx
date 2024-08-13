import Navigator from "../../components/navigator";
import Button from "../../components/button";

import Featured from "../../components/featured";

const ForgotPasswordNew = () => {
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="h-screen w-[90%] sm:w-[50%] xl:w-[30%] mt-8 md:mt-0 p-4 lg:p-12 flex flex-col text-black gap-8">
        <div className="flex items-center">
          <Navigator />
          <h3 className="text-3xl font-semibold ml-2">Forgot Password</h3>
        </div>

        <p className="text-md">Create a new and secured password.</p>

        <form className="flex flex-col gap-6">
          <label htmlFor="new-password" className="text-sm">
            Enter New Password
            <input
              type="password"
              name="new-password"
              id="new-password"
              className="w-full bg-gray-200 p-4 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
            />
          </label>

          <label htmlFor="confirm-password" className="text-sm">
            Confirm New Password
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="w-full bg-gray-200 p-4 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
            />
          </label>

          <Button to="/confirm-account" text="Continue" />
        </form>
      </div>
      <Featured />
    </div>
  );
};

export default ForgotPasswordNew;
