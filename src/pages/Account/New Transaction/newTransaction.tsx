import { useState } from "react";
import Navigator from "../../../components/navigator";
import Button from "../../../components/button";
import transactions from "../Transactions/data";
import profileImg from "../../../assets/images/blank-profile-picture-973460_960_720.webp";

const NewTransaction = () => {
  const [updatedTransactions, setUpdatedTransactions] = useState(transactions);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    const addTransaction = {
      id: updatedTransactions.length,
      profileImg: { profileImage: profileImg },
      title: title,
      price: parseFloat(price),
      description: description,
      due: due,
      date: date,
      status: "In-progress",
    };

    setUpdatedTransactions([...updatedTransactions, addTransaction]);
  };

  const input =
    "w-full lg:w-full block bg-gray-200 py-3 px-5 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary placeholder-slate-400";

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="md:relative w-full h-screen flex justify-center items-center bg-white scroll-smooth focus:scroll-auto overflow-y-auto">
      <div className="h-[95vh] md:h-screen w-[90%] md:w-[60%] xl:w-[80%] mt-1 py-3 md:py-10 px-2 flex flex-col justify-start text-black gap-8 scroll-smooth focus:scroll-auto">
        <div className="flex items-center">
          <Navigator to="" />
          <h3 className="text-3xl font-semibold ml-2">New transaction</h3>
        </div>

        <form
          className="flex flex-col gap-6 w-[90%]"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="transactionName">
            Transaction name
            <input
              type="text"
              name="transactionname"
              id="transactionName"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Transaction name"
              className={input}
            />
          </label>
          <label htmlFor="itemCategory">
            Item category
            <select
              name="itemcategory"
              id="itemCategory"
              defaultValue="Domain name"
              className={input}
            >
              <option value="domainName">Domain name</option>
            </select>
          </label>
          <label htmlFor="userRole" className="text-sm">
            My role
            <select
              name="userrole"
              id="userRole"
              defaultValue="Buyer"
              className={input}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </label>
          <label htmlFor="transactionAmount" className="text-sm">
            Transaction amount
            <div className="flex gap-1 w-[100%]">
              <select
                name="currency"
                id="currency"
                defaultValue="NGN"
                className="w-[6rem] bg-gray-200 p-3 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <option value="NGN">NGN</option>
              </select>
              <input
                type="tel"
                name="amount"
                id="amount"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="200,000"
                className={input}
              />
            </div>
          </label>
          <label htmlFor="transactionendDate" className="text-sm">
            Transaction date
            <input
              type="date"
              name="transactionendDate"
              id="transactionEndDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Transaction Date"
              className={input}
            />
          </label>

          <label htmlFor="transactiondescription">
            Transaction description
            <textarea
              name="transactionDescription"
              id="transactionDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's the transaction about?"
              className={input}
              rows={4}
            />
          </label>

          <label htmlFor="firstmilestone">
            First milestone
            <textarea
              name="firstmilestone"
              id="firstMilestone"
              placeholder="What should be achieved?"
              className={input}
            />
          </label>

          <label htmlFor="disbursementAmount" className="text-sm">
            Disbursement amount
            <div className="flex gap-1 w-[100%]">
              <select
                name="disbursementcurrency"
                id="disbursementCurrency"
                defaultValue="NGN"
                className="w-[6rem] bg-gray-200 p-3 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <option value="NGN">NGN</option>
              </select>
              <input
                type="tel"
                name="disbursementamount"
                id="disbursementAmount"
                placeholder="200,000"
                className={input}
              />
            </div>
          </label>

          <label htmlFor="tdueDate">
            Due date
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              value={due}
              onChange={(e) => setDue(e.target.value)}
              placeholder={currentDate}
              className={input}
            />
          </label>

          <Button
            to="/dashboard/transactions/transaction-agreement"
            text="Proceed"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default NewTransaction;
