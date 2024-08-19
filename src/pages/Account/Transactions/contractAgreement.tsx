import Contract from "../../../components/agreement";

const ContractAgreement = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-full md:w-[60%]mt-1 py-0 md:py-8 px-4 flex flex-col justify-start md:justify-start text-black gap-4 bg-white rounded-lg">
        <div className="flex items-center ml-10">
          <h3 className="text-3xl font-semibold">Agreement</h3>
        </div>

        <div className="overflow-y-auto mt-4">
          <Contract />{" "}
        </div>
      </div>
    </div>
  );
};

export default ContractAgreement;
