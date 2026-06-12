import React, { useState } from "react";
import { SiSpringsecurity } from "react-icons/si";
import { NavLink, Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import {
  AiOutlineProduct,
  AiOutlineInfoCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { RiMailLine } from "react-icons/ri";
import profil from "../assets/img/image.png";
import Login from "./navbar/Login";
import Register from "./navbar/Register";
import Profiles from "./navbar/Profiles";

const NAV_LINKS = [
  { name: "Home", path: "/", icon: <IoHomeOutline /> },
  { name: "Products", path: "/products", icon: <AiOutlineProduct /> },
  { name: "Contact", path: "/contact", icon: <RiMailLine /> },
  { name: "About", path: "/about", icon: <AiOutlineInfoCircle /> },
  { name: "Favorite", path: "/favorite", icon: <AiOutlineHeart /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showprofil, setshowprofile] = useState(false);

  // Reusable NavItem Component
  const NavItem = ({ item, onClick }) => (
    <NavLink to={item.path} onClick={onClick}>
      {({ isActive }) => (
        <div
          className={`group flex items-center gap-2 ${
            isActive ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {item.icon}
          <span className="relative">
            {item.name}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-zinc-50 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </span>
        </div>
      )}
    </NavLink>
  );

  return (
    <>
      <nav className="w-full h-18 flex items-center justify-between gap-2  px-6 bg-slate-900 shadow-md rounded-b-lg mt-2">
        <div className="w-full flex justify-around bg-slate-950/60  rounded-2xl py-1.5  opacity-90">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center w-[250px] gap-2"
          >
            <SiSpringsecurity className="text-3xl text-blue-500" />
            <h1 className="text-xl font-bold text-white ">
              Digital Store Service
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 w-4/5 justify-end">
            {NAV_LINKS.map((item) => (
              <NavItem item={item} />
            ))}
            <button
              onClick={() => {
                setShowLogin(true);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-2 py-2 bg-blue-500  rounded-md text-white hover:bg-blue-600 active:scale-95 transition"
            >
              <FaUser /> Login
            </button>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          <HiMenu />
        </button>

        {/* Profile Image */}
        <div
          className="flex relative"
          tabIndex={0}
          onMouseEnter={() => setshowprofile(true)}
          onMouseLeave={() => setshowprofile(false)}
        >
          <img
            src={profil}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            // onClick={() => setshowprofile(!showprofil)}
          />

          {showprofil && (
            <div className="absolute right-[-10px] top-10 w-[200px] h-auto z-10">
              <Profiles />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <ul
          className="max-w-fit lg:hidden flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-zinc-50
         bg-slate-900 text-white absolute top-18  m-auto  z-40 border-t border-gray-700"
        >
          {NAV_LINKS.map((item) => (
            <NavItem item={item} onClick={() => setOpen(false)} />
          ))}
          <button
            onClick={() => {
              setShowLogin(true);
              setOpen(false);
            }}
            className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-blue-500 rounded-md mt-2"
          >
            <FaUser /> Login
          </button>
        </ul>
      )}
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <Login modalLogin={setShowLogin} openRegister={setShowRegister} />
        </div>
      )}
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <Register showregister={setShowRegister} />
        </div>
      )}
    </>
  );
};

export default Navbar;
