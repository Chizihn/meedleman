const PaymentMethod = ({
  onSelect,
}: {
  onSelect: (method: string) => void;
}) => {
  return (
    <div className="w-full px-4 py-8 bg-white rounded-lg">
      <h3 className="text-xl font-semibold mb-4">
        How would you like to fund?
      </h3>
      <div className="flex flex-col gap-4">
        <button
          className="bg-gray-100 p-4 rounded-lg text-lg font-semibold flex justify-between items-center"
          onClick={() => onSelect("bankTransfer")}
        >
          <span>Bank Transfer</span>
          <span>Powered by Monipoint</span>
        </button>
        <button
          className="bg-gray-100 p-4 rounded-lg text-lg font-semibold flex justify-between items-center"
          onClick={() => onSelect("onlinePayment")}
          disabled
        >
          <span>Online Payment</span>
          <span>Coming Soon!</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
