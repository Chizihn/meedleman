import Button from "../../../components/button";
import { GrTransaction } from "react-icons/gr";
import transactions from "../Transactions/data";

const TransactionCreated = () => {
  const newTransaction = transactions.slice(-1)[0];

  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-[90%] md:w-[60%] xl:w-[80%] mt-1 py-3 md:py-10 px-2 flex flex-col justify-center text-black gap-8 relative">
        <div className="flex flex-col gap-8 justify-center items-center py-4 px-2">
          <div className="flex flex-col justify-center items-center gap-8">
            <h3 className="text-3xl font-semibold">Transaction Created!</h3>

            <span className="text-7xl text-primary">
              <GrTransaction />
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <p>
              <strong>{newTransaction.title}</strong> transaction has been
              created successfully.
            </p>

            <p>
              Waiting for both parties to agree and sign. Share the transaction
              secure code or send QR code so that the seller can agree to the
              terms.
            </p>
          </div>
        </div>
        <div className="absolute bottom-[0] left-[0] w-full ">
          <Button
            to={`/dashboard/transactions/${newTransaction.id}`}
            text="View Transaction"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionCreated;
