import { useParams, useNavigate, Link } from "react-router-dom";
import transactions from "./data";

const TransactionInfo = () => {
  const { id } = useParams() as { id: string };
  const transaction = transactions.find((t) => t.id === parseInt(id));
  const index = transactions.findIndex((t) => t.id === parseInt(id));
  const navigate = useNavigate();

  if (!transaction) {
    return <p>Transaction not found</p>;
  }

  const deleteTransaction = () => {
    if (index !== -1) {
      transactions.splice(index, 1);
    }
    navigate("/dashboard/transactions");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-full md:w-[60%]mt-1 py-0 md:py-8 px-4 flex flex-col justify-start md:justify-start text-black gap-3 bg-white rounded-lg">
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold ml-10">Transactions info</h3>
        </div>

        {/** Contract owner profile image, title of contract, price, and due date */}
        <div className="flex flex-col items-center">
          <img
            src={transaction.profileImg.profileImage}
            alt="Profile Image"
            className="w-[5rem] h-[5rem] rounded-full"
          />
          <div className="text-center mt-4">
            <h3 className="text-[1.2rem] font-semibold">{transaction.title}</h3>
            <p className="text-md text-gray-500">
              NGN{transaction.price} - Due on {transaction.due}
            </p>
          </div>
        </div>

        {/** Fund, Delete, and Report buttons */}
        <div id="fund-delete-report" className="flex justify-center gap-3 mt-2">
          <Link
            to={`/dashboard/transactions/${id}/fund-transaction`}
            className="bg-gray-200 py-2 px-4 rounded-lg text-center"
          >
            Fund Contract
          </Link>
          <Link
            to="/dashboard/transactions/"
            className="bg-gray-200 py-2 px-4 rounded-lg text-center"
            onClick={deleteTransaction}
          >
            Delete
          </Link>
          <Link
            to="/dashboard/transactions"
            className="bg-gray-200 py-2 px-4 rounded-lg text-center"
          >
            Report
          </Link>
        </div>

        {/** Description and Date */}
        <div
          id="description-date"
          className="bg-gray-100 py-2 px-4 rounded-lg mt-2"
        >
          <p>{transaction.description}</p>
          <p className="text-gray-500 text-sm">
            Created date: {transaction.date}
          </p>
        </div>

        {/** Contractors */}
        <div className="w-[calc(100vh -50%)]  overflow-y-auto">
          <div className="mt-1">
            <h4 className="text-lg font-semibold">2 Parties</h4>
            <div className="flex flex-col gap-1">
              <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                <img
                  src={transaction.profileImg.profileImage}
                  alt="Profile Image"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-4">
                  <h5 className="font-semibold">Dulecode</h5>
                  <p className="text-sm text-gray-500">
                    Member: Since May 5th, 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                <img
                  src={transaction.profileImg.profileImage}
                  alt="VictorJohn"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-4">
                  <h5 className="font-semibold">Victorjohn</h5>
                  <p className="text-sm text-gray-500">Awaiting confirmation</p>
                </div>
              </div>
            </div>
          </div>

          {/** Agreement, Milestone, and Transaction Links */}
          <div className="mt-1 flex flex-col gap-4">
            <Link
              to={`/dashboard/transactions/${id}/agreement`}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <p className="font-semibold">Agreement</p>
              <p className="text-sm text-gray-500">Signed (1)</p>
            </Link>
            <Link
              to={`/dashboard/transactions/${id}/milestone`}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <p className="font-semibold">Milestone</p>
              <p className="text-sm text-gray-500">2 of 2</p>
            </Link>
            <Link
              to=""
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <p className="font-semibold">Transactions</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfo;
