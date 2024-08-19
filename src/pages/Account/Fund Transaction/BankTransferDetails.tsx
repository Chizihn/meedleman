const BankTransferDetails = ({ onConfirm }: { onConfirm: () => void }) => {
  return (
    <div className="w-full px-4 py-8 bg-white rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Bank Transfer</h3>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">
            Account Name: Middleman Transaction
          </p>
          <p className="text-lg">Account Number: 0123456789</p>
          <p className="text-lg">Bank Name: Monipoint</p>
          <p className="text-lg">Reference: MM3893890</p>
          <p className="text-sm mt-2">
            Kindly include your reference number when sending money to avoid
            loss of funds.
          </p>
        </div>
        <button
          className="bg-primary text-white p-4 rounded-lg text-lg font-semibold mt-4"
          onClick={onConfirm}
        >
          I have made payment
        </button>
      </div>
    </div>
  );
};

export default BankTransferDetails;
