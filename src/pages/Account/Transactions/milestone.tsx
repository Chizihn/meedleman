const Milestone = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-full md:w-[60%]mt-1 py-0 md:py-8 px-4 flex flex-col justify-start md:justify-start text-black gap-4 bg-white rounded-lg overflow-y-auto">
        <div className="flex items-center ml-10">
          <h3 className="text-3xl font-semibold">Milestone</h3>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-1 w-[100px] h-[100px] bg-slate-200 border-[5px] border-primary rounded-[50%] flex justify-center items-center">
            <p className="text-lg font-bold">33%</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto text-sm">
          <div className="py-2 px-6 bg-slate-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold">First Milestone</p>
            <p className="text-slate-600">
              This Vendor Agreement (“Agreement”) is made and entered into as of
              [Date], by and between [Your Company Name].
            </p>
            <div className="flex justify-between gap-4 mt-4">
              <button className="bg-gray-400 text-white px-6 py-2 rounded-lg">
                Approve
              </button>
              <button className="bg-primary text-white px-6 py-2 rounded-lg">
                Reject
              </button>
            </div>
          </div>

          <div className="py-2 px-6 bg-slate-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Second Milestone</p>
            <p className="text-slate-600">
              This Vendor Agreement (“Agreement”) is made and entered into as of
              [Date], by and between [Your Company Name].
            </p>
            <div className="flex justify-start mt-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                Mark as done
              </button>
            </div>
          </div>

          <div className="py-2 px-6 bg-slate-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Third Milestone</p>
            <p className="text-slate-600">
              This Vendor Agreement (“Agreement”) is made and entered into as of
              [Date], by and between [Your Company Name].
            </p>
            <div className="text-right mt-4">
              <p className="text-sm text-slate-500">
                Completed on 20th Aug 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
