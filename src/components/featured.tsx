import meddleImage from "../assets/images/med-hero.webp";

const Featured = () => {
  return (
    <div className="bg-featured w-screen h-screen md:w-[70%] p-8 xl:p-28 hidden xl:flex flex-col justify-center items-center gap-6 overflow-hidden">
      <img
        src={meddleImage}
        alt="Meddleman"
        className="w-[55rem] h-auto rounded-lg"
      />

      <div className="text-left">
        <strong className="text-lg">
          We are making the internet safer every day.
        </strong>
        <p className="mt-2 text-left text-sm md:text-base w-full md:w-3/5 lg:w-4/5">
          Our main goal is to ensure you transact with people online like the
          way you would want to transact with family, siblings, or loved ones.{" "}
          <br />
          <span className="text-primary">#TRUST_MEDDLEMAN</span>
        </p>
      </div>
    </div>
  );
};

export default Featured;
