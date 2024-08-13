import Navigator from "../../components/navigator";
import Otp from "../../components/otp";
import Button from "../../components/button";
import Featured from "../../components/featured";

const confirmAccount = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="h-screen w-[90%] sm:w-[50%] xl:w-[30%] mt-8 md:mt-0 p-4 lg:p-12 flex flex-col text-black gap-8">
        <div className="flex items-center">
          <Navigator />
          <h3 className="text-3xl font-semibold ml-2">Confirm Account</h3>
        </div>

        <Otp />

        <Button to="/welcome" text="Continue" />
      </div>
      <Featured />
    </div>
  );
};

export default confirmAccount;
