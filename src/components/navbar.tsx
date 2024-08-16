import { Link } from "react-router-dom";
import Logo from "./logo";
import { RiToggleLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const links = [
    {
      id: 0,
      name: "Features",
      path: "/features",
    },
    {
      id: 1,
      name: "How it works",
      path: "/how-it-wworks",
    },
    {
      id: 2,
      name: "Legal",
      path: "/legal",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
  ];
  return (
    <div className="w-full flex items-center justify-between h-[4rem] py-[2.5rem] px-[2rem] ">
      <Logo />
      <div>
        <ul className="w-full flex gap-10 flex-wrap hidden lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className="text-[1.2rem] font-bold transition ease duration-150 hover:text-primary"
                to={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden flex-row gap-4 md:flex">
        <Link
          className="bg-transparent border-transparent text-primary font-semibold py-[.7rem] px-[1.5rem] rounded-[1.6rem] border-2 border-primary"
          to="/login"
        >
          Log in
        </Link>
        <Link
          className="bg-primary text-white font-semibold py-[.7rem] px-[1.5rem] rounded-[1.6rem]"
          to="/register"
        >
          Create account
        </Link>
      </div>
      <div className="block cursor-pointer lg:hidden text-4xl">
        <RiToggleLine />
      </div>
      <div className="block cursor-pointer lg:hidden text-4xl">
        <RiMenu3Line />
      </div>
    </div>
  );
};

export default Navbar;
