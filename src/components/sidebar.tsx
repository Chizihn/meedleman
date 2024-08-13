import { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/blank-profile-picture-973460_960_720.webp";
import { TiSupport } from "react-icons/ti";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const icons = [
    {
      id: 0,
      name: "notif",
      iconClass: <TiSupport />,
      notificationCount: 0,
      component: "transactions",
      to: "",
    },
    {
      id: 1,
      name: "Dispute",
      iconClass: <TiSupport />,
      notificationCount: 0,
      component: "dispute",
      to: "disputes",
    },
    {
      id: 2,
      name: "Blog",
      iconClass: <TiSupport />,
      notificationCount: 0,
      component: "blog",
      to: "blog",
    },
    {
      id: 3,
      name: "Support",
      iconClass: <TiSupport />,
      notificationCount: 0,
      component: "support",
      to: "support",
    },
  ];

  const handleIconClick = (index: number) => setActiveIcon(index);

  return (
    <div className="h-[4rem] md:h-screen w-full md:w-[7rem] fixed bottom-0 md:relative flex flex-row md:flex-col justify-start md:justify-between items-center bg-[#eee] z-[100] md:py-10 px-6">
      <div className="flex md:flex-col items-center justify-around w-3/4 md:h-auto space-y-0 md:space-y-10">
        {icons.map((icon, index) => (
          <Link key={icon.id} className="relative group" to={icon.to}>
            <i
              className={`text-3xl cursor-pointer w-[30px] h-[30px] relative transition-all duration-500 ease ${
                activeIcon === index
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => handleIconClick(index)}
              aria-label={icon.name}
            >
              {icon.iconClass}
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 text-xs md:hidden">
                {icon.name}
              </span>
              {icon.notificationCount > 0 && (
                <span className="absolute top-[-5px] left-[12px] bg-blue-500 px-1 rounded-xl text-sm text-white">
                  {icon.notificationCount}
                </span>
              )}
            </i>
          </Link>
        ))}
      </div>

      <div className="absolute right-2 md:right-0 md:relative flex justify-center items-center mt-0 ml-9 md:ml-0 md:mt-auto">
        <Link to="settings" className="mt-auto">
          <img
            src={profileImg}
            className="w-[47px] h-[45px] rounded-full border-2 border-gray-300 cursor-pointer"
            alt="User profile picture"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
