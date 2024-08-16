import { useState, useRef } from "react";
import { LuDelete } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import PaymentMethod from "./paymentMethod";

const Fundtransaction1 = () => {
  const [amount, setAmount] = useState<string>("");
  const [inputVisible, setInputVisible] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNumClick = (num: string) => {
    setAmount((prevAmount) => prevAmount + num);
  };
  const handleDelete = () => {
    setAmount((prevAmount) => prevAmount.slice(0, -1));
  };
  const handleSubmit = () => {
    console.log("Submitted Amount", amount);
    paymentMode();
  };

  const showInput = () => {
    setInputVisible(true);
    inputRef.current?.focus();
  };

  const paymentMode = () => {
    <PaymentMethod />;
  };
  const numStyle =
    "bg-gray-300 w-[60px] h-[60px] rounded-[50%] flex justify-center items-center text-2xl font-semibold cursor-pointer";

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-full md:w-[60%]mt-1 py-0 md:py-8 px-4 flex flex-col justify-start md:justify-start text-black gap-3 bg-white rounded-lg overflow-y-auto">
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold ml-10">Fund transaction</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mt-10">
          <div className="flex flex-row justify-center items-center gap-4 h-[4rem]">
            <p className="text-4xl font-bold">NGN</p>
            {inputVisible && (
              <input
                type="number"
                name="amount"
                value={amount}
                id="contractAmount"
                className=" w-[70%] h-[4rem] bg-transaparent outline-transparent font-black text-4xl"
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
                    showInput();
                  }}
                >
                  {num + 1}
                </span>
              ))}
              <span></span>
              <span
                className="bg-gray-300 w-[60px] h-[60px] rounded-[50%] flex justify-center items-center text-2xl font-semibold cursor-pointer"
                onClick={() => {
                  handleNumClick("0");
                  showInput();
                }}
              >
                0
              </span>
              <span
                className="w-[60px] h-[60px] rounded-[50%] flex justify-center items-center text-5xl cursor-pointer"
                onClick={() => {
                  handleDelete();
                  showInput();
                }}
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
      </div>
    </div>
  );
};

export default Fundtransaction1;
