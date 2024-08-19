import disputes from "./data";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { BsTicketDetailed } from "react-icons/bs";

const Disputes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState(0);
  const navigate = useNavigate();

  const viewDispute = (id: number) => {
    navigate(`/dashboard/disputes/${id}`);
  };

  const buttons = [
    { id: 0, text: "All" },
    { id: 1, text: "Resolved" },
    { id: 2, text: "In progress" },
  ];

  const getDisputes = () => {
    switch (activeButton) {
      case 1:
        return disputes.filter((dispute) => dispute.status === "Resolved");
      case 2:
        return disputes.filter((dispute) => dispute.status === "In-progress");
      default:
        return disputes;
    }
  };

  const filtereddisputes = getDisputes().filter((dispute) =>
    dispute.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-100 ">
      <div
        className={
          "h-screen bg-white p-8 relative overflow-y-auto w-full md:w-[80%]"
        }
      >
        <h2 className="text-3xl font-bold">Disputes</h2>
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-slate-100 w-full p-3 mt-4 rounded"
        />

        {disputes.length > 0 && (
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

        <div className="mt-4 space-y-4">
          {filtereddisputes.length > 0 ? (
            filtereddisputes.map((dispute) => (
              <div
                key={dispute.id}
                className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-featured"
                onClick={() => viewDispute(dispute.id)}
              >
                <img
                  src={dispute.disputeImg.disputeImage}
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="relative w-[80%]">
                  <h4 className="text-lg">{dispute.title}</h4>
                  <span className="ml-auto text-sm">
                    Dispute started on {dispute.date}
                  </span>
                  <p></p>
                </div>
              </div>
            ))
          ) : (
            <div className="h-100% flex flex-col gap-4 juatify-center items-center">
              <span className="text-7xl text-primary">
                {" "}
                <BsTicketDetailed />
              </span>
              <h3 className="text-center text-3xl font-semibold text-black">
                No dispute yet.
              </h3>
              <p>Disputes are used to resolve transactions between parties.</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white absolute top-[-.5rem] left-[0] md:relative w-full md:relative mt-2 md:mt-0 z-[1000]">
        <Outlet />
      </div>
    </div>
  );
};

export default Disputes;
