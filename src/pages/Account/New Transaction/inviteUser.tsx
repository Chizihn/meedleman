import { useState } from "react";
import Navigator from "../../../components/navigator";
import Button from "../../../components/button";
import users from "./data";

const InviteUser = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <div className="h-[95vh] md:h-screen w-[90%] md:w-[60%] xl:w-[80%] mt-1 py-3 md:py-10 px-2 flex flex-col justify-start md:justify-start text-black gap-7 relative">
        <div className="flex items-center">
          <Navigator to="" />
          <h3 className="text-3xl text-center font-semibold ml-2">
            Invite User
          </h3>
        </div>

        <div>
          <p>Username</p>
          <input
            type="search"
            className="w-full bg-slate-100 p-4 border rounded-lg mt-1 focus:outline-none focus:ring focus:ring-primary"
            name="searchuser"
            id="searchUser"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search a username"
          />
        </div>

        {searchTerm && (
          <div className="space-y-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.userName}
                  className="bg-slate-100 py-4 px-2 rounded-xl flex flex-row gap-4 cursor-pointer transition 500ms ease hover:bg-slate-200"
                >
                  <div>
                    <img
                      src={user.profileImg.img}
                      alt={user.userName}
                      className="w-[3.5rem] h-[3.5rem] rounded-[50%]"
                    />
                  </div>
                  <div className="flex flex-col text-slate-500 text-sm">
                    <h3 className="font-semibold text-[1.5rem] text-black mb-1">
                      {user.userName}
                    </h3>
                    <p>
                      Member since:{" "}
                      <span className="text-black">{user.regDate}</span>
                    </p>
                    <p>
                      Successful transactions:{" "}
                      <span className="text-black">{user.transactions}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xl text-slate-500">
                No users found
              </p>
            )}
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full">
          <Button
            to="/dashboard/transactions/transaction-created"
            text="Proceed"
          />
        </div>
      </div>
    </div>
  );
};

export default InviteUser;
