import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// 1. នាំចូល createPortal ពី react-dom
import { createPortal } from "react-dom";

import { SiSpringsecurity } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { FaUser, FaSearch } from "react-icons/fa";

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
  const [authModal, setAuthModal] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const NavItem = ({ item, onClick }) => (
    <NavLink to={item.path} onClick={onClick}>
      {({ isActive }) => (
        <div
          className={`group flex items-center gap-2 transition-all duration-300 ${
            isActive ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {item.icon}

          <span className="relative">
            {item.name}

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
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
      <nav className="w-full px-4 lg:px-6 py-3 bg-slate-900 rounded-b-xl shadow-lg relative">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <SiSpringsecurity className="text-3xl text-blue-500" />

            <h1 className="hidden md:block text-xl font-bold text-white">
              Digital Store Service
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 ">
            {/* Search */}
            <div
              className="
                flex items-center
                rounded-full
                px-2 py-2
                bg-slate-950/50
                border-2 border-transparent
                hover:border-blue-500
                focus-within:border-blue-500
                transition-all duration-300
                mr-6 gap-2
              "
            >
              <FaSearch className="text-gray-400 " />

              <input
                type="text"
                placeholder="Search..."
                className="
                  bg-transparent
                  outline-none
                  text-white
                  placeholder:text-gray-400
                  w-28 lg:w-48
                "
              />
            </div>

            {/* Login Button */}
            <button
              onClick={() => setAuthModal("login")}
              className="
                hidden lg:flex
                items-center gap-2
                px-4 py-2
                bg-blue-500
                hover:bg-blue-600
                active:scale-95
                rounded-lg
                text-white
                transition-all duration-300
              "
            >
              <FaUser />
              Login
            </button>

            {/* Profile */}
            <div
              className="relative"
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            >
              <img
                src={profil}
                alt="Profile"
                className="
                  w-10 h-10 rounded-full
                  cursor-pointer
                  border-2 border-transparent
                  hover:border-blue-500
                  transition-all duration-300
                "
              />

              <div
                className={`
                  absolute right-0 top-10 z-50
                  transition-all duration-300
                  ${
                    showProfile
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }
                `}
              >
                <Profiles />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white text-3xl"
              onClick={() => setOpen(!open)}
            >
              <HiMenu />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden absolute left-0 right-0 top-full mt-2 mx-4
            bg-slate-900
            border border-slate-700
            rounded-xl
            shadow-lg
            transition-all duration-300
            z-40
            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <div className="flex flex-col gap-4 p-4">
            {NAV_LINKS.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                onClick={() => setOpen(false)}
              />
            ))}

            <button
              onClick={() => {
                setAuthModal("login");
                setOpen(false);
              }}
              className="
                flex items-center justify-center gap-2
                px-4 py-2
                bg-blue-500
                hover:bg-blue-600
                rounded-lg
                text-white
                transition-all duration-300
              "
            >
              <FaUser />
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* 2. កែប្រែផ្នែកបង្ហាញ Modal ដោយប្រើប្រាស់ createPortal ដើម្បីបញ្ជូនវាទៅកាន់ <body> tag ផ្ទាល់ */}

      {/* Login Modal */}
      {authModal === "login" &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <Login
              modalLogin={() => setAuthModal(null)}
              openRegister={() => setAuthModal("register")}
            />
          </div>,
          document.body,
        )}

      {/* Register Modal */}
      {authModal === "register" &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <Register showregister={() => setAuthModal(null)} />
          </div>,
          document.body,
        )}
    </>
  );
};

export default Navbar;
