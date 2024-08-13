import Navigator from "../../../components/navigator";
import Button from "../../../components/button";

const BankInformation = () => {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-[90%] md:w-[60%] xl:w-[80%] mt-8 md:mt-0 py-10 px-2 flex flex-col justify-start md:justify-start text-black gap-8">
        <div className="flex items-center">
          <Navigator to="/dashboard/settings" />
          <h3 className="text-3xl font-semibold ml-2">Bank information</h3>
        </div>

        <form className="flex flex-col gap-6">
          <label htmlFor="gender" className="text-sm">
            Bank name
            <select
              name="bankname"
              id="bankName"
              defaultValue="Opay"
              className="w-full bg-gray-200 py-3 px-5 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <option value="male">Opay</option>
            </select>
          </label>

          <label htmlFor="name" className="text-sm">
            Account number
            <input
              type="number"
              name="accountNumber"
              id="accountNumber"
              placeholder="Account number"
              maxLength={10}
              className="w-full bg-gray-200 py-3 px-5 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
            />
          </label>

          <label htmlFor="name" className="text-sm">
            Account name
            <input
              type="text"
              name="accountname"
              id="accountName"
              placeholder="Account name"
              className="w-full bg-gray-200 py-3 px-5 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
            />
          </label>

          <Button to="/add-bank-info" text="Continue" />
        </form>
      </div>
    </div>
  );
};

export default BankInformation;
