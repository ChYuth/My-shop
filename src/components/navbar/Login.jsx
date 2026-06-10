import React, { useState } from "react";
import { RiFullscreenExitFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiShop } from "react-icons/gi"; //shop
// icon
import { FaFacebook } from "react-icons/fa"; // facebook
import { FaSquareXTwitter } from "react-icons/fa6"; // X
import { FcGoogle } from "react-icons/fc"; //google
const socialLogins = [
  // { name: "Facebook", icon: <FaFacebook />, color: "text-blue-600 " },
  // { name: "Twitter", icon: <FaSquareXTwitter />, color: "text-black" },
  { name: "Google", icon: <FcGoogle />, color: "" },
];
const Login = ({ modalLogin }) => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <form
          action="#"
          className="
    w-full lg:w-[420px] md:w-[500px] bg-blue-800/30
    rounded-3xl shadow-2xl p-6
    border border-slate-200
  "
        >
          {/* title */}
          <div className="w-full h-4 flex justify-between px-4 py-2    text-white/90">
            <h1 className="text-lg font-bold select-none ">Login</h1>
            <button
              type="button"
              onClick={() => modalLogin(false)}
              className="font-extrabold text-2xl active:text-red-500 active:scale-95 duration-75 cursor-pointer"
            >
              <RiFullscreenExitFill />
            </button>
          </div>
          <header
            className="text-3xl font-extrabold text-center mt-8 mb-4 lg:mt-6 lg:mb-2 
                   max-w-fit p-2 rounded-t-2xl rounded-b-2xl  m-auto px-4    text-white/90 flex items-center gap-2"
          >
            Login To shop
          </header>
          {/* email */}
          <div className="w-full h-full flex flex-col gap-2 px-6  ">
            <label htmlFor="email" className="font-bold text-xl  text-white">
              email
            </label>
            <div
              className="
              w-full flex items-center
              border border-slate-300
              rounded-xl
              px-4 py-3
              gap-3
              bg-white
              transition-all duration-300
              focus-within:ring-2
              focus-within:ring-sky-500
              focus-within:border-sky-500
              text-sky-950
            "
            >
              <span className="text-xl text-blue-600">
                <MdEmail />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name3333@gmail.com"
                className="w-full outline-0   text-sky-950"
              />
            </div>
          </div>
          {/* password */}
          <div className="w-full h-full flex flex-col gap-2 px-6 mt-2">
            <label htmlFor="password" className="font-bold text-xl  text-white">
              password
            </label>
            <div
              className="
               w-full flex items-center
              border border-slate-300
              rounded-xl
              px-4 py-3
              gap-3
              bg-white
              transition-all duration-300
              focus-within:ring-2
              focus-within:ring-sky-500
              focus-within:border-sky-500
            "
            >
              <RiLockPasswordLine className="text-xl  text-blue-700 " />

              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                placeholder="••••••••••"
                className="
                w-full
                bg-transparent
                outline-none
                text-sky-950
                placeholder:text-slate-500
              "
              />

              <button
                type="button"
                onClick={() => setshow(!show)}
                className="
                text-bluye-950
                hover: text-sky-950
                transition-colors
                duration-200
                cursor-pointer
              "
              >
                {show ? <IoEyeSharp size={20} /> : <FaEyeSlash size={18} />}
              </button>
            </div>
          </div>
          <div className="w-full h-full flex justify-between p-2 px-6 text-sm mt-2 ">
            <div className="max-w-fit h-full flex gap-2 items-center  text-white">
              <input
                type="checkbox"
                id="checked"
                name="checked"
                className=" h-4 w-4  cursor-pointer "
              />
              <label htmlFor="checked">Remember</label>
            </div>
            <span className=" text-white hover:underline hover:text-blue-600 cursor-pointer">
              Forgot password
            </span>
          </div>
          {/* btn */}
          <div className="w-full h-full flex items-center justify-center px-6">
            <button
              className="mt-2 bg-blue-800 w-full  text-white cursor-pointer  py-2  rounded-2xl active:scale-95 active:bg-blue-600"
              type="button"
            >
              Login
            </button>
          </div>
          <span className="text-gray-600/70 w-full flex justify-center mt-2"> OR </span>
          <div>
            <div className=" w-full h-full flex justify-center items-center gap-6 mt-2 px-4">
              {socialLogins.map((social) => (
                <button
                  type="button"
                  className="text-3xl hover:opacity-80 transition-opacity  w-full text-center px-2"
                  aria-label={`Sign in with ${social.name}`}
                >
                  <span className=" flex items-center gap-2 text-[1rem] w-full justify-center border border-gray-700 rounded-md p-2 cursor-pointer ">{social.icon} <span className=" text-white text-sm">Continue with Google Account</span></span>
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm mt-4 m-auto  mb-4  w-full h-full flex justify-center items-center gap-2">
           Don't have an account  
            <span className="underline cursor-pointer font-bold">
             sign up
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
