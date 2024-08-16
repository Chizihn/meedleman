import Navigator from "../../../components/navigator";
import Button from "../../../components/button";
const InviteUser = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-[90%] md:w-[60%] xl:w-[80%] mt-1 py-10 px-2 flex flex-col justify-start md:justify-start text-black gap-8">
        <div className="flex items-center">
          <Navigator to="" />
          <h3 className="text-3xl font-semibold ml-2">Invite User</h3>
        </div>

        <Button
          to="/dashboard/transactions/transaction-created"
          text="Proceed"
        />
      </div>
    </div>
  );
};

export default InviteUser;