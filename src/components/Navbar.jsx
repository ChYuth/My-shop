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

import Profil from "../assets/img/image.png";
import Login from "./navbar/Login";

const NAV_LINKS = [
  { id: 1, name: "Home", path: "/", icon: <IoHomeOutline /> },
  { id: 2, name: "Products", path: "/products", icon: <AiOutlineProduct /> },
  { id: 3, name: "Contact", path: "/contact", icon: <RiMailLine /> },
  { id: 4, name: "About", path: "/about", icon: <AiOutlineInfoCircle /> },
  { id: 5, name: "Favorite", path: "/favorite", icon: <AiOutlineHeart /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Reusable NavItem Component
  const NavItem = ({ item, onClick }) => (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 shadow-lg  ${
          isActive ? "bg-sky-950 text-white" : "text-gray-300 hover:bg-sky-900"
        }`
      }
    >
      {item.icon}
      {item.name}
    </NavLink>
  );

  return (
    <>
      <nav className="w-full h-16 flex items-center justify-between px-6 bg-slate-900 shadow-md rounded-b-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <SiSpringsecurity className="text-3xl text-blue-500" />
          <h1 className="text-xl font-bold text-white ">Digital Store</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          {NAV_LINKS.map((item) => (
            <NavItem item={item} />
          ))}
          <button
            onClick={() => setShowLogin(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 active:scale-95 transition"
          >
            <FaUser /> Login
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          <HiMenu />
        </button>

        {/* Profile Image */}
        <img
          src={Profil}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
        />
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
          <Login modalLogin={setShowLogin} />
        </div>
      )}
    </>
  );
};

export default Navbar;
