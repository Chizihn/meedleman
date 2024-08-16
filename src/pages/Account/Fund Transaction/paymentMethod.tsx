const PaymentMethod = () => {
  return (
    <div className="absolute left-0 bottom 0 w-[50%] h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-full md:w-[60%]mt-1 py-0 md:py-8 px-4 flex flex-col justify-start md:justify-start text-black gap-3 bg-white rounded-lg overflow-y-auto">
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold ml-10">Choose fund method</h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
