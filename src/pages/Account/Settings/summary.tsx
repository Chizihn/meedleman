import Navigator from "../../../components/navigator";
import Button from "../../../components/button";

const AccountSummary = () => {
  const card =
    "w-[10rem] bg-slate-100 flex flex-col gap-2 rounded-2xl text-sm flex flex-col justify-center items-center py-6 px-0 lg:px-0";
  const font = "font-semibold text-lg";

  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-[90%] md:w-[80%] lg:w-[60%] xl:w-[80%] mt-1 py-6 md:py-4 lg:py-10 px-2 flex flex-col justify-start md:justify-start text-black gap-8">
        <div className="flex items-center">
          <Navigator to="" />
          <h3 className="text-3xl font-semibold ml-2">Account Summary</h3>
        </div>

        <p className="text-md">Total activitites on your account so far</p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <div className={card}>
            <span className={font}>30</span>
            <p>Transactions performed</p>
          </div>
          <div className={card}>
            <span className={font}>NGN 20,000.00</span>
            <p>Value of transactions</p>
          </div>
          <div className={card}>
            <span className={font}>NGN 20,000,000</span>
            <p>Debit</p>
          </div>
          <div className={card}>
            <span className={font}>NGN 180,000.00</span>
            <p>Credit</p>
          </div>
          <div className={card}>
            <span className={font}>0</span>
            <p>Disputes</p>
          </div>
        </div>

        <Button to="/add-bank-info" text="Download now" />
      </div>
    </div>
  );
};

export default AccountSummary;
