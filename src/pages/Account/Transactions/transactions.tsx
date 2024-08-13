import transactions from "./data";
import profileImg from "../../../assets/images/blank-profile-picture-973460_960_720.webp";
import { useState } from "react";

const TransactionList = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const buttons = [
    { id: 0, text: "All" },
    { id: 1, text: "Completed" },
    { id: 2, text: "In progress" },
    { id: 3, text: "Group" },
  ];

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

  const filteredTransactions = getTransactions().filter((transaction) =>
    transaction.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[100%] h-screen md:w-[45%] p-8 relative">
      <h2 className="text-3xl font-bold">Transactions</h2>
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-[#eee] w-full p-3 mt-4 rounded"
      />
      {transactions.length > 0 && (
        <div className="mt-4 flex gap-2">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`px-4 py-1 rounded-full cursor-pointer transition-all duration-300 ease relative ${
                activeButton === button.id
                  ? "bg-primary text-white"
                  : "bg-[#eee] hover:bg-primary hover:text-white"
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
              className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-featured"
            >
              <img
                src={profileImg}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="relative w-[100%] md:w-[70%]">
                <h4 className="text-lg">{transaction.title}</h4>
                <p className="text-sm">
                  NGN {transaction.price.toLocaleString()} -{" "}
                  {transaction.description}
                </p>
                <span className="ml-auto text-sm absolute top-0 right-0">
                  {transaction.date}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl text-gray-500">
            You have no transaction.
          </p>
        )}
      </div>

      <button className="absolute md:fixed bottom-[5rem] right-[2rem] w-12 h-12 bg-primary text-white font-bold rounded-full flex items-center justify-center text-2xl">
        +
      </button>
    </div>
  );
};

export default TransactionList;
