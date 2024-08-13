const Social = () => {
  const socialBg =
    "bg-gray-200 w-full h-12 rounded-lg border border-gray-300 flex justify-center items-center cursor-pointer transition 800ms ease hover:bg-gray-300";
  return (
    <div className="flex gap-4">
      <button className={socialBg}>
        <i className="bx bxl-google text-xl"></i>
      </button>
      <button className={socialBg}>
        <i className="bx bxl-apple text-xl"></i>
      </button>
    </div>
  );
};

export default Social;
