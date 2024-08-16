import { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/blank-profile-picture-973460_960_720.webp";
import transactions from "../pages/Account/Transactions/data";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsTicketDetailed } from "react-icons/bs";
import { TiSupport } from "react-icons/ti";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const icons = [
    {
      id: 0,
      name: "Transactions",
      iconClass: <AiOutlineTransaction />,
      notificationCount: transactions.length,
      component: "transactions",
      to: "transactions",
    },
    {
      id: 1,
      name: "Dispute",
      iconClass: <BsTicketDetailed />,
      notificationCount: 0,
      component: "dispute",
      to: "disputes",
    },
    {
      id: 2,
      name: "Support",
      iconClass: <TiSupport />,
      notificationCount: 0,
      component: "support",
      to: "support",
    },
  ];

  const handleIconClick = (index: number) => setActiveIcon(index);

  return (
    <div className="h-[4rem] md:h-screen w-full md:min-w-[5rem] md:w-[5rem] fixed bottom-0 md:relative flex flex-row md:flex-col justify-between items-center bg-slate-100 z-[100] md:py-10 px-4 md:px-6 border-r ">
      <div className="flex md:flex-col items-center justify-center w-full md:h-auto space-x-10 md:space-x-0 md:space-y-10">
        {icons.map((icon, index) => (
          <Link
            key={icon.id}
            className="relative group flex flex-col items-center justify-center"
            to={icon.to}
            onClick={() => handleIconClick(index)}
          >
            <i
              className={`text-[2rem] cursor-pointer transition-all duration-500 ease ${
                activeIcon === index
                  ? "text-black"
                  : "text-gray-500 group-hover:text-black"
              }`}
              aria-label={icon.name}
            >
              {icon.iconClass}
            </i>
            {icon.notificationCount > 0 && (
              <span className="absolute top-[0px] right-[12px] bg-blue-500 text-white text-xs rounded-full px-1">
                {icon.notificationCount}
              </span>
            )}
            <span className="text-xs md:hidden">{icon.name}</span>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center mt-0 md:mt-auto">
        <Link to="settings" className="flex items-center space-x-2 w-[4rem] ">
          <img
            src={profileImg}
            className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]  rounded-full border-2 border-gray-300 cursor-pointer"
            alt="User profile picture"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
