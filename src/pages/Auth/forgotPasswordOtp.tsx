import Navigator from "../../components/navigator";
import Otp from "../../components/otp";
import Button from "../../components/button";

import Featured from "../../components/featured";

const ForgotPasswordOtp = () => {
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="h-screen w-[90%] sm:w-[50%] xl:w-[30%] mt-8 md:mt-0 p-4 lg:p-12 flex flex-col text-black gap-[2rem]">
        <div className="flex items-center">
          <Navigator />
          <h3 className="text-3xl font-semibold ml-2">Forgot Password</h3>
        </div>

        <Otp />

        <Button to="/forgot-password/new-password" text="Continue" />
      </div>
      <Featured />
    </div>
  );
};

export default ForgotPasswordOtp;
