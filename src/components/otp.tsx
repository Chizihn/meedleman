const Otp = () => {
  return (
    <div>
      <p className="text-md mb-4">
        Enter the six digit code sent to your email.
      </p>

      <form className="flex flex-col gap-6">
        <div className="flex justify-between">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-14 h-16 text-center bg-gray-200 p-4 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Otp;
