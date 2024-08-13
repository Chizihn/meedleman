import { Link } from "react-router-dom";
import meddleheroImage from "../assets/images/meddle-hero-image.png";
import pointerImg from "../assets/images/point.png";

const Hero = () => {
  return (
    <div className="h-auto flex items-center justify-center p-2 md:p-15">
      <div className="flex flex-col items-center justify-around w-full max-w-[1200px] mx-auto gap-10 relative lg:flex-row">
        <div className="block absolute bottom-[-2rem] opacity-20 z-0 md:opacity-0 lg:relative block lg:opacity-100 z-10">
          <img
            className="w-[25rem] h-[20rem] lg:w-[50rem] lg:h-[25rem]"
            src={meddleheroImage}
            alt="Meddleman home hero"
          />
        </div>
        <div className="w-[90%] flex flex-col justify-center gap-[.5rem] p-[0rem] ls:p-[2rem] relative z-20 my-[0] mx-[auto] sm:gap-[1rem]">
          <h1 className="text-5xl font-black text-primary lg:text-6xl">
            Empowering <br /> Secure Deals
          </h1>
          <p className="font-base text-lg w-full sm:w-[80%] lg:w-[90%]">
            Our cutting-edge escrow solution ensures that whether you’re buying,
            selling, or exchanging, your funds and assets are safeguarded with
            the utmost care. With a track record of reliability and a commitment
            to transparency, we are your trusted partner in secure transactions.
          </p>

          <div className="flex flex-row justify-start gap-[2rem] md:justify-center lg:justify-start">
            <Link
              className="bg-primary text-white font-semibold py-[.8rem] px-[2rem] rounded-[1.5rem]"
              to="/register"
            >
              Create an account
            </Link>
            <Link
              className="bg-transparent text-primary font-semibold py-[.8rem] px-[2rem] rounded-[1.5rem] border-2 border-primary"
              to="/how-it-works"
            >
              See how it works
            </Link>
          </div>
          <div className="flex justify-center items-center w-[82%] lg:w-[60%]">
            <img
              className="w-[10rem] h-[8rem]"
              src={pointerImg}
              alt="pointer"
            />
          </div>
          <div className="flex justify-evenly gap-[1.5rem] md:justify-center md:gap-[2rem] lg:justify-start lg:gap-[2.5rem]">
            <div className="flex flex-row gap-[.2rem] lg:gap-[1rem]">
              <h2 className="text-[2rem] font-medium lg:text-[2.5rem]">400K</h2>
              <span className="text-[1rem] lg:text-[1.2rem]">
                Happy <br /> customers
              </span>
            </div>
            <div className="flex flex-row gap-[.2rem] lg:gap-[1rem]">
              <h2 className="text-[2rem] font-medium lg:text-[2.5rem]">
                N15M+
              </h2>
              <span className="text-[1rem] lg:text-[1.2rem]">
                Transaction <br /> completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
