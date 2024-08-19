import Navigator from "../../../components/navigator";
import Button from "../../../components/button";
import Contract from "../../../components/agreement";

const TransactionAgreement = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="h-[95vh] md:h-screen w-[90%] md:w-[60%] xl:w-full mt-1 pb-3 md:pb-10 px-2 flex flex-col justify-start md:justify-start text-black gap-8 overflow-y-auto scroll-smooth focus:scroll-auto relative">
        <div className="bg-white flex items-center sticky top-0 left-0 p-[-10px] md:p-10">
          <Navigator to="" />
          <h3 className="text-3xl font-semibold ml-2">Transaction agreement</h3>
        </div>

        <div className="w-[95%] w-[80%] mx-auto">
          <Contract />
        </div>
        <Button to="/dashboard/transactions/invite-user" text="Proceed" />
      </div>
    </div>
  );
};

export default TransactionAgreement;
