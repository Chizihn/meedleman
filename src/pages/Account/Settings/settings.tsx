import { Link, Outlet } from "react-router-dom";
import profileImg from "../../../assets/images/blank-profile-picture-973460_960_720.webp";

const Settings = () => {
  const profileLinks = [
    {
      name: "Account summary",
      iconClass: "bx bx-image",
      linkTo: "account-summary",
    },
    {
      name: "Update Profile",
      iconClass: "bx bx-edit",
      linkTo: "update-profile",
    },
    {
      name: "Bank information",
      iconClass: "bx bx-wallet",
      linkTo: "bank-information",
    },
    { name: "Help", iconClass: "bx bx-help-circle", linkTo: "help" },
    { name: "Terms of use", iconClass: "bx bx-file", linkTo: "terms" },
    {
      name: "Suggest a feature",
      iconClass: "bx bx-plus-circle",
      linkTo: "suggest-feature",
    },
  ];

  return (
    <div className="bg-[#eee] flex flex-row h-full">
      <div className="w-full md:w-[50%] lg:w-40% p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <div className="bg-white p-4 rounded-lg mb-6 flex flex-row md:flex-col lg:flex-row items-center space-x-4">
          <img
            src={profileImg}
            alt="Profile"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Dule Martins</h2>
            <p className="text-sm text-gray-500">@dulecode</p>
            <p className="text-sm text-gray-500">Joined 5th August 2024</p>
          </div>
          <span className="ml-auto text-blue-500">✔️</span>
        </div>

        <div className="flex flex-col gap-2">
          {profileLinks.map((item, index) => (
            <Link to={item.linkTo} key={index}>
              <div className="bg-white p-4 rounded-lg hover:bg-gray-200 transition duration-300 ease">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className={`${item.iconClass} text-xl`}></i>
                    <span className="font-bold">{item.name}</span>
                  </div>
                  <i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 md:relative w-full md:w-inherit z-[10000] md:z[1]">
        <div className="bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Settings;
