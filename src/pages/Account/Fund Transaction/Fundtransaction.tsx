import { useState, useRef } from "react";
import { LuDelete } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import PaymentMethod from "./paymentMethod";
import BankTransferDetails from "./BankTransferDetails";

const FundTransaction = () => {
  const [amount, setAmount] = useState<string>("");
  const [inputVisible, setInputVisible] = useState<boolean>(true);
  const [showCurrency, setShowCurrency] = useState<boolean>(false);
  const [showPayment, setShowPayment] = useState<boolean>(false); // Controls visibility of payment components
  const [step, setStep] = useState<number>(1);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleNumClick = (num: string) => {
    setAmount((prevAmount) => prevAmount + num);
    setInputVisible(true);
    setShowCurrency(true);
  };

  const handleDelete = () => {
    setAmount((prevAmount) => prevAmount.slice(0, -1));
    if (amount.length === 1) {
      setInputVisible(false);
      setShowCurrency(false);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Amount", amount);
    setShowPayment(true); // Show the payment options on submit
    setStep(2);
  };

  const handlePaymentSelect = (method: string) => {
    if (method === "bankTransfer") {
      setStep(3);
    }
  };

  const handlePaymentConfirmation = () => {
    console.log("Payment confirmed");
  };

  const numStyle =
    "bg-gray-300 w-[60px] h-[60px] rounded-[50%] flex justify-center items-center text-2xl font-semibold cursor-pointer";

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-full md:w-[60%]mt-1 py-0 md:py-8 px-4 flex flex-col justify-start md:justify-start text-black gap-3 bg-white rounded-lg overflow-y-auto">
        <div className="flex items-center ml-10">
          <h3 className="text-3xl font-semibold">Fund transaction</h3>
        </div>

        {/* Display the amount input section */}
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-row justify-center items-center gap-4 h-[4rem]">
            {showCurrency && (
              <p className="text-4xl font-bold text-white">NGN</p>
            )}
            {inputVisible && (
              <input
                type="number"
                name="amount"
                value={amount}
                id="contractAmount"
                className="w-[70%] h-[4rem] bg-transparent outline-none text-black font-black text-4xl"
                ref={inputRef}
                readOnly
              />
            )}
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="grid grid-cols-3 gap-8">
              {[...Array(9).keys()].map((num) => (
                <span
                  key={num + 1}
                  className={numStyle}
                  onClick={() => {
                    handleNumClick((num + 1).toString());
                  }}
                >
                  {num + 1}
                </span>
              ))}
              <span></span>
              <span
                className={numStyle}
                onClick={() => {
                  handleNumClick("0");
                }}
              >
                0
              </span>
              <span
                className="w-[60px] h-[60px] rounded-[50%] flex justify-center items-center text-5xl cursor-pointer"
                onClick={handleDelete}
              >
                <LuDelete />
              </span>
            </div>
            <span
              className="bg-primary w-[60px] h-[60px] rounded-[50%] flex justify-center items-center text-2xl text-white mt-4 font-semibold cursor-pointer"
              onClick={handleSubmit}
            >
              <TiTick />
            </span>
          </div>
        </div>

        {/* Conditional rendering for PaymentMethod or BankTransferDetails */}
        {showPayment && (
          <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-white rounded-t-lg p-4 overflow-y-auto">
            {step === 2 && <PaymentMethod onSelect={handlePaymentSelect} />}
            {step === 3 && (
              <BankTransferDetails onConfirm={handlePaymentConfirmation} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FundTransaction;
