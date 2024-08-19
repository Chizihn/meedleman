import transactions from "./data";
import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Button from "../../../components/button";

const TransactionList = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const isTransactionsPage = location.pathname === "/dashboard/transactions";

  const buttons = [
    { id: 0, text: "All" },
    { id: 1, text: "Completed" },
    { id: 2, text: "In progress" },
    { id: 3, text: "Group" },
  ];

  const addTransaction = () => {
    navigate("/dashboard/transactions/new-transaction");
  };

  const viewTransaction = (id: number) => {
    navigate(`/dashboard/transactions/${id}`);
  };

  const getTransactions = () => {
    switch (activeButton) {
      case 1:
        return transactions.filter(
          (transaction) => transaction.status === "Completed"
        );
      case 2:
        return transactions.filter(
          (transaction) => transaction.status === "In-progress"
        );
      case 3:
        return transactions.filter(
          (transaction) => transaction.status === "Group"
        );
      default:
        return transactions;
    }
  };

  const filteredTransactions = getTransactions()
    .filter((transaction) =>
      transaction.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice()
    .reverse();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-100 ">
      <div
        className={`h-screen bg-white p-8 relative border-r ${
          isTransactionsPage ? "w-full md:w-full" : "w-full md:w-[50%]"
        }`}
      >
        <h2 className="text-3xl font-bold">Transactions</h2>
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-slate-100 w-full p-3 mt-4 rounded"
        />
        {transactions.length > 0 && (
          <div className="mt-4 flex gap-2 flex-wrap">
            {buttons.map((button) => (
              <button
                key={button.id}
                className={`px-4 py-1 rounded-full cursor-pointer transition-all duration-300 ease relative ${
                  activeButton === button.id
                    ? "bg-primary text-white"
                    : "bg-slate-100 hover:bg-primary hover:text-white"
                }`}
                onClick={() => setActiveButton(button.id)}
              >
                {button.text}
              </button>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-featured overflow-y-auto"
                onClick={() => viewTransaction(transaction.id)}
              >
                <img
                  src={transaction.profileImg.profileImage}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="relative w-[80%] flex flex-row justify-between">
                  <div>
                    <h4 className="text-lg text-wrap">{transaction.title}</h4>
                    <p className="text-sm">
                      NGN {transaction.price.toLocaleString()} -{" "}
                      {transaction.description}
                    </p>
                  </div>
                  <div>
                    <span className="ml-auto text-sm text-right">
                      {transaction.due}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4 mt-10">
              <p className="text-center text-2xl font-semibold">
                No transation yet.
              </p>
              <p className="text-center text-1xl text-gray-500">
                You have not started a transaction yet
              </p>

              <Button
                to="/dashboard/transactions/new-transaction/"
                text="Start a transaction"
              />
            </div>
          )}
        </div>

        <div className="absolute bottom-[5rem] right-[2rem] flex items-center justify-center">
          <button
            className="w-12 h-12 bg-primary font-bold rounded-full text-white text-2xl cursor-pointer"
            onClick={addTransaction}
          >
            +
          </button>
        </div>
      </div>

      <div className="bg-slate absolute top-[-.5rem] left-[0] md:relative w-full md:relative mt-2 md:mt-0 z-[100]">
        <Outlet />
      </div>
    </div>
  );
};

export default TransactionList;
