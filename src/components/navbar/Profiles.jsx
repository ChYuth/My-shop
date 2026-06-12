import React from "react";
import { motion } from "framer-motion";
import { IoMdSettings } from "react-icons/io"; //setting
import { FaSignOutAlt } from "react-icons/fa"; //sign out
import { button } from "motion/react-client";
const pro = [
  {name: 'Setting', icon: <IoMdSettings/>},
  {name: 'Sign Out', icon: <FaSignOutAlt/>},
]
const Profiles = () => {
  return (
    <motion.div
    initial={{opacity:0, x:100}}
    whileInView={{opacity:1,x:0}}
    transition={{duration:0.3, delay:0.5}}
    viewport={{once:true}}
    className="w-full h-full flex flex-col items-center justify-between gap-2  shadow-lg border
     bg-slate-950 p-2 rounded-2xl">
      <div className="text-center">
        <h1 className="font-extrabold">John Nathan</h1>
        <span className="text-sm text-gray-500"> John123@gmail.com</span>
      </div>
      {pro.map((items,index) =>{
       return(
         <button className="w-full h-auto flex items-center justify-center gap-2 bg-sky-950/60 shadow-md px-2 py-1.5 rounded-2xl mb-2 active:scale-95">
          {items.icon} {items.name}
        </button>
       )
      })}
    </motion.div >
  );
};

export default Profiles;
