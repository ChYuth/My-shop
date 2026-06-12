import React, { useState } from "react";
import { motion } from "framer-motion";

// Icons
import { VscChromeClose } from "react-icons/vsc";
import { FaUserTie } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Register = ({ showregister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCfPassword, setshowCfPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className=" w-full lg:w-[420px] md:w-[500px] h-full flex items-center justify-center relative"
    >
      <form
        action="#"
        className=" overflow-auto
          w-full
          h-full
          lg:h-3/4
          mt-2
          md:w-[700px]
          lg:w-[600px]
          bg-blue-800/30
          rounded-3xl
          shadow-2xl
          p-4
          border
          border-slate-200
        "
      >
        {/* Header */}
        <div className="w-full flex justify-between items-center px-4 py-2 text-white/90">
          <h1 className="text-lg font-bold select-none">Register</h1>

          <button
            type="button"
            onClick={() => showregister(false)}
            className="
              text-2xl
              font-bold
              cursor-pointer
              transition-all
              duration-150
              hover:text-red-500
              active:scale-90
            "
          >
            <VscChromeClose />
          </button>
        </div>

        {/* Title */}
        <header
          className="
            text-3xl
            font-extrabold
            text-center
            mt-6
            mb-6
            text-white/90
          "
        >
          Register To Shop
        </header>

        {/* Username */}
        <div className="flex flex-col gap-2 px-6 mb-4 mt-[-20px]">
          <label htmlFor="username" className="font-bold text-xl text-white">
            Username
          </label>

          <div
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              border
              border-slate-300
              bg-white
              text-sky-950
              transition-all
              duration-300
              focus-within:ring-2
              focus-within:ring-sky-500
              focus-within:border-sky-500
            "
          >
            <FaUserTie className="text-xl text-blue-600" />

            <input
              type="text"
              id="username"
              name="username"
              placeholder="John Nathan"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 px-6 mb-4">
          <label htmlFor="email" className="font-bold text-xl text-white">
            Email
          </label>

          <div
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              border
              border-slate-300
              bg-white
              text-sky-950
              transition-all
              duration-300
              focus-within:ring-2
              focus-within:ring-sky-500
              focus-within:border-sky-500
            "
          >
            <MdEmail className="text-xl text-blue-600" />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="name333@gmail.com"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 px-6 mb-4">
          <label htmlFor="password" className="font-bold text-xl text-white">
            Password
          </label>

          <div
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              border
              border-slate-300
              bg-white
              transition-all
              duration-300
              focus-within:ring-2
              focus-within:ring-sky-500
              focus-within:border-sky-500
            "
          >
            <RiLockPasswordLine className="text-xl text-blue-700" />

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
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
              onClick={() => setShowPassword(!showPassword)}
              className="
                text-blue-950
                hover:text-sky-950
                transition-colors
                duration-200
                cursor-pointer
              "
            >
              {showPassword ? (
                <IoEyeSharp size={20} />
              ) : (
                <FaEyeSlash size={18} />
              )}
            </button>
          </div>
        </div>
        {/* comfirm password */}
        <div className="flex flex-col gap-2 px-6 mb-2">
          <label
            htmlFor="comfirmpassword"
            className="font-bold text-xl text-white"
          >
            Comfirm Password
          </label>

          <div
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              border
              border-slate-300
              bg-white
              transition-all
              duration-300
              focus-within:ring-2
              focus-within:ring-sky-500
              focus-within:border-sky-500
            "
          >
            <RiLockPasswordLine className="text-xl text-blue-700" />

            <input
              id="comfirmpassword"
              name="comfirmpassword"
              type={showCfPassword ? "text" : "password"}
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
              onClick={() => setshowCfPassword(!showCfPassword)}
              className="
                text-blue-950
                hover:text-sky-950
                transition-colors
                duration-200
                cursor-pointer
              "
            >
              {showCfPassword ? (
                <IoEyeSharp size={20} />
              ) : (
                <FaEyeSlash size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Submit */}
        <div className="px-6 mt-8">
          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              bg-sky-600
              text-white
              font-bold
              transition-all
              duration-300
              hover:bg-sky-700
              active:scale-95
            "
          >
            Register
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Register;
