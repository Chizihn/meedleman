import Navigator from "../../../components/navigator";
import Button from "../../../components/button";
import userProfileImage from "../../../assets/images/blank-profile-picture-973460_960_720.webp";

const updateProfile = () => {
  const input =
    "w-full lg:w-full block bg-gray-200 py-3 px-5 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary";

  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-screen w-full md:w-[80%] lg:w-[60%] xl:w-[80%] mt-1 md:mt-0 py-6 md:py-4 lg:py-10 px-6 flex flex-col justify-start text-black gap-5 overflow-y-auto">
        <div className="flex items-center">
          <Navigator to="" />
          <h3 className="text-3xl font-semibold ml-2">Update Profile</h3>
        </div>

        <div className="flex justify-center items-center ">
          <img
            src={userProfileImage}
            alt="userProfileImage"
            className="w-[100px] h-[100px] rounded-[50%]"
          />
        </div>

        <form className="flex flex-col gap-6 w-[90%]">
          <label htmlFor="name" className="text-sm">
            Username
            <input
              type="text"
              name="username"
              id="userName"
              placeholder="Username"
              className={input}
            />
          </label>

          <label htmlFor="name" className="text-sm">
            Full name
            <input
              type="text"
              name="fullname"
              id="fullName"
              placeholder="Full name"
              className={input}
            />
          </label>

          <label htmlFor="name" className="text-sm">
            Phone number
            <div className="flex gap-1 w-[100%]">
              <select
                name="countrycode"
                id="countryCode"
                defaultValue="+234"
                className="w-[6rem] bg-gray-200 p-3 border border-gray-300 rounded-lg mt-1 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <option value="male">+234</option>
              </select>
              <input
                type="tel"
                name="phonenumber"
                id="phoneNumber"
                placeholder="Phone number"
                className={`${input}]`}
              />
            </div>
          </label>

          <label htmlFor="gender" className="text-sm">
            Gender
            <select
              name="gender"
              id="gendere"
              defaultValue="Male"
              className={input}
            >
              <option value="male">Male</option>
            </select>
          </label>

          <label htmlFor="name" className="text-sm">
            Email
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Email"
              maxLength={10}
              className={input}
            />
          </label>

          <Button to="/add-bank-info" text="Uppdate" />
        </form>
      </div>
    </div>
  );
};

export default updateProfile;
