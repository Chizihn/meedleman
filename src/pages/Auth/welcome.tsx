import Logo from "../../components/logo";
import Button from "../../components/button";

const Welcome = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-screen w-[95%] sm:w-[65%] xl:w-[50%] mt-8 md:mt-0 p-6 lg:p-12 flex flex-col justify-start md:justify-center text-black gap-8">
        <Logo />
        <p>
          <strong className="mb-8">Welcome to Meedleman</strong>
          <br />
          No more fear in transacting with people. Get confident in transacting
          small and large money transaction with people you don{"'"}t know.{" "}
          <br />
          <br />
          Your funds are 100% secure with <strong>Meedleman</strong>.
        </p>
        <div className="h-3rem bg h-[15rem]">
          <div></div>
        </div>

        <Button to="/dashboard" text="Continue" />
      </div>
    </div>
  );
};

export default Welcome;
