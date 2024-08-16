import Button from "../../../components/button";

const Fundtransaction3 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-full md:w-[60%]mt-1 py-0 md:py-8 px-4 flex flex-col justify-start md:justify-start text-black gap-3 bg-white rounded-lg overflow-y-auto">
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold ml-10">Fund transaction</h3>
        </div>

        <Button to="/add-bank-info" text="I have made payment" />
      </div>
    </div>
  );
};

export default Fundtransaction3;
